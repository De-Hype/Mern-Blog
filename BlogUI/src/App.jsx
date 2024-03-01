import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Create from "./Pages/Create";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import MyPost from "./Pages/MyPost";
import Services from "./Pages/Services";
import Posts from "./Pages/Posts";
import Content from "./Pages/Content";
import Publish from "./Pages/Publish";
import NotUser from "./Pages/NotUser";
import { useSelector } from "react-redux";
import NoHeader from "./Components/NoHeader";
import Update from "./Pages/Update";

const App = React.memo(() => {
  const { isLoggedIn } = useSelector((state) => state.Auth);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/create" element={<Publish />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/my-post" element={<MyPost />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/blogs" element={<Posts />} />
              <Route exact path="/blog/:id" element={<Content />} />
              <Route exact path="/blog/update/:id" element={<Update />} />
            </>
          ) : (
            <>
              <Route exact path="/" element={<NotUser />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
});

export default App;
