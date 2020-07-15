import React, { useEffect } from "react";

import NavbarShirtDesktop from "../navbar/navbar_shirt_desktop";
import Home_Desktop from "../Home/home_desktop";
import FabricDesktop from "../shirt/category/fabric/fabric-desktop";
import StyleDesktop from "../shirt/category/style/style-desktop";
// import ShirtOfTheDay from "./FabricInner/ShirtOftheDay";
// import ShirtOfTheDay from "../shirt/category/fabric/FabricInner/ShirtOftheDay";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
// import { Click } from "../actions/index";
export default function ShirtView(match) {
  const object = useSelector((state) => state.clickedEvent);

  console.log(object);
  let { Shirt, Pant, Suit, Home } = object;
  console.log(Shirt);

  // console.log(object.Shirt);
  console.log("from SHirtview");
  // console.log(match);
  const [fabric, FabricSelector] = React.useState(
    Shirt.innerSelection.fabricSelector.selected
  );
  const [style, StyleSelector] = React.useState(
    Shirt.innerSelection.StyleSelector.selected
  );
  const [Color_contrast, Color_contrastSelector] = React.useState();
  const [Measurement, MeasurementSelector] = React.useState();

  const [shirtoftheday, selectedShirtoftheday] = React.useState(true);
  const [solidcolors, selectedsolidcolors] = React.useState(false);
  const [premiumcolor, selectedpremiumcolor] = React.useState(false);
  const [patternorganic, selectedpatternorganic] = React.useState(false);
  const [egyptiancotton, selectedegyptiancotton] = React.useState(false);
  const [funnelshirts, selectedfunnelshirts] = React.useState(false);
  const [premiumwhite, selectedpremiumwhite] = React.useState(false);
  const default_params = `&foption={${shirtoftheday},1;${solidcolors},0;${premiumcolor},0;${patternorganic},0;${egyptiancotton},0;${funnelshirts},0;${premiumwhite},0}`;

  // console.log(params);

  // console.log(params.customization);
  // console.log(match);
  // console.log(match.location.search);
  // console.log(match.location.search.split("&"));

  var home_selector = object.Home.selected;
  useEffect(() => {
    FabricSelector(Shirt.innerSelection.fabricSelector.selected);
    StyleSelector(Shirt.innerSelection.StyleSelector.selected);
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
    console.log(Shirt.innerSelection.fabricSelector.selected);

    console.log(fabric, style);
    $(".ShirtOfTheDay-inner-selection-div").css({ height: "55%" });
    $(".ShirtOfTheDay-inner-selection-div-inner-inner").css({ height: "95%" });
    $(".ShirtOfTheDay-inner-selection-div-inner-inner-main").css({
      height: "95%",
    });
    $(".ShirtOfTheDay-inner-selection-div-inner-inner-main-selection").css({
      height: "80%",
    });
    $(".short-class-for-options").css({ height: "50%", cursor: "pointer" });
    $(".ShirtOfTheDay-inner-categories-main").css({
      display: "flex",
      justifyContent: "space-around",
      height: "100%",
    });
  });

  useEffect(() => {
    // StateChecker();
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
  if (home_selector === "true") {
    return (
      <div>
        <Home_Desktop />
      </div>
    );
  }

  if (style == true) {
    console.log(fabric);

    return (
      <div>
        <NavbarShirtDesktop props={{ match }} />
        <StyleDesktop props={{ match }} />
      </div>
    );
  }
  //   FabricSelector(true);
  if (fabric == true) {
    // console.log(match);

    return (
      <div>
        <NavbarShirtDesktop props={{ match }} />
        <FabricDesktop props={{ match }} />
      </div>
    );
  }
}
// } else {
//   return <div>ERROR</div>;
// }
// return (
//   <div>
//     <NavbarShirtDesktop />
//     <FabricDesktop props={{ match }} />
//   </div>
// );
//   if (first_level_customization === "?style=true") {
//     StyleSelector(true);
//   }
//   if (first_level_customization === "?color_contrast=true") {
//     Color_contrastSelector(true);
//   }
//   if (first_level_customization === "?measurement=true") {
//     MeasurementSelector(true);
//   }

//   if(params.customization)
