import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Home_Desktop from "./Home/home_desktop";
import Navbar_Desktop from "./navbar/navbar_desktop";
// import Shirt_desktop from "./shirt/shirt_desktop";
// import Pant_Desktop_Style from "./pant/pant_desktop_style";
// import HomeScreen from "./Home_screen";
// import Page404 from "./default/404";
// import { createBrowserHistory } from "history";
import SolidColor_desktop from "./shirt/solidcolors_desktop";
// import Shirt_Desktop_Style from "./shirt/shirt_desktop_style";
// import Pant_Desktop from "./pant/pant_desktop";
import ShirtView from "./views/shirt";
import "./App.css";
import Home_Desktop from "./Home/home_desktop";

// function ParamsFunction() {
//   const [shirtoftheday, selectedShirtoftheday] = useState(true);
//   const [solidcolors, selectedsolidcolors] = useState(false);
//   const [premiumcolor, selectedpremiumcolor] = useState(false);
//   const [patternorganic, selectedpatternorganic] = useState(false);
//   const [egyptiancotton, selectedegyptiancotton] = useState(false);
//   const [funnelshirts, selectedfunnelshirts] = useState(false);
//   const [premiumwhite, selectedpremiumwhite] = useState(false);

//   const object_params = {
//     Shirtoftheday: {
//       selected: shirtoftheday,
//       innerItem: {
//         id: 1,
//       },
//     },
//     SolidColors: {
//       selected: solidcolors,

//       innerItem: {
//         id: 1,
//       },
//     },
//     PremierSolid: {
//       selected: premiumcolor,

//       innerItem: {
//         id: 1,
//       },
//     },
//     PatternOrganic: {
//       selected: patternorganic,

//       innerItem: {
//         id: 1,
//       },
//     },
//     EgyptianCotton: {
//       selected: egyptiancotton,

//       innerItem: {
//         id: 1,
//       },
//     },

//     FunnelShirts: {
//       selected: funnelshirts,
//       innerItem: {
//         id: 1,
//       },
//     },
//     PremiumWhite: {
//       selected: premiumwhite,
//       innerItem: {
//         id: 1,
//       },
//     },
//   };
// }
function App_Desktop() {
  return (
    <div className="App-Desktop">
      <BrowserRouter>
        <Navbar_Desktop />

        <Switch>
          {/* <Route exact path="/home" component={Home_Desktop} /> */}
          <Route exact path="/:customization" component={ShirtView} />

          {/* <Route exact path="/shirt/fabric" component={Shirt_desktop} /> */}

          <Route
            exact
            path="/shirt/fabric/:customization"
            component={SolidColor_desktop}
          ></Route>
          <Route path="/" exact component={Home_Desktop} />
          {/* <Route exact path="/home" component={Home_Desktop} />
          <Route exact path="/pant/fabric" component={Pant_Desktop} />
          <Route exact path="/pant/style" component={Pant_Desktop_Style} /> */}
          {/* <Route path="/shirt/:customization" component={Shirt_desktop}></Route> */}
          {/* <Route path="*" component={Page404} /> */}
          {/* <Route exact path="/shirt/fabric" component={FabricDesktop} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App_Desktop;
