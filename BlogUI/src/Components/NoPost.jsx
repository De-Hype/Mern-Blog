import image from "../Assets/food9.png";
import { Link } from "react-router-dom";
const NoPost = () => {
  return (
    <div className="NoPost">
      <div className="NoPost__Content">
        <img src={image} alt="" className="No__Post__image" />
        <h2 className="NoPost__text">No Post Found</h2>
        <h2 className="NoPost__navigation">
          Go <Link className="No__Post__LINK" to={"/"}>Home</Link>
        </h2>
      </div>
    </div>
  );
};

export default NoPost;
