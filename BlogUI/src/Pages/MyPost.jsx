import NoPost from "../Components/NoPost";
import Image from "../Assets/food9.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Backend__Url } from "../Utils";
import BlogCards from "../Components/BlogCards";

const MyPost = () => {
  const [myText, setMyText] = useState([]);
  const id = localStorage.getItem("UserID");
  const navigate = useNavigate();

  const getMyPost = async () => {
    const res = await axios
      .get(`${Backend__Url}/api/user/single-user/${id}`)
      .catch((err) => console.error(err));
    const results = await res.data.singleUser.blogs;
    return results;
  };

  useEffect(() => {
    getMyPost().then((results) => setMyText(results));
  }, []);

  return (
    <>
      <div className="Posts">
        <Header />
        <div className="Posts__Div">
          {myText.map((data, index) => (
            <BlogCards
              key={index}
              id={data._id}
              image={data.image.url}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MyPost;
