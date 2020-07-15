import React from "react";
import "../../../../css/PremiumSolid.css";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { Click } from "../../../../actions/index";

function InnerPremiumsolid() {
  React.useEffect(() => {
    $(".PremiumSolid-inner-selection-div-inner-inner-main-selection").css({
      width: "95%",
    });
    $(".short-class-for-option-inner").css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    });
  });
  const dispatch = useDispatch();
  const object = useSelector((state) => state.clickedEvent);
  const { Shirt, Pant, Suit, Home } = object;
  console.log(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday
  );
  let arr = [
    "#693D97",
    "#ABABAB",
    "#FFCE34",
    "#F8971C",
    "#C43A38",
    "#FFFFFF",
    "#87CFE0",
    "#0087AB",
    "#000000",
    "#B45A0B",
  ];
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="PremiumSolid-inner-selection-div-inner-inner-main-selection">
      {arr.map((e, index) => (
        <div className="short-class-for-options">
          <div className="short-class-for-option-inner">
            <div
              className="option-inner"
              style={{ backgroundColor: `${e}` }}
            ></div>
            {/* <img
      className="special-image-div-desktop"
      src={image1}
      alt="..."
    ></img> */}
          </div>
        </div>
      ))}
    </div>
  );
}

class SolidColor extends React.Component {
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
                    <InnerPremiumsolid />
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
export default SolidColor;
