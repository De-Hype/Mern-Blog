const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsync = require("../errors/catchAsync");
const AppError = require("../errors/AppError");
const dotenv = require("dotenv").config();

//Register Controller
module.exports.Register = catchAsync(async (req, res, next) => {
  const { firstName, lastName, userName, email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return next(new AppError("User already exist", 401));
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    firstName,
    lastName,
    userName,
    email,
    password: hashedPassword,
    Blog: [],
  });
  await newUser.save();
  return res.json({ status: "ok", message:"User registration succesfull" });
});

//Get ALL USERS
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const allUsers = await UserModel.find();
  if (!allUsers) {
    return next(new AppError("No users found", 404));
  }
  res.status("200").json({ allUsers });
});
exports.singleUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const singleUser = await UserModel.findById(id).populate("blogs");
  if (!singleUser) {
    return next(new AppError("No user found", 404));
  }
  res.status("200").json({ singleUser });
});

//Login

module.exports.Login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return next(new AppError("User does not exist", 401));
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return next(new AppError("Username or Password is incorrect", 404));
  }
  const token = jwt.sign({ id: user._id }, process.env.jwt_KEY);
  res.json({ token, status:'ok', userID: user._id });
});

//Change UserName

module.exports.changeUserName = catchAsync(async (req, res, next) => {
  const { userName, email, password, user } = req.body;
  const userExist = await UserModel.findOne({ email });
  if (!userExist) {
    return next(new AppError("User does not exist", 404));
  }
  const isUserPasswordValid = await bcrypt.compare(
    password,
    userExist.password
  );
  if (!isUserPasswordValid) {
    return next(new AppError("Username or Password is incorrect", 404));
  }
  const newDetails = await UserModel.findByIdAndUpdate(user, {
    userName,
  });
  await newDetails.save();
  res.json({ newDetails });
});
