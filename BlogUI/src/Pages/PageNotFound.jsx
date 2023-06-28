const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__text">
        <h4 className="PageNotFound__heading">
          <span className="PageNotFound__error__Number">404</span>
          <span className="PageNotFound__error__text">Page Not Found</span>
        </h4>
        <h5 className="PageNotFound__action__text">
          Return
          <span className="PageNotFound__action__text__link">
            <a href="/">Home</a>
          </span>
        </h5>
      </div>
      <img src="" alt="" className="PageNotFound__image" />
    </div>
  );
};

export default PageNotFound;
