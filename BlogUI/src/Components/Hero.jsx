import HeroFeaturedPost from "./HeroSectionPost/HeroFeaturedPost";
import HeroRecentPost from "./HeroSectionPost/HeroRecentPost";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="Hero">
        <div className="Hero__boxes">
          <h3 className="Hero__title__">Featured Post</h3>
          <HeroFeaturedPost />
        </div>
        <div className="Hero__boxes space__sm ">
          <h3 className="Hero__title__">Recent Post</h3>
          <HeroRecentPost />
        </div>
      </div>
      {/* <h2 className="Hero__More__Post"> */}
        <Link className="Hero__More__Post" to={"/blogs"}>
          More Post
        </Link>
      {/* </h2> */}
    </>
  );
};

export default Hero;
