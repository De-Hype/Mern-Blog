import image from "../../Assets/food9.png";

const HeroFeaturedPost = () => {
  return (
    <div className="HeroFeaturedPost">
      <div className="HeroFeaturedPost__FIRST">
        <div className="HeroFeaturedPost__First__title__image">
          <img src={image} alt="" className="HeroFeaturedPost__First__image" />
          <h2 className="HeroFeaturedPost__First__main__title">
            Introduction To A Blog Post
          </h2>
        </div>
       

        <p className="HeroFeaturedPost__First__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at
          quas mollitia nobis labore explicabo laboriosam reprehenderit,
          consequuntur asperiores minus itaque nam, modi dolores dolorem
          similique, blanditiis odit eveniet harum!
        </p>
        <h5 className="HeroFeaturedPost__FIRST__read__more">Read More</h5>
      </div>
      <div className="HeroFeaturedPost__SECOND">
        <div className="HeroFeaturedPost__SECOND__BOXES">
          <img
            src={image}
            alt=""
            className="HeroFeaturedPost__SECOND__images"
          />
          <div className="HeroFeaturedPost__SECOND__BOXES__CONTENT">
            <h2 className="HeroFeaturedPost__SECOND__title">
              Introduction Of Blog Post On The First
            </h2>
            <p className="HeroFeaturedPost__SECOND__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              nihil assumenda eveniet quod...
            </p>
            <h5 className="HeroFeaturedPost__SECOND__read__more">Read More</h5>
          </div>
        </div>
        <div className="HeroFeaturedPost__SECOND__BOXES gap">
          <img
            src={image}
            alt=""
            className="HeroFeaturedPost__SECOND__images"
          />
          <div className="HeroFeaturedPost__SECOND__BOXES__CONTENT">
            <h2 className="HeroFeaturedPost__SECOND__title">
              Introduction Of Blog Post On The First
            </h2>
            <p className="HeroFeaturedPost__SECOND__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              nihil assumenda eveniet quod...
            </p>
            <h5 className="HeroFeaturedPost__SECOND__read__more">Read More</h5>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroFeaturedPost;
