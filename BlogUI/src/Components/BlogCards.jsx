import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Backend__Url } from "../Utils";

const BlogCards = ({key, id, image, title, content }) => {
  const postId = id;
  const navigate = useNavigate();

  // console.log(postId)

  const ShrinkText = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const DeletePost = async () => {
    try {
      await axios.delete(`${Backend__Url}/api/blog/delete-post/${postId}`);
      alert('Post Deleted')
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };
  const updatePost = async () => {
    console.log("Updating Post");
    navigate(`/blog/update/${postId}`)
  };

  return (
    <div  className="myStyle">
      <div className="myStyle_icons">
        <RxUpdate onClick={updatePost} className="myStyle_icons_main" />
        <AiFillDelete onClick={DeletePost} className="myStyle_icons_main" />
      </div>
      <div className="Posts__body">
        <img src={image} alt="" className="Posts__image" />
        <div className="Posts__texts">
          <h2 className="Posts__title">{title}</h2>

          <p className="HeroFeaturedPost__First__text">
            {ShrinkText(`${content} `, 490)}
          </p>
          <button className="Posts__ReadMore">
            <Link to={`/blog/${postId}`} className="Posts__ReadMore__Link">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
