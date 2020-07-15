import React from "react";
import "../../../../css/ShirtoftheDay.css";
import image1 from "../../../../images/fabric-sample.jpg";
import "../../../../css/top_filter_css_desktop.css";
import $ from "jquery";
class ShirtOfTheDay extends React.Component {
  componentDidMount() {
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
  }
  render() {
    return (
      <div className="ShirtOfTheDay-outer">
        <div className="ShirtOfTheDay-outer-main">
          <div className="ShirtOfTheDay-outer-outer-main">
            <div className="ShirtOfTheDay-inner-categories">
              <div className="ShirtOfTheDay-inner-categories-main">
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
            <div className="ShirtOfTheDay-inner-selection-div">
              <div className="ShirtOfTheDay-inner-selection-div-inner">
                <div className="ShirtOfTheDay-inner-selection-div-inner-inner">
                  <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main">
                    <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main-heading">
                      <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main-heading-main">
                        CHOOSE YOUR FABRIC
                      </div>
                    </div>
                    <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main-selection">
                      <div className="short-class-for-options">
                        <div className="ShirtoftheDay-options">
                          <div className="ShirtoftheDay-options-inner">
                            <img
                              className="special-image-div-desktop"
                              src={image1}
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="short-class-for-options">
                        <div className="ShirtoftheDay-options">
                          <div className="ShirtoftheDay-options-inner">
                            <img
                              className="special-image-div-desktop"
                              src={image1}
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="short-class-for-options">
                        <div className="ShirtoftheDay-options">
                          <div className="ShirtoftheDay-options-inner">
                            <img
                              className="special-image-div-desktop"
                              src={image1}
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="short-class-for-options">
                        <div className="ShirtoftheDay-options">
                          <div className="ShirtoftheDay-options-inner">
                            <img
                              className="special-image-div-desktop"
                              src={image1}
                              alt="..."
                            ></img>
                          </div>
                        </div>
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
export default ShirtOfTheDay;
