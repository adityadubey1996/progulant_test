import React from "react";
import "../css/home_desktop.css";
import Banner_desktop from "./home_desktop/banner_desktop";
import Footer_Desktop from "./home_desktop/footer_desktop";
import $ from "jquery";
import Product_Desktop from "./home_desktop/Product_desktop";
class Home_Desktop extends React.Component {
  componentDidMount() {
    $(document).ready(() => {
      var navbar_height = $(".navbar-desktop").height();

      console.log(navbar_height);
      $(".home_desktop").css({ position: "relative", top: navbar_height });
      $(".navbar-desktop").css({ display: "flex" });
    });
  }
  render() {
    return (
      <div className="home_desktop">
        <div className="banner-section">
          <Banner_desktop />
        </div>
        <div className="product-section">
          <Product_Desktop />
        </div>
        <div className="footer-desktop">
          <Footer_Desktop />
        </div>
      </div>
    );
  }
}
export default Home_Desktop;
