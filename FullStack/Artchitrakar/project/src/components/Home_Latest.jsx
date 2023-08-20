import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "./layout/Loader/Loader";
import "../style/home_services.css";
import "../style/animatedbutton.css";
import Cart from "./LatestCart";
import { useSelector } from "react-redux";

const HomeBlog = () => {
  const { isLoading, newpicture } = useSelector((state) => state.admin);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 824 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 824, min: 614 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 614, min: 0 },
      items: 1,
    },
  };
  const setting = {
    autoPlay: true,
    swipeable: true,
    draggable: true,
    // showDots:true,
    autoPlaySpeed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    keyBoardControl: true,
    transitionDuration: 500,
    removeArrowOnDeviceType: ["superLargeDesktop", "tablet", "mobile"],
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section
          className="h_srvs_m_con"
          style={{ margin: " -1rem 0 -11rem 0" }}
        >
          <div className="h_srvs_F_con">
            <h1 className="h_srvs_h1">What's New</h1>
            <p className="h_srvs_p">
              Our notices Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit, culpa?
            </p>
          </div>

          <div className="courses_latest">
          {newpicture?.newpicture?.length ? (
              <Carousel {...setting} responsive={responsive}>
                {newpicture.newpicture.map((e) => (
                  <Cart image={e.image} title={e.heading} />
                ))}
              </Carousel>
            ) : (
              <p>No data not yet available.</p>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default HomeBlog;
