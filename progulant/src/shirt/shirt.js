import React from "react";
import Canvas from "./canvas/canvas";
import Category from "./category/category";

import "../css/shirt.css";
import TopNavbar from "../navbar/top-navbar";
class Shirt extends React.Component {
  render() {
    return (
      <div className="shirt-mobile">
        <div className="shirt-mobile-main">
          <TopNavbar />
          {/* <div className="customized-shirt">
            <Customized_shirt />
          </div> */}
          <div className="shirt-canvas">
            <Canvas />
          </div>
          <div className="shirt-category">
            <Category />
          </div>
        </div>
      </div>
    );
  }
}

export default Shirt;
