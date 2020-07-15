import React from "react";
import "../../../../css/PremiumSolid.css";
import $ from "jquery";
class FunnelShirts extends React.Component {
  componentDidMount() {
    $(".PremiumSolid-inner-categories-main").css({
      display: "flex",
      justifyContent: "space-around",
      height: "100%",
    });
  }
  render() {
    return (
      <div className="PremiumSolid-outer">
        <div className="PremiumSolid-outer-main">
          <div className="PremiumSolid-outer-outer-main">
            <div className="PremiumSolid-inner-categories">
              <div className="PremiumSolid-inner-categories-main">
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
            <div className="PremiumSolid-inner-selection-div">
              <div className="PremiumSolid-inner-selection-div-inner">
                <div className="PremiumSolid-inner-selection-div-inner-inner">
                  <div className="PremiumSolid-inner-selection-div-inner-inner-main">
                    <div className="PremiumSolid-inner-selection-div-inner-inner-main-heading">
                      <div className="PremiumSolid-inner-selection-div-inner-inner-main-heading-main">
                        CHOOSE YOUR FABRIC
                      </div>
                    </div>
                    <div className="PremiumSolid-inner-selection-div-inner-inner-main-selection">
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
export default FunnelShirts;
