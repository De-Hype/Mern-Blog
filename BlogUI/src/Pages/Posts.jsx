import NoPost from "../Components/NoPost";
import Image from "../Assets/food9.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Backend__Url } from "../Utils";

const Posts = () => {
  const [text, setText] = useState([]);

  const ShrinkText = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  const getBlogs = async () => {
    const res = await axios
      .get(`${Backend__Url}/api/blog/all-post`)
      .catch((err) => console.error(err));
    const results = await res.data.allPost;
    return results;
  };

  useEffect(() => {
    getBlogs().then((results)=> setText(results));
  }, []);
  
  return (
    <>
      <div className="Posts">
        <Header />
        <div className="Posts__Div">
          {text.length ==0 && (<><h3 className="">No Posts found</h3></>)}
          
          {text.length > 0 && text.map((data, index) => (
            <div key={index} className="Posts__body">
            <img src={data.image.url} alt="" className="Posts__image" />
            <div className="Posts__texts">
              <h2 className="Posts__title">{data.title}</h2>
              <h3 className="HeroFeaturedPost__First__author"><span className="HeroFeaturedPost__First__author_span">Written By</span> {data.user.userName}</h3>
              <p className="HeroFeaturedPost__First__text">
                {ShrinkText(
                  `${data.content}`,
                  407
                )}
              </p>
              <button className="Posts__ReadMore">
                <Link to={`/blog/${data._id}`} className="Posts__ReadMore__Link">Read More</Link>
              </button>
            </div>
          </div>
          ))}
          
          
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Posts;
