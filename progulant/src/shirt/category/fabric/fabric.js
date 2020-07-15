import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "../../../css/fabric.css";
import "swiper/css/swiper.css";
import image1 from "../../../images/fabric-sample.jpg";
import image2 from "../../../images/fabric-sample2.png";
import image3 from "../../../images/fabric-sample4.jpg";
import image4 from "../../../images/fabric-sample3.jpg";
const Fabric = (props) => {
  const important = useState([]);
  const handleClick = () => {
    console.log(this);
    // this.props.handleInput(important("this is from fabric component"));
    important.push("askdnkaksnkdnskdnkasnkdnaskdnsdnsand");
    console.log(important);
    console.log(props);
    props.handleClick(important);
  };
  console.log(important);

  const params = {
    slidesPerView: 5,
    spaceBetween: 5,
    freeMode: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  };
  return (
    <div>
      <Swiper {...params}>
        <div className="fabric-outer">
          <div className="fabric">
            <img
              onClick={() => {
                handleClick();
              }}
              classname="fabric"
              src={image1}
              alt="..."
            ></img>
          </div>
        </div>
        <div className="fabric-outer">
          <div className="fabric">
            <img classname="fabric" src={image2} alt="..."></img>
          </div>
        </div>
        <div className="fabric-outer">
          <div className="fabric">
            <img classname="fabric" src={image3} alt="..."></img>
          </div>
        </div>

        <div className="fabric-outer">
          <div className="fabric">
            <img classname="fabric" src={image4} alt="..."></img>
          </div>
        </div>

        <div className="fabric-outer">
          <div className="fabric"></div>
        </div>

        <div className="fabric-outer">
          <div className="fabric"></div>
        </div>

        <div className="fabric-outer">
          <div className="fabric"></div>
        </div>

        <div className="fabric-outer">
          <div className="fabric"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Fabric;
