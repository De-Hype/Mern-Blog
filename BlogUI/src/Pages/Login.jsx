import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Food from "../Assets/food9.png";
import logo from "../Assets/logo.png";
import { Backend__Url } from "../Utils";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { login } from "../redux/Authentication";
import { useCookies } from 'react-cookie'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ _, setCookies ] =  useCookies(['access_token'])


  const SubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${Backend__Url}/api/user/login`, {
        email,
        password,
      });
      if(res.data.status == "ok"){ 
       setCookies('access_token', res.data.token);
      const userData = res.data.userID
       alert("Login Succesfull! Enjoy!");
       dispatch(login())
       navigate("/");
       window.localStorage.setItem('UserID',userData);
      }
    
    } catch (error) {
      console.error(error);
    }
    //We Will Import A Hook Called react-cookie
    // console.log(res);
  };
  return (
    <div className="Login">
      <div className="Register__section">
        <div className="Register__Image__Container">
          <img src={logo} alt="" className="Register__image" />
        </div>
        <form
          action=""
          className="Register__form"
          method="post"
          onSubmit={SubmitLogin}
        >
          <h5 className="Register__heading">Login</h5>
          <div className="Register__inputs">
            <input
              type="email"
              name="email"
              placeholder="Email"
              id=""
              onChange={(e) => setEmail(e.target.value)}
              className="Register__field"
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
            Login
          </button>
          <h5 className="call__action">
            Has An Account?
            <Link className="action" to={"/register"}>
              Register
            </Link>
            Instead
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
