import React, { useEffect, useState } from "react";

import NavbarShirtDesktop from "../navbar/navbar_shirt_desktop";
import { BrowserRouter, useLocation } from "react-router-dom";

// import { useParams } from "react-router";

import CanvasDesktop from "./canvas/canvasDesktop";
import StyleDesktopPant from "./category/style-desktop-pant";
import $ from "jquery";
// import SolidColors from "./category/Fabric_pant/FabricPantInner/SolidColors";
// import ShirtOfTheDay from "./category/Fabric_pant/FabricPantInner/ShirtOftheDay";
// import PremiumSolid from "./category/Fabric_pant/FabricPantInner/PremiumSolid";
// import PatternOrganic from "./category/Fabric_pant/FabricPantInner/PatternOrganic";

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

function Pant_Desktop_Style() {
  const [defaultselection, selection] = useState("default");

  console.log("from shirt desktop");
  //   const object = {
  //     first_navlink: {
  //       id: "Solid colors",
  //       path: "/shirt/fabric/Solid-colors",
  //       component: "SolidColors",
  //     },
  //     second_navlink: {
  //       id: "Pattern Organic",
  //       path: "/shirt/fabric/Pattern-organic",
  //       component: "PatternOrganic",
  //     },
  //     third_navlink: {
  //       id: "Premium Solid",
  //       path: "/shirt/fabric/Premium-solid",
  //       component: "PremiumSolid",
  //     },
  //   };

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

      <StyleDesktopPant props={location} />

      {/* <Route
        exact
        path={`${object.first_navlink.path}`}
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
      ></Route> */}
    </BrowserRouter>
  );
}
// class Shirt_Desktop extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { path: useRouteMatch() };
//   }
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="testing123">
//           <NavbarShirtDesktop />
//           <CanvasDesktop />
//         </div>
//         <Switch>
//           <Route exact path={this.state.path}>
//             please Select something
//           </Route>

//           <Route path={`${this.state.path}/fabric`} component={FabricDesktop} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }
export default Pant_Desktop_Style;
