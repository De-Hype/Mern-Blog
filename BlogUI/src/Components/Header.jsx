import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineBell,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  

  const HandleMenu = () => {
    setShow(!show);
    // console.log("Clicked HandleMenu");
  };
  
  return (
    <div className="Header">
      <img src={Logo} alt="" className="Header__logo" />

      <ul className="Header__navigation">
        <li className="Header__nav">
          <Link className="Header__links" to={"/"}>
            Home
          </Link>
        </li>
        <li className="Header__nav">
          <Link className="Header__links" to={"/services"}>
            Our Services
          </Link>
        </li>
        <li className="Header__nav">
          <Link className="Header__links" to={"/blogs"}>
            Blogs
          </Link>
        </li>
        <li className="Header__nav">
          <Link className="Header__links" to={"/my-post"}>
            My Stories
          </Link>
        </li>
        <li className="Header__nav">
          <Link className="Header__links" to={"/create"}>
            Create
          </Link>
        </li>
        <Link to={"/profile"}>
          <img src={Logo} alt="" className="Header__User" />
        </Link>
      </ul>

      <AiOutlineMenu className="header__icons" onClick={HandleMenu} />

      <div className={show? "mobile__SCREEN": 'hide'}>
        <div className="mobile__screen__top">
          <img src={Logo} alt="" className="Header__logo" />
          <AiOutlineClose  className="header__icons close" onClick={HandleMenu} />
        </div>
        <div className="Mobile__Screen__Links">
          <Link className="mobile__links" to={'/'}>Home</Link>
          <Link className="mobile__links" to={'/services'}>Services</Link>
          <Link className="mobile__links" to={"/blogs"}>Blogs</Link>
          <Link className="mobile__links" to={"/my-post"}>My Stories</Link>
          <Link className="mobile__links" to={'/create'}>Create</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
