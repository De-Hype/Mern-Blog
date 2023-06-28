import { BsGithub, BsFacebook } from "react-icons/bs";
import { AiFillMediumCircle, AiFillTwitterCircle } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <BsFacebook className="footer__socials__icon" />
        <BsGithub  className="footer__socials__icon"/>
        <AiFillTwitterCircle className="footer__socials__icon"/>
        <AiFillMediumCircle className="footer__socials__icon"/>
      </div>
      <div className="footer__line"></div>
      <h5 className="footer__name">
        Designed And Built By David Hype <FaCrown/>
      </h5>
    </footer>
  );
};

export default Footer;
