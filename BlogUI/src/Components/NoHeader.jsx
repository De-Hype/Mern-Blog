import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const NoHeader = () => {
  return (
    <header className="NoHeader">
      <img src={Logo} alt="" className="Header__logo" />
      <h5 className="NoHeader__nav">
        <Link className="No__Header__actions" to={"/login"}>
          Login
        </Link>
        <span className="NoHeader__slash">/</span>
        <Link className="No__Header__actions" to={"/register"}>
          Register
        </Link>
      </h5>
    </header>
  );
};

export default NoHeader;
