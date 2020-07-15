import React, { useEffect, useState } from "react";

import NavbarShirtDesktop from "../navbar/navbar_shirt_desktop";
import { BrowserRouter, useLocation, useParams } from "react-router-dom";

import FabricDesktop from "./category/fabric/fabric-desktop";
import CanvasDesktop from "./canvas/canvasDesktop";
import $ from "jquery";
// import SolidColors from "./category/fabric/FabricInner/SolidColors";
// import ShirtOfTheDay from "./category/fabric/FabricInner/ShirtOftheDay";
// import PremiumSolid from "./category/fabric/FabricInner/PremiumSolid";
// import PatternOrganic from "./category/fabric/FabricInner/PatternOrganic";

// function NavbarshirtDesktopRoutes(props) {
//   console.log(props.props);
//   return (
//     <div>
//       <Route
//         exact
//         path={`/shirt/fabric/shirt-of-the-day`}
//         component={() => <FabricDesktop test={`${props.props}`} />}
//       ></Route>
//       <Route exact path={`/shirt/style`} component={PatternOrganic}></Route>
//       <Route exact path={`/shirt/babricss`} component={PremiumSolid}></Route>
//     </div>
//   );
// }

function SolidColor_desktop() {
  const [defaultselection, selection] = useState("default");

  const match = useParams();
  console.log(match);
  const object = {
    first_navlink: {
      id: "Solid colors",
      path: "/shirt/fabric/Solid-colors",
      component: "SolidColors",
    },
    second_navlink: {
      id: "Pattern Organic",
      path: "/shirt/fabric/Pattern-organic",
      component: "PatternOrganic",
    },
    third_navlink: {
      id: "Premium Solid",
      path: "/shirt/fabric/Premium-solid",
      component: "PremiumSolid",
    },
  };

  let location = useLocation();
  useEffect(() => {
    // $(document.body).css({ overflowX: "hidden" });
    // $("body,html").css("overflow", "hidden");
    $(".navbar-desktop").css({ display: "flex" });
  });

  return (
    <BrowserRouter>
      <NavbarShirtDesktop props={location} />
      <CanvasDesktop />
      {/* <NavbarshirtDesktopRoutes props={(match, defaultselection)} /> */}

      <FabricDesktop props={location} />
    </BrowserRouter>
  );
}

export default SolidColor_desktop;
