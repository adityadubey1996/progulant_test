import React from "react";
import "../../../../css/PatternOrganic.css";
import $ from "jquery";
import "../../../../css/top_filter_css_desktop.css";
import { useSelector, useDispatch } from "react-redux";
import { Click } from "../../../../actions/index";
function PatternOrganicInner() {
  const dispatch = useDispatch();
  const object = useSelector((state) => state.clickedEvent);
  const { Shirt, Pant, Suit, Home } = object;

  console.log(
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday
  );
  let innerSelectionID =
    Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday
      .innerSelectionId;
  console.log(innerSelectionID);

  function ClickIdentifier(e) {
    var all_div = $(".PatternOrganic-options-inner");
    for (var i = 0; i < all_div.length; i++) {
      if (all_div[i].classList.contains("special_selector_class")) {
        console.log(all_div[i]);
        all_div[i].classList.remove("special_selector_class");
      }
    }

    console.log(e.target);
    console.log(e.target.id);
    console.log($(`#${e.target.id}`));

    $(`#${e.target.id}`).addClass("special_selector_class");
  }

  React.useEffect(() => {
    $(
      `#${Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.innerSelectionId}`
    ).addClass("special_selector_class");

    $(".PatternOrganic-options-inner").css({ height: "50%" });
    $(".PatternOrganic-options").css({ width: "80%" });

    $(".PatternOrganic-options-inner").css({ cursor: "pointer" });
    $(".PatternOrganic-special-class").css({ height: "80%", margin: "20px" });
    $(".PatternOrganic-short-class-for-options").css({ height: "30%" });
  });

  let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <div className="PatternOrganic-inner-selection-div-inner-inner-main-selection">
      {arr.map((e) => (
        <div className="short-class-for-options PatternOrganic-short-class-for-options PatternOrganic-special-class">
          <div className="PatternOrganic-options">
            <div id={`${e}`} className="PatternOrganic-options-inner">
              <img
                id={`${e}`}
                className="special-image-div-desktop"
                src={`https://mikegulati-dev.s3.amazonaws.com/test_object/big/194${e}.jpg`}
                alt="..."
                onClick={(e) => {
                  ClickIdentifier(e);
                  Shirt.innerSelection.fabricSelector.innerSelectionfabric.patternOrganic.innerSelectionId =
                    e.target.id;
                  dispatch(Click(object));
                }}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// function PatternOrganicInner() {
//   let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//   return (
//     <div className="PatternOrganic-inner-selection-div-inner-inner-main-selection">
//       {arr.map((e) => (
//         <div className="short-class-for-options PatternOrganic-special-class">
//             <div id={`${e}`} className="ShirtoftheDay-options-inner">
//               <img
//                 id={`${e}`}
//                 className="special-image-div-desktop"
//                 src={`https://mikegulati-dev.s3.amazonaws.com/test_object/big/1940${e}.jpg`}
//                 alt="..."
//                 onClick={(e) => {
//                   ClickIdentifier(e);
//                   Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.innerSelectionId =
//                     e.target.id;
//                   dispatch(Click(object));
//                 }}
//               ></img>
//             </div>
//         </div>
//       ))}
//     </div>
//   );
// }

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
                    <PatternOrganicInner />
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
