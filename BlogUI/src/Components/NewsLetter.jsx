import React from "react";

const NewsLetter = () => {
  return (
    <div className="NewsLetter">
      <h5 className="NewsLetter__heading">Newsletter</h5>
      <h5 className="NewsLetter__text">Subscribe To Our Newsletter</h5>
      <div className="Newsletter__subscribe">
        <input
          type="text"
          name=""
          placeholder="Get Daily Updates Via Email"
          className="Newsletter__input"
        />
        <button type="submit" className="Newsletter__submit">Submit</button>
      </div>
    </div>
  );
};

export default NewsLetter;
