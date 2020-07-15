import React, { useState } from "react";
import "../../../css/fabricDesktop.css";
import $ from "jquery";
import { useEffect } from "react";
import SolidColors from "./FabricPantInner/SolidColors";
import ShirtOfTheDay from "./FabricPantInner/ShirtOftheDay";
import PremiumSolid from "./FabricPantInner/PremiumSolid";
import PatternOrganic from "./FabricPantInner/PatternOrganic";
import {
  BrowserRouter,
  NavLink,
  useLocation,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Change, Not_change, Click } from "../../../actions/index";
import { createBrowserHistory } from "history";

function RouterComponent() {
  let location = useLocation();
  function usePageViews() {
    React.useEffect(() => {
      console.log(["pageview", location.pathname]);
    });
  }
  usePageViews();

  return (
    <div className="fabric-selection-div">
      <Route
        exact
        path="/shirt/fabric/Shirt-of-the-day"
        component={ShirtOfTheDay}
      ></Route>
      <Route
        exact
        path="/shirt/fabric/Solid-colors"
        component={PremiumSolid}
      ></Route>
      <Route
        exact
        path="/shirt/fabric/Egyptian-Cotton"
        component={PatternOrganic}
      ></Route>
      <Route
        exact
        path="/shirt/fabric/Funnel-Shirts"
        component={PatternOrganic}
      ></Route>
      <Route
        exact
        path="/shirt/fabric/Premium-White"
        component={PatternOrganic}
      ></Route>
      <Route
        exact
        path="/shirt/fabric/Pattern-organic"
        component={PatternOrganic}
      ></Route>
      <Route
        exact
        path="/shirt/fabric/Premium-solid"
        component={PremiumSolid}
      ></Route>
      <Route
        exact
        path="/shirt/fabric/View-All"
        component={SolidColors}
      ></Route>
    </div>
  );
}

export default function FabricDesktop(props) {
  let history = useHistory();
  let history1 = createBrowserHistory();

  const [shirtoftheday, selectedShirtoftheday] = useState(false);
  const [solidcolors, selectedsolidcolors] = useState(false);
  const [premiumcolor, selectedpremiumcolor] = useState(false);
  const [patternorganic, selectedpatternorganic] = useState(false);
  const [egyptiancotton, selectedegyptiancotton] = useState(false);
  const [funnelshirts, selectedfunnelshirts] = useState(false);
  const [premiumwhite, selectedpremiumwhite] = useState(false);

  function StateChecker() {
    console.log(
      shirtoftheday,
      solidcolors,
      premiumcolor,
      patternorganic,
      egyptiancotton,
      funnelshirts,
      premiumwhite
    );
  }

  function defaultSelection(e) {
    console.log(e);
    console.log(e.test);
    if (e.test === "default") {
      console.log("askndkasndasnkdnaksndkasdnkasknd");
    }
  }
  defaultSelection(props);

  function ClickRecongnition(e) {
    console.log(e.target);
  }

  useEffect(() => {
    StateChecker();
    console.log(history1);
    console.log(history);

    $(document).ready(() => {
      var navbar_height = $(".navbar-desktop").height();
      var shirt_navbar = $(".navbar-shirt-outer").height();

      var screenHeight = $(".App-Desktop").height();
      var screenWidth = $(".App-Desktop").width();
      var total = shirt_navbar;
      var total1 = shirt_navbar + navbar_height;

      $(".fabric-desktop").css({
        position: "relative",
        top: total + 5,
        height: screenHeight - total1,
        gridTemplateRows: screenHeight - total1,
      });
      $(".background-desktop").css({
        position: "absolute",
        top: total1,
        height: screenHeight - total1,
        width: screenWidth,
      });
    });
  });

  return (
    <BrowserRouter>
      <div>
        <div className="background-desktop"></div>
        <div className="fabric-desktop">
          <div className="fabric-list">
            <NavLink
              to="/pant/fabric/shirt-of-the-day"
              className="fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                // history.push("/shirt/fabric/shirt-of-the-day");
                selectedShirtoftheday(true);
                selectedsolidcolors(false);
                selectedpremiumcolor(false);
                selectedegyptiancotton(false);
                selectedpatternorganic(false);
                selectedfunnelshirts(false);
                selectedpremiumwhite(false);
              }}
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">PANT OF THE DAY</div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/pant/fabric/Solid-colors"
              className="fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                selectedsolidcolors(true);
              }}
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">SOLID COLORS</div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/pant/fabric/Premium-solid"
              className="fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                selectedpremiumcolor(true);
              }}
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">PREMIUM SOLID</div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/pant/fabric/Pattern-organic"
              className="fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                selectedpatternorganic(true);
              }}
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">PATTERN/ORGANIC</div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/pant/fabric/Egyptian-Cotton"
              className="fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                selectedegyptiancotton(true);
              }}
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">EGYPTIAN COTTON</div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/pant/fabric/Funnel-Shirts"
              className="fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                selectedfunnelshirts(true);
              }}
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">FUNNEL SHIRTS</div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/pant/fabric/Premium-White"
              className="fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                selectedpremiumwhite(true);
              }}
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">PREMIUM WHITE</div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/pant/fabric/View-All"
              className="fabric-list-inner"
              activeClassName="fabric-inner-selected"
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">VIEW ALL</div>
                </div>
              </div>
            </NavLink>
            <div className="next-button-div">
              <div className="next-button-inner-div">
                <button className="primary_button">Next</button>
              </div>
            </div>
          </div>

          <RouterComponent />

          {/* <div className="fabric-selection-div">
            <Route
              exact
              path="/shirt/fabric/Solid-colors"
              component={SolidColors}
            ></Route>
            <Route
              exact
              path="/shirt/fabric/Pattern-organic"
              component={PatternOrganic}
            ></Route>
            <Route
              exact
              path="/shirt/fabric/Premium-solid"
              component={PremiumSolid}
            ></Route>
          </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

// class FabricDesktop extends React.Component {
//   componentDidMount() {

//   }

//   render() {

//     return (

//     );
//   }
// }
// export default FabricDesktop;
