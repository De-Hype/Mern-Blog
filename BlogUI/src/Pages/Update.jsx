import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "../Assets/food9.png";
import { Backend__Url } from "../Utils";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Here, We Will Have THe textarea and Lot OfOther Ibput Features

const Update = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const id = useParams().id;

  const getSinglePost = async () => {
    const res = await axios
      .get(`${Backend__Url}/api/blog/post/${id}`)
      .catch((err) => console.error(err));
    const results = await res.data.post;
    setTitle(results.title);
    setContent(results.content);
    // console.log(results);
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  const updateRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${Backend__Url}/api/blog/update-post/${id}`,
        {
          title,
          content,
        }
      );
      alert("Post Update Successfully");
      navigate("/my-post");
    } catch (error) {
      console.error(error);
      // console.log("Error Adding Post");
      alert("Check If Image Was Added Or Select Smaller Images");
    }
  };
  //Titles, Permalinks,  image/
  return (
    <>
      <Header />
      <div className="Publish">
        <form className="Publish__form" onSubmit={updateRequest}>
          <div className="Publish__input">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="Publish__form__input"
              id="title__tag"
            />

            {/* <div className="Publish__form__input" ></div> */}
            <textarea
              name=""
              id="textarea"
              placeholder="Create"
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit" className="Publish__Submit">
              Update
            </button>
          </div>

          {/* <button type="submit" className="Publish__Submit">Publish</button> */}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Update;
