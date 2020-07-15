import React from "react";
import "../../css/product-desktop.css";
import { NavLink } from "react-router-dom";

class Product_Desktop extends React.Component {
  render() {
    return (
      <div className="product-section">
        <div className="product-section-inner">
          <div className="product-inner-header">
            <h1> CUSTOMIZE YOUR PRODUCT</h1>
          </div>

          <div className="product-inner-cards">
            <NavLink
              className="product-inner-cards-inner product-inner-cards-inner-shirt"
              to="/shirt"
            >
              {/* <div className="product-inner-cards-inner product-inner-cards-inner-shirt"> */}
              <span className="card-inner-text">SHIRT</span>
              {/* </div> */}
            </NavLink>
            <div className="product-inner-cards-inner product-inner-cards-inner-pants">
              <span className="card-inner-text">PANT</span>
            </div>
            <div className="product-inner-cards-inner product-inner-cards-inner-suits">
              <span className="card-inner-text">SUIT</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product_Desktop;
