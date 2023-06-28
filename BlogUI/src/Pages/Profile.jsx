import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { AiOutlineUser, AiFillSetting, AiFillHome } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import Settings from "../Components/ProfileComponents/Settings";
import UsersDetails from "../Components/ProfileComponents/UsersDetails";
import Stats from "../Components/ProfileComponents/Stats";

const Profile = () => {
  const [users, setUsers] = useState(true);
  const [settings, setSettings] = useState(false);
  const [stats, setStats] = useState(false);
  //users || settings|| stats
  //We Are Going To Have Different Functions.
  //Each Of The Function Will Make The Others True, False And False
  const HandleStats = () => {
    setStats(true);
    setSettings(false);
    setUsers(false);
    console.log('This Is Stats');
  };
  const HandleSettings = () => {
    setSettings(true);
    setStats(false);
    setUsers(false);
    console.log('This Is Settings');

  };
  const HandleUsers = () => {
    setUsers(true);
    setStats(false);
    setSettings(false);
    console.log('This Is Users');

  };
  return (
    <div className="Profile">
      <Header />
      <div className="ProfileDiv">
        <div className="Profile__left">
          <>
            <Link to={"/"} className="Profile__icon">
              <AiFillHome className="Profile__icons" />
            </Link>
          </>
          <div className="Profile__icon">
            <AiOutlineUser onClick={HandleUsers} className="Profile__icons" />
          </div>
          <>
            <Link to={"/create"} className="Profile__icon">
              <TfiWrite className="Profile__icons" />
            </Link>
          </>
          <div className="Profile__icon" onClick={HandleStats}>
            <IoIosStats className="Profile__icons" />
          </div>
          <div className="Profile__icon">
            <AiFillSetting className="Profile__icons" onClick={HandleSettings} />
          </div>
        </div>
        <div className="Profile__right">
          {users ? <UsersDetails/>:<></> }
          {settings ? <Settings/>:<></> }
          { stats ? <Stats/> : <></>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
