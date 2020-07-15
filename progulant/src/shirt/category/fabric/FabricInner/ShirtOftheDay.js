import React from "react";
import "../../../../css/ShirtoftheDay.css";
import "../../../../css/special_selector_class.css";
import "../../../../css/top_filter_css_desktop.css";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { Click } from "../../../../actions/index";
function InnerShirtoftheday() {
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
    var all_div = $(".ShirtoftheDay-options-inner");
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
      `#${Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.innerSelectionId}`
    ).addClass("special_selector_class");

    $(".ShirtoftheDay-options-inner").css({ height: "90%" });
    $(".ShirtoftheDay-options").css({ width: "80%" });

    $(".ShirtoftheDay-options-inner").css({ cursor: "pointer" });
    $(".ShirtOftheDay-special-class").css({ height: "80%", margin: "20px" });
  });

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main-selection">
      {arr.map((e) => (
        <div className="short-class-for-options ShirtOftheDay-special-class">
          <div className="ShirtoftheDay-options">
            <div id={`${e}`} className="ShirtoftheDay-options-inner">
              <img
                id={`${e}`}
                className="special-image-div-desktop"
                src={`https://mikegulati-dev.s3.amazonaws.com/test_object/big/1940${e}.jpg`}
                alt="..."
                onClick={(e) => {
                  ClickIdentifier(e);
                  Shirt.innerSelection.fabricSelector.innerSelectionfabric.shirtoftheday.innerSelectionId =
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
    $(".short-class-for-options").css({ height: "55%" });
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
                    <InnerShirtoftheday />
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
