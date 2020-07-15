import React from "react";

import "../../../../css/PatternOrganic.css";
import $ from "jquery";
import "../../../../css/top_filter_css_desktop.css";
class PatternOrganic extends React.Component {
  componentDidMount() {
    $(".PatternOrganic-outer-outer-main").css({ height: "95%" });
    $(".PatternOrganic-inner-categories").css({ height: "15%" });
    $(".PatternOrganic-inner-categories-main").css({ height: "70%" });
    $(".PatternOrganic-inner-selection-div").css({
      height: "100%",
      marginTop: "0px",
    });
    $(".PatternOrganic-inner-selection-div-inner-inner-main-heading").css({
      height: "20%",
    });
    $(".PatternOrganic-inner-selection-div-inner-inner-main-selection").css({
      height: "80%",
    });
    $(".short-class-for-options").css({ height: "30%" });
  }
  render() {
    return (
      <div className="PatternOrganic-outer">
        <div className="PatternOrganic-outer-main">
          <div className="PatternOrganic-outer-outer-main">
            <div className="PatternOrganic-inner-categories">
              <div className="PatternOrganic-inner-categories-main">
                <div className="pattern-inner-filter-div ">
                  <div className="pattern-inner-filter-icon">FILTERS</div>
                  <div className="pattern-inner-filter-div"></div>
                </div>
                <div className="pattern-inner-plain-cotton-div ">
                  PLAIN COTTON
                </div>
                <div className="pattern-inner-lenin-div ">LENIN</div>
                <div className="pattern-inner-check-cotton-div ">
                  CHECK COTTON
                </div>
              </div>
            </div>
            <div className="PatternOrganic-inner-selection-div">
              <div className="PatternOrganic-inner-selection-div-inner">
                <div className="PatternOrganic-inner-selection-div-inner-inner">
                  <div className="PatternOrganic-inner-selection-div-inner-inner-main">
                    <div className="PatternOrganic-inner-selection-div-inner-inner-main-heading">
                      <div className="PatternOrganic-inner-selection-div-inner-inner-main-heading-main">
                        PATTERN SELECTION
                      </div>
                    </div>
                    <div className="PatternOrganic-inner-selection-div-inner-inner-main-selection">
                      <div className="short-class-for-options">
                        <div className="option-inner"></div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="short-class-for-options">
                        <div className="option-inner"></div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="short-class-for-options">
                        <div className="option-inner"></div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="short-class-for-options">
                        <div className="option-inner"></div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="short-class-for-options">
                        <div className="option-inner"></div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="short-class-for-options">
                        <div className="option-inner"></div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="short-class-for-options">
                        <div className="option-inner"></div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PatternOrganic;
