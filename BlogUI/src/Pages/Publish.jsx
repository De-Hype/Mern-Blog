import { useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "../Assets/food9.png";
import { Backend__Url } from "../Utils";

import { useNavigate } from "react-router-dom";

//Here, We Will Have THe textarea and Lot OfOther Ibput Features

const Publish = () => {
  const [title, setTitle] = useState("");
  // const [permalink, setPermalink] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFileToBase(file)
    
  };
  const setFileToBase = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend =() =>{
      setImage(reader.result)
    }
  }

  const PublishRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${Backend__Url}/api/blog/add-post`, {
        title,
        image,
        content,
        user: localStorage.getItem("UserID"),
      });
      alert("Post Created Successfully");
      navigate("/my-post");
     
    } catch (error) {
      console.error(error);
      // console.log("Error Adding Post");
      alert("Check If Image Was Added Or Select Smaller Images")
    }
  };
  //Titles, Permalinks,  image/
  return (
    <>
      <Header />
      <div className="Publish">
        <form className="Publish__form" onSubmit={PublishRequest}>
          <div className="Publish__input">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="Publish__form__input"
              id="title__tag"
            />
            <input
              onChange={handleImageUpload}
              type="file"
              className="image__upload"
            />
            {/* <div className="Publish__form__input" ></div> */}
            <textarea
              name=""
              id="textarea"
              placeholder="Create"
              cols="30"
              rows="10"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit" className="Publish__Submit">
              Publish
            </button>
          </div>

          {/* <button type="submit" className="Publish__Submit">Publish</button> */}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Publish;
