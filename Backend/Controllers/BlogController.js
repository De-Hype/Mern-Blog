const BlogModel = require("../Models/BlogModel");
const UserModel = require("../Models/UserModel");
const cloudinary = require("../Cloudinary");
const mongoose = require("mongoose");
const crypto = require("crypto");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const firebaseConfig = require("../helpers/firebase");
const catchAsync = require("../errors/catchAsync");
const AppError = require("../errors/AppError");

//addPost, updatePost, deletePost, getPostById, getAllPost

//For ADDING OR PUBLISHING BLOGS
exports.addPost = catchAsync(async (req, res, next) => {
  const { title, content, user } = req.body;
  const existing = await UserModel.findById(user);
  if (!existing) {
    return next(new AppError("Unable to find User", 404));
  }
  const checkTitle = await BlogModel.findOne({ title });
  if (checkTitle) {
    return next(new AppError("This titile and permalink already exist", 400));
  }
  //Firebase Starts Here
  const file = req.file;
  const filename = crypto.randomBytes(16).toString("hex");
  initializeApp(firebaseConfig);
  const storage = getStorage();
  const metadata = {
    contentType: req.file.mimetype,
  };
  const storageRef = ref(storage, filename);
  const snapshot = await uploadBytesResumable(storageRef, file, metadata);
  const downloadURL = await getDownloadURL(snapshot.ref);
  //Firebase Ends Here
  const newPost = new BlogModel({
    title,
    image: downloadURL,
    content,
    user,
  });

  let existingUser;

  existingUser = await UserModel.findById(user);
  if (!existingUser) {
    return next(new AppError("Unable to find user by this ID", 400));
  }

  const session = await mongoose.startSession();
  session.startTransaction();
  await newPost.save({ session });
  existingUser.blogs.push(newPost);
  await existingUser.save({ session });
  await session.commitTransaction();
  res.status(200).json({ newPost });
  console.log("Done");
});

//FOR UPDATING BLOG POST
exports.updatePost = catchAsync(async (req, res, next) => {
  const { title, content } = req.body;
  const postId = req.params.id;
  const blog = await BlogModel.findByIdAndUpdate(postId, {
    title,
    content,
  });
  if (!blog) {
    return next(new AppError("Unable to update post", 402));
  }
  await blog.save();
  res.status(200).json({ blog });
});

//For Deleting Blog Post
exports.deletePost = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  let blog;

  blog = await BlogModel.findByIdAndRemove(id).populate("user");
  await blog.user.blogs.pull(blog);
  await blog.user.save();

  if (!blog) {
    return next(new AppError("Unable to delete post", 500));
  }
  return res.status(200).json({ message: "Successfully Delete" });
});

//Get A Particular Post
exports.getSinglePost = catchAsync(async (req, res, next) => {
  const PostId = req.params.id;
  const post = await BlogModel.findById(PostId);
  if (!post) {
    return next(new AppError("Post not found", 404));
  }
  res.json({ post });
});
//FOR GETTING ALL BLOG POST
exports.getAllPost = catchAsync(async (req, res, next) => {
  const allPost = await BlogModel.find().populate("user");
  // .populate('user')
  if (!allPost) {
    return next(new AppError("No Posts found", 404));
  }

  res.status(200).json({ allPost });
});
