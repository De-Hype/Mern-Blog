import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backend__Url } from "../../Utils";
import axios from 'axios'

const UsersDetails = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const navigate = useNavigate()
  const UserDetailsFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Backend__Url}/api/user/reset-username`, {
        userName,
        email,
        password,
        user: localStorage.getItem("UserID"),
      });
      navigate('/')
      alert('Username Change Is Successful')
    } catch (error) {
      console.error(error);
    }

    console.log(currentUsername, confirmUsername, password, newUsername);
  };
  return (
    <div className="UsersDetails">
      <h5 className="UsersDetails__heading">Update User Details</h5>
      <form
        onSubmit={UserDetailsFormSubmit}
        action=""
        className=" form__inputs__users"
        method="post"
      >
       
        <input
          type="email"
          name=""
          placeholder="Email Address"
          className="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name=""
          className="username"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          name=""
          placeholder="New Username"
          className="username"
          onChange={(e) => setuserName(e.target.value)}
        />

        <button type="submit" className="form__confirm">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default UsersDetails;
