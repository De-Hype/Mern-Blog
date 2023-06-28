import NoHeader from "../Components/NoHeader";

import { Link } from "react-router-dom";

const NotUser = () => {
  return (
    <>
    <NoHeader/>
    <div className="NotUser">
      <div className="NotUser__text">
        <h4 className="NotUser__main__heading">
          Looks Like You Have Logged Out
        </h4>
        <h5 className="NotUser__actions">
          <Link className="NotUser__links" to='/register'>Sign Up</Link> Or 
           <Link className="NotUser__links" to='/login'> Log In</Link>
        </h5>
      </div>
      {/* I Will Be Adding A Little Dramatic Sticking Right Here And It Will Be
      Shaking After Every half A SECOND */}
      <img src="" alt="" className="NotUser__image" />
    </div>
      </>
  );
};

export default NotUser;
