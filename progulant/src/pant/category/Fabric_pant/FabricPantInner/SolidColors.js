import React from "react";
import "../../../../css/SolidColors.css";
import $ from "jquery";
import image1 from "../../../../images/fabric-sample.jpg";
import styled from "styled-components";

const SplitTextStyled = styled.div``;
class SolidColors extends React.Component {
  componentDidMount() {
    $(".ShirtOfTheDay-inner-categories-main").css({
      display: "flex",
      justifyContent: "space-around",
      height: "100%",
    });
    $(document).ready(() => {
      setTimeout(() => {
        var height = document.querySelector(".short-class-for-options")
          .clientHeight;
        var width = document.querySelector(".short-class-for-options")
          .clientWidth;
        console.log(`height  ${height}`, width);
        console.log(height - 5, width - 5);
        if (height < width) {
          $(".option-inner").css({ height: height - 5, width: height - 5 });
        }
        if (width < height) {
          $(".option-inner").css({ height: width - 5, width: width - 5 });
        }
      }, 100);
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
                      <div className="short-class-for-options  Solid-Colors-special-image-div-desktop-special">
                        <div className="ShirtoftheDay-options">
                          <div className="ShirtoftheDay-options-inner">
                            <img
                              className="special-image-div-desktop "
                              src={image1}
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
                        <div className="ShirtoftheDay-options">
                          <div className="ShirtoftheDay-options-inner">
                            <img
                              className="special-image-div-desktop "
                              src={image1}
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                      <div className="short-class-for-options Solid-Colors-special-image-div-desktop-special">
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
                  <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main">
                    <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main-heading">
                      <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main-heading-main">
                        CHOOSE YOUR FABRIC
                      </div>
                    </div>

                    <div className="ShirtOfTheDay-inner-selection-div-inner-inner-main-selection">
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
export default SolidColors;
