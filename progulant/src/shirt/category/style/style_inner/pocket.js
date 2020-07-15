import React from "react";
import "../../../../css/PatternOrganic.css";
import $ from "jquery";
import "../../../../css/top_filter_css_desktop.css";
import "../../../../css/frontstylepage.css";
import "../../../../css/collarstylepage.css";
class PocketStyle extends React.Component {
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
                        SELECT YOUR STYLE
                      </div>
                    </div>
                    <div className="PatternOrganic-inner-selection-div-inner-inner-main-selection">
                      <div className="collor-option-outer-div">
                        <div className="collor-option-inner-div">
                          <div className="collor-option-inner-inner-div">
                            <svg
                              width="72"
                              height="72"
                              viewBox="0 0 72 72"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M70.1342 55.3536C70.1342 59.2737 68.5769 63.0332 65.805 65.805C63.0332 68.5769 59.2737 70.1342 55.3536 70.1342H16.6438C12.7238 70.1342 8.96428 68.5769 6.1924 65.805C3.42051 63.0332 1.86328 59.2737 1.86328 55.3536V1.86328H70.1342V55.3536Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M70.1342 1.86328H1.86328V18.9314H70.1342V1.86328Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="collor-option-outer-div">
                        <div className="collor-option-inner-div">
                          <div className="collor-option-inner-inner-div">
                            <svg
                              width="72"
                              height="72"
                              viewBox="0 0 72 72"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M70.1342 55.3536C70.1342 59.2737 68.5769 63.0332 65.805 65.805C63.0332 68.5769 59.2737 70.1342 55.3536 70.1342H16.6438C12.7238 70.1342 8.96428 68.5769 6.1924 65.805C3.42051 63.0332 1.86328 59.2737 1.86328 55.3536V1.86328H70.1342V55.3536Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M70.1342 1.86328H1.86328V18.9314H70.1342V1.86328Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="collor-option-outer-div">
                        <div className="collor-option-inner-div">
                          <div className="collor-option-inner-inner-div">
                            <svg
                              width="72"
                              height="72"
                              viewBox="0 0 72 72"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M70.1342 55.3536C70.1342 59.2737 68.5769 63.0332 65.805 65.805C63.0332 68.5769 59.2737 70.1342 55.3536 70.1342H16.6438C12.7238 70.1342 8.96428 68.5769 6.1924 65.805C3.42051 63.0332 1.86328 59.2737 1.86328 55.3536V1.86328H70.1342V55.3536Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M70.1342 1.86328H1.86328V18.9314H70.1342V1.86328Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="collor-option-outer-div">
                        <div className="collor-option-inner-div">
                          <div className="collor-option-inner-inner-div">
                            <svg
                              width="72"
                              height="72"
                              viewBox="0 0 72 72"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M70.1342 55.3536C70.1342 59.2737 68.5769 63.0332 65.805 65.805C63.0332 68.5769 59.2737 70.1342 55.3536 70.1342H16.6438C12.7238 70.1342 8.96428 68.5769 6.1924 65.805C3.42051 63.0332 1.86328 59.2737 1.86328 55.3536V1.86328H70.1342V55.3536Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M70.1342 1.86328H1.86328V18.9314H70.1342V1.86328Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="collor-option-outer-div">
                        <div className="collor-option-inner-div">
                          <div className="collor-option-inner-inner-div">
                            <svg
                              width="72"
                              height="72"
                              viewBox="0 0 72 72"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M70.1342 55.3536C70.1342 59.2737 68.5769 63.0332 65.805 65.805C63.0332 68.5769 59.2737 70.1342 55.3536 70.1342H16.6438C12.7238 70.1342 8.96428 68.5769 6.1924 65.805C3.42051 63.0332 1.86328 59.2737 1.86328 55.3536V1.86328H70.1342V55.3536Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M70.1342 1.86328H1.86328V18.9314H70.1342V1.86328Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
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
export default PocketStyle;
