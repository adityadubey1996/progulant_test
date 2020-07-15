import React from "react";
import "../css/navbarShirtDesktop.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { Click } from "../actions/index";
function NavbarShirtDesktop(props) {
  const object = useSelector((state) => state.clickedEvent);
  console.log(object);
  let { Shirt, Pant, Suit, Home } = object;
  const dispatch = useDispatch();
  console.log(props);
  var match = props.props.match;
  const [fabric, FabricSelector] = React.useState(false);
  const [style, StyleSelector] = React.useState(false);
  const [Color_contrast, Color_contrastSelector] = React.useState(false);
  const [Measurement, MeasurementSelector] = React.useState(false);
  // console.log(match.location.search);
  // var search_params = match.location.search.split("&");
  React.useEffect(() => {
    FabricSelector(Shirt.innerSelection.fabricSelector.selected);
    StyleSelector(Shirt.innerSelection.StyleSelector.selected);
    // console.log(search_params);
    if (fabric == true) {
      $(".fabric-shirt-inner-inner").addClass("navbar-shirt-selected");
      $(".style-shirt-inner-inner").removeClass("navbar-shirt-selected");
      $(".colorcontrast-shirt-inner-inner").removeClass(
        "navbar-shirt-selected"
      );
      $(".measurement-shirt-inner-inner").removeClass("navbar-shirt-selected");
    }
    if (style == true) {
      $(".fabric-shirt-inner-inner").removeClass("navbar-shirt-selected");
      $(".style-shirt-inner-inner").addClass("navbar-shirt-selected");
      $(".colorcontrast-shirt-inner-inner").removeClass(
        "navbar-shirt-selected"
      );
      $(".measurement-shirt-inner-inner").removeClass("navbar-shirt-selected");
    }
  });
  return (
    <div>
      <div className="navbar-shirt-outer">
        <div className="navbar-shirt-inner">
          <NavLink
            className="navbar-shirt-inner-inner fabric-shirt-inner-inner"
            to="/shirt"
            activeClassName="navbar-shirt-selected"
            onClick={() => {
              Shirt.innerSelection.fabricSelector.selected = true;
              Shirt.innerSelection.StyleSelector.selected = false;
              console.log(object);
              dispatch(Click(object));
            }}
          >
            <div className="navbar-shirt-inner-final">
              <div className="navbar-shirt-main navbar-shirt-main-fabric">
                FABRIC
              </div>
            </div>
          </NavLink>
          <NavLink
            className="navbar-shirt-inner-inner style-shirt-inner-inner"
            exact
            to="/shirt"
            onClick={() => {
              Shirt.innerSelection.fabricSelector.selected = false;
              Shirt.innerSelection.StyleSelector.selected = true;
              console.log(object);
              dispatch(Click(object));
            }}
          >
            <div className="navbar-shirt-inner-final">
              <div className="navbar-shirt-main navbar-shirt-main-fabric">
                STYLE
              </div>
            </div>
          </NavLink>
          <NavLink
            className="navbar-shirt-inner-inner colorcontrast-shirt-inner-inner"
            activeClassName="navbar-shirt-selected"
            to="/shirt"
          >
            <div className="navbar-shirt-inner-final">
              <div className="navbar-shirt-main navbar-shirt-main-fabric">
                COLOR CONTRAST
              </div>
            </div>
          </NavLink>
          <NavLink
            className="navbar-shirt-inner-inner measurement-shirt-inner-inner"
            activeClassName="navbar-shirt-selected"
            to="/shirt"
          >
            <div className="navbar-shirt-inner-final">
              <div className="navbar-shirt-main navbar-shirt-main-fabric">
                MEASUREMENT
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavbarShirtDesktop;
