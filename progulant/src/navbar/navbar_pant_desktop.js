import React from "react";
import "../css/navbarShirtDesktop.css";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";

function NavbarPantDesktop(props) {
  let location = useLocation();

  function usePageViews(location) {
    React.useEffect(() => {
      console.log(["pageview", location.pathname]);
    });
  }
  usePageViews(location);

  return (
    <div>
      <div className="navbar-shirt-outer">
        <div className="navbar-shirt-inner">
          <NavLink
            className="navbar-shirt-inner-inner"
            activeClassName="navbar-shirt-selected"
            to="/pant/fabric"
          >
            <div className="navbar-shirt-inner-final">
              <div className="navbar-shirt-main navbar-shirt-main-fabric">
                FABRIC
              </div>
            </div>
          </NavLink>
          <NavLink
            className="navbar-shirt-inner-inner"
            activeClassName="navbar-shirt-selected"
            exact
            to="/pant/style"
          >
            <div className="navbar-shirt-inner-final">
              <div className="navbar-shirt-main navbar-shirt-main-fabric">
                STYLE
              </div>
            </div>
          </NavLink>
          <NavLink
            className="navbar-shirt-inner-inner"
            activeClassName="navbar-shirt-selected"
            to="/pant/color-contrast"
          >
            <div className="navbar-shirt-inner-final">
              <div className="navbar-shirt-main navbar-shirt-main-fabric">
                COLOR CONTRAST
              </div>
            </div>
          </NavLink>
          <NavLink
            className="navbar-shirt-inner-inner"
            activeClassName="navbar-shirt-selected"
            to="/pant/measurement"
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

export default NavbarPantDesktop;
