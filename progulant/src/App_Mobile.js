import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shirt from "./shirt/shirt";
import Home from "./Home/home_mobile";
import Navbar from "./navbar/navbar";

import "./App.css";
function App_Mobile() {
  return (
    <div className="App-Mobile">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shirt" component={Shirt} />
          {/* <Route path="/Pant" component={Pant} />
          <Route path="/Suit" component={Suit} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App_Mobile;
