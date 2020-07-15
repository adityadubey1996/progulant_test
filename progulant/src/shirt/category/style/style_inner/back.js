import React from "react";
import "../../../../css/PatternOrganic.css";
import $ from "jquery";
import "../../../../css/top_filter_css_desktop.css";
import "../../../../css/frontstylepage.css";
class Backstyle extends React.Component {
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
                      <div className="front-option-outer-div">
                        <div className="front-option-inner-div">
                          <div className="front-option-inner-inner-div">
                            <svg
                              width="162"
                              height="177"
                              viewBox="0 0 162 177"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M111.149 14.3919H50.8789L63.649 1H94.6559L111.149 14.3919Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M28.4608 22.2324V83.1586L2.2555 60.7736C1.55043 60.1722 1.10632 59.3206 1.01675 58.3983C0.927185 57.4759 1.19915 56.5548 1.77534 55.829L28.4608 22.2324Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M133.567 22.2319V160.769C133.567 170.339 108.061 175.2 82.1756 175.331C80.1552 175.343 78.1323 175.325 76.1211 175.279C51.5715 174.712 28.4609 169.874 28.4609 160.764V22.2267L50.8801 14.3867H111.149L133.567 22.2319Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M159.747 60.7749L133.566 83.1337V22.2324L160.224 55.8303C160.8 56.556 161.072 57.4768 160.983 58.3989C160.894 59.3211 160.451 60.1728 159.747 60.7749V60.7749Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M28.4609 46.5234H133.567"
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
                      <div className="front-option-outer-div">
                        <div className="front-option-inner-div"></div>
                        {/* <img
                          className="special-image-div-desktop"
                          src={image1}
                          alt="..."
                        ></img> */}
                      </div>
                      <div className="front-option-outer-div">
                        <div className="front-option-inner-div"></div>
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
export default Backstyle;
