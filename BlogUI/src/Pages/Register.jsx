import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Food from "../Assets/food9.png";
import axios from "axios";
import { Backend__Url } from "../Utils";

const Register = () => {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SubmitRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${Backend__Url}/api/user/register`, {
        firstName,
        lastName,
        userName,
        email,
        password,
      });
      alert("Registration Succesfull! Now Login");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Register">
      <div className="Register__section">
        <div className="Register__Image__Container">
          <img src={Food} alt="" className="Register__image" />
        </div>
        <form
         
          className="Register__form"
         
          onSubmit={SubmitRegister}
        >
          <h5 className="Register__heading">Register</h5>
          <div className="Register__inputs">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              id=""
              onChange={(e) => setFname(e.target.value)}
              className="Register__field"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              id=""
              onChange={(e) => setLname(e.target.value)}
              className="Register__field"
            />
            <input
              type="text"
              name="userName"
              placeholder="Username"
              id=""
              onChange={(e) => setUserName(e.target.value)}
              className="Register__field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id=""
              className="Register__field"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
              onChange={(e) => setPassword(e.target.value)}
              className="Register__field"
            />
          </div>
          <button className="Register__btn" type="submit">
            Register
          </button>
          <h5 className="call__action">
            Has An Account?
            <Link className="action" to={"/login"}>
              Login
            </Link>
            Instead
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Register;
