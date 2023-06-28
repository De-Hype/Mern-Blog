import { Link } from "react-router-dom";
const HeroRecentPost = () => {
  return (
    <div className="HeroRecentPost">
      <p className="HeroRecentPost__paragraphs">
        <Link className="HeroRecentPost__links" to={"/content"}>
          What Are Abstract Verbs
        </Link>
      </p>
      <p className="HeroRecentPost__paragraphs">
        <Link className="HeroRecentPost__links" to={"/content"}>
          What Are Abstract Verbs
        </Link>
      </p>
      <p className="HeroRecentPost__paragraphs">
        <Link className="HeroRecentPost__links" to={"/content"}>
          What Are Abstract Verbs
        </Link>
      </p>
      <p className="HeroRecentPost__paragraphs">
        <Link className="HeroRecentPost__links" to={"/content"}>
          What Are Abstract Verbs
        </Link>
      </p>
      <p className="HeroRecentPost__paragraphs">
        <Link className="HeroRecentPost__links" to={"/content"}>
          What Are Abstract Verbs
        </Link>
      </p>
    </div>
  );
};

export default HeroRecentPost;
