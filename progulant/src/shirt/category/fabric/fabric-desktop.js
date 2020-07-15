import React, { useState } from "react";
import "../../../css/fabricDesktop.css";
import $ from "jquery";
import { useEffect } from "react";
// import SolidColors from "./FabricInner/SolidColors";
import ShirtOfTheDay from "./FabricInner/ShirtOftheDay";
import PremiumSolid from "./FabricInner/PremiumSolid";
import SolidColors from "./FabricInner/SolidColors";
import EgyptianCotton from "./FabricInner/EgyptianCotton";
import FunnelShirts from "./FabricInner/FunnelShirts";
import PatternOrganic from "./FabricInner/PatternOrganic";
import { BrowserRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Click } from "../../../actions/index";
// import {
//   useSelector,
//   useDispatch,
//   useStore,
//   connectAdvanced,
// } from "react-redux";
// import { Change, Not_change, Click } from "../../../actions/index";
// import { createBrowserHistory } from "history";
// import { element, array, func, object } from "prop-types";
// import SolidColor_desktop from "../../solidcolors_desktop";

function RouterComponent() {
  const object = useSelector((state) => state.clickedEvent);
  console.log(object);
  const dispatch = useDispatch();
  let { Shirt, Pant, Suit, Home } = object;

  const [shirtoftheday, selectedShirtoftheday] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday
      .selected
  );
  const [solidcolors, selectedsolidcolors] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors
      .selected
  );
  const [premiumcolor, selectedpremiumcolor] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid
      .selected
  );
  const [patternorganic, selectedpatternorganic] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic
      .selected
  );
  const [egyptiancotton, selectedegyptiancotton] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton
      .selected
  );
  const [funnelshirts, selectedfunnelshirts] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts
      .selected
  );
  const [premiumwhite, selectedpremiumwhite] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite
      .selected
  );

  React.useEffect(() => {
    selectedShirtoftheday(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday
        .selected
    );
    selectedsolidcolors(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors
        .selected
    );
    selectedpremiumcolor(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid
        .selected
    );
    selectedpatternorganic(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic
        .selected
    );
    selectedegyptiancotton(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton
        .selected
    );
    selectedfunnelshirts(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts
        .selected
    );
    selectedpremiumwhite(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite
        .selected
    );

    // console.log(
    //   shirtoftheday,
    //   solidcolors,
    //   premiumcolor,
    //   patternorganic,
    //   egyptiancotton,
    //   funnelshirts,
    //   premiumwhite
    // );
  });
  if (shirtoftheday == true) {
    return (
      <div>
        <ShirtOfTheDay />
      </div>
    );
  }
  if (solidcolors == true) {
    return (
      <div>
        <SolidColors />
      </div>
    );
  }
  if (premiumcolor == true) {
    return (
      <div>
        <PremiumSolid />
      </div>
    );
  }
  if (patternorganic == true) {
    return (
      <div>
        <PatternOrganic />
      </div>
    );
  }

  if (egyptiancotton == true) {
    return (
      <div>
        <EgyptianCotton />
      </div>
    );
  }
  if (funnelshirts == true) {
    return (
      <div>
        <FunnelShirts />
      </div>
    );
  }
  if (premiumwhite == true) {
    return (
      <div>
        <PremiumSolid />
      </div>
    );
  }
}
// function params_split(params) {
//   // console.log(params);
//   var params = params.location.search;
//   var first_split = params.split("=");
//   // console.log(first_split);
//   var second_split = first_split[2];
//   // console.log(second_split);
//   return second_split;
// }
// function category_split(e) {
//   var first_interation = e.split("{");
//   // console.log(first_interation);
//   // first_interation.pop();
//   first_interation.shift();
//   // console.log(first_interation);
//   var second_iteration = first_interation[0].split("}");
//   second_iteration.pop();
//   // console.log(second_iteration);
//   var third_iteration = second_iteration[0].split(";");
//   // console.log(third_iteration);
//   return third_iteration;
//   // e.pop();
//   // console.log(e);
// }
// var props1 = props.props;
// console.log(props1);
// var { params, object_main } = props1;
// var second_split1 = params_split(params);
// console.log(props);
// console.log(second_split1);
// var third_split = category_split(second_split1);
// console.log(third_split);
// console.log(object_main);
// var {
//   shirtoftheday,
//   solidColors,
//   premiumWhite,
//   premierSolid,
//   patternOrganic,
//   funnelShirts,
//   egyptianCotton,
// } = object_main;
// console.log(shirtoftheday);

// third_split.map((value, index) => {
//   if (index == 0) {
//     console.log(value);
//     // value.split(",");
//     // var selector_state = value[0];
//     // var inner_selection_id = value[2];
//     // console.log(selector_state, inner_selection_id);
//   }
// });
// console.log(object_main);
// console.log(object_main);
// console.log(params);
// if(params.match.location.search)
// return (
//   <div className="fabric-selection-div">
//     <Route
//       exact
//       path="/shirt?fabric=true&foption={1,1;0,0;0,0;0,0;0,0;0,0;0,0;0,0}"
//       component={ShirtOfTheDay}
//     ></Route>
//     <Route
//       exact
//       path="/shirt/fabric/Solid-colors"
//       component={PremiumSolid}
//     ></Route>
//     <Route
//       exact
//       path="/shirt/fabric/Egyptian-Cotton"
//       component={PatternOrganic}
//     ></Route>
//     <Route
//       exact
//       path="/shirt/fabric/Funnel-Shirts"
//       component={PatternOrganic}
//     ></Route>
//     <Route
//       exact
//       path="/shirt/fabric/Premium-White"
//       component={PatternOrganic}
//     ></Route>
//     <Route
//       exact
//       path="/shirt/fabric/Pattern-organic"
//       component={PatternOrganic}
//     ></Route>
//     <Route
//       exact
//       path="/shirt/fabric/Premium-solid"
//       component={PremiumSolid}
//     ></Route>
//     <Route
//       exact
//       path="/shirt/fabric/View-All"
//       component={SolidColors}
//     ></Route>
//   </div>
// );

export default function FabricDesktop() {
  const object = useSelector((state) => state.clickedEvent);
  // console.log(object);
  const dispatch = useDispatch();
  let { Shirt, Pant, Suit, Home } = object;

  const [shirtoftheday, selectedShirtoftheday] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday
      .selected
  );
  const [solidcolors, selectedsolidcolors] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors
      .selected
  );
  const [premiumcolor, selectedpremiumcolor] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid
      .selected
  );
  const [patternorganic, selectedpatternorganic] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic
      .selected
  );
  const [egyptiancotton, selectedegyptiancotton] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton
      .selected
  );
  const [funnelshirts, selectedfunnelshirts] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts
      .selected
  );
  const [premiumwhite, selectedpremiumwhite] = useState(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite
      .selected
  );
  // let history = useHistory();
  // let history1 = createBrowserHistory();

  // const [selected_object, selector_selectedObject] = useState(selector_object);

  // console.log(selected_object);
  // console.log(props);
  // let passing_props = {
  //   params: props.match,
  //   object_main: selector_object,
  // };
  // var params = props.match;
  // console.log(params);

  // console.log(params.location.search);
  // let [history, location, match] = props.props.match;
  // console.log(history, location, match);

  function StateChecker() {
    // console.log(
    //   shirtoftheday,
    //   solidcolors,
    //   premiumcolor,
    //   patternorganic,
    //   egyptiancotton,
    //   funnelshirts,
    //   premiumwhite
    // );
    if (shirtoftheday === true) {
      $(".shirtoftheday-fabric-list-inner").addClass("fabric-inner-selected");
      $(".solidcolors-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumcolor-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".patternorganic-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".egyptiancotton-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".funnelshirts-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumwhite-fabric-list-inner").removeClass("fabric-inner-selected");
    }
    if (solidcolors === true) {
      $(".shirtoftheday-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".solidcolors-fabric-list-inner").addClass("fabric-inner-selected");
      $(".premiumcolor-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".patternorganic-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".egyptiancotton-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".funnelshirts-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumwhite-fabric-list-inner").removeClass("fabric-inner-selected");
    }

    if (premiumcolor === true) {
      $(".shirtoftheday-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".solidcolors-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumcolor-fabric-list-inner").addClass("fabric-inner-selected");
      $(".patternorganic-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".egyptiancotton-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".funnelshirts-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumwhite-fabric-list-inner").removeClass("fabric-inner-selected");
    }
    if (patternorganic === true) {
      $(".shirtoftheday-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".solidcolors-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumcolor-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".patternorganic-fabric-list-inner").addClass("fabric-inner-selected");
      $(".egyptiancotton-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".funnelshirts-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumwhite-fabric-list-inner").removeClass("fabric-inner-selected");
    }
    if (egyptiancotton === true) {
      $(".shirtoftheday-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".solidcolors-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumcolor-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".patternorganic-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".egyptiancotton-fabric-list-inner").addClass("fabric-inner-selected");
      $(".funnelshirts-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumwhite-fabric-list-inner").removeClass("fabric-inner-selected");
    }
    if (funnelshirts === true) {
      $(".shirtoftheday-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".solidcolors-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumcolor-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".patternorganic-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".egyptiancotton-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".funnelshirts-fabric-list-inner").addClass("fabric-inner-selected");
      $(".premiumwhite-fabric-list-inner").removeClass("fabric-inner-selected");
    }
    if (premiumwhite === true) {
      $(".shirtoftheday-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".solidcolors-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumcolor-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".patternorganic-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".egyptiancotton-fabric-list-inner").removeClass(
        "fabric-inner-selected"
      );
      $(".funnelshirts-fabric-list-inner").removeClass("fabric-inner-selected");
      $(".premiumwhite-fabric-list-inner").addClass("fabric-inner-selected");
    }
  }

  // function defaultSelection(e) {
  //   console.log(e);
  //   console.log(e.test);
  //   if (e.test === "default") {
  //     console.log("askndkasndasnkdnaksndkasdnkasknd");
  //   }
  // }
  // defaultSelection(props);

  // function ClickRecongnition(e) {
  //   console.log(e.target);
  // }

  useEffect(() => {
    selectedShirtoftheday(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday
        .selected
    );
    selectedsolidcolors(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors
        .selected
    );
    selectedpremiumcolor(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid
        .selected
    );
    selectedpatternorganic(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic
        .selected
    );
    selectedegyptiancotton(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton
        .selected
    );
    selectedfunnelshirts(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts
        .selected
    );
    selectedpremiumwhite(
      Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite
        .selected
    );
    StateChecker();
    // console.log(history1);
    // console.log(history);

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
              to={`/shirt`}
              className="fabric-list-inner shirtoftheday-fabric-list-inner"
              onClick={() => {
                // history.push("/shirt/fabric/shirt-of-the-day");
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.selected = true;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite.selected = false;
                // console.log(object);
                dispatch(Click(object));
              }}
              isActive={() => {
                return shirtoftheday;
              }}
            >
              <div className="fabric-list-outerline"></div>
              <div className="fabric-list-inner-inner">
                <div className="fabric-list-list">
                  <div className="fabric-list-realthing">SHIRT OF THE DAY</div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to={`/shirt`}
              className="fabric-list-inner solidcolors-fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors.selected = true;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite.selected = false;
                // console.log(object);
                dispatch(Click(object));
              }}
              isActive={() => {
                return solidcolors;
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
              to={`/shirt`}
              className="fabric-list-inner premiumcolor-fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid.selected = true;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite.selected = false;
                // console.log(object);
                dispatch(Click(object));
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
              to={`/shirt`}
              className="fabric-list-inner patternorganic-fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.selected = true;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite.selected = false;
                // console.log(object);
                dispatch(Click(object));
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
              to={`/shirt`}
              className="fabric-list-inner egyptiancotton-fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton.selected = true;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite.selected = false;
                // console.log(object);
                dispatch(Click(object));
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
              to={`/shirt`}
              className="fabric-list-inner funnelshirts-fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts.selected = true;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite.selected = false;
                // console.log(object);
                dispatch(Click(object));
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
              to={`/shirt`}
              className="fabric-list-inner premiumwhite-fabric-list-inner"
              activeClassName="fabric-inner-selected"
              onClick={() => {
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.solidColors.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premierSolid.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.egyptianCotton.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.funnelShirts.selected = false;
                Shirt.innerSelection.fabricSelector.innerSelectionfabric.premiumWhite.selected = true;
                // console.log(object);
                dispatch(Click(object));
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
              to="/shirt/fabric/View-All"
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
          {/* <div className="fabric-selection-div">
            <ShirtOfTheDay />
          </div> */}
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
