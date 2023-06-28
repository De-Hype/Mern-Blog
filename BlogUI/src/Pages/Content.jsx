// This Component will be About The Full Information Of Every Blog Post Clicked.
// So It Will Be Populated As Times Goes On
//Image, title, author, content

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "../Assets/food9.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Backend__Url } from "../Utils";
import { useEffect, useState } from "react";

const Content = () => {
  const id = useParams().id;
  const [contentData, setContentData] = useState([])

  const getPostDetails = async () => {
    const res = await axios
      .get(`${Backend__Url}/api/blog/post/${id}`)
      .catch((err) => console.error(err));
    const results = await res.data.post;
    setContentData([results]);
  };

  useEffect(() => {
    getPostDetails();
    // .then((results) => setContent(results));
  }, []);

  return (
    <>
      <Header />
      {contentData.map((data, index) => (
        <div key={index} className="Content">
          <h2 className="Content__heading">{data.title}</h2>

          <img src={data.image.url} alt="" className="Content__image" />
          <p className="Content__text">
            {data.content}
          </p>
        </div>
      ))}

      <Footer />
    </>
  );
};

export default Content;
