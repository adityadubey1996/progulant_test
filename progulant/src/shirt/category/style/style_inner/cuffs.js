import React from "react";
import "../../../../css/PatternOrganic.css";
import $ from "jquery";
import "../../../../css/top_filter_css_desktop.css";
import "../../../../css/frontstylepage.css";
import "../../../../css/collarstylepage.css";
class CuffStyle extends React.Component {
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
                              height="66"
                              viewBox="0 0 72 66"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M35.9994 18.6223C55.3161 18.6223 70.9753 14.6774 70.9753 9.81114C70.9753 4.94488 55.3161 1 35.9994 1C16.6827 1 1.02344 4.94488 1.02344 9.81114C1.02344 14.6774 16.6827 18.6223 35.9994 18.6223Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M37.0803 44.9146C38.9649 44.9146 40.4927 43.3868 40.4927 41.5022C40.4927 39.6176 38.9649 38.0898 37.0803 38.0898C35.1957 38.0898 33.668 39.6176 33.668 41.5022C33.668 43.3868 35.1957 44.9146 37.0803 44.9146Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M71 9.96505L70.9519 56.2625C70.942 61.0843 55.5631 64.9675 36.4949 64.9974C36.3159 64.9974 35.7388 64.9974 35.7388 64.9974C31.0993 64.9879 26.4637 64.7278 21.8523 64.2181H21.8407C9.55911 62.8253 1 59.7114 1 56.11L1.04808 9.8125C1.04311 12.6081 6.20809 15.1134 14.2648 16.7533C20.234 17.9604 27.7833 18.69 35.9992 18.7082C44.2151 18.7264 51.7694 18.03 57.7402 16.8495C65.8168 15.2444 70.995 12.7623 71 9.96505Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M25.0273 64.5335V40.7679C25.0273 34.7917 27.4014 29.0602 31.6273 24.8343C35.8531 20.6084 41.5846 18.2344 47.5609 18.2344V18.2344"
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
                              height="66"
                              viewBox="0 0 72 66"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M35.9994 18.6223C55.3161 18.6223 70.9753 14.6774 70.9753 9.81114C70.9753 4.94488 55.3161 1 35.9994 1C16.6827 1 1.02344 4.94488 1.02344 9.81114C1.02344 14.6774 16.6827 18.6223 35.9994 18.6223Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M37.0803 44.9146C38.9649 44.9146 40.4927 43.3868 40.4927 41.5022C40.4927 39.6176 38.9649 38.0898 37.0803 38.0898C35.1957 38.0898 33.668 39.6176 33.668 41.5022C33.668 43.3868 35.1957 44.9146 37.0803 44.9146Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M71 9.96505L70.9519 56.2625C70.942 61.0843 55.5631 64.9675 36.4949 64.9974C36.3159 64.9974 35.7388 64.9974 35.7388 64.9974C31.0993 64.9879 26.4637 64.7278 21.8523 64.2181H21.8407C9.55911 62.8253 1 59.7114 1 56.11L1.04808 9.8125C1.04311 12.6081 6.20809 15.1134 14.2648 16.7533C20.234 17.9604 27.7833 18.69 35.9992 18.7082C44.2151 18.7264 51.7694 18.03 57.7402 16.8495C65.8168 15.2444 70.995 12.7623 71 9.96505Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M25.0273 64.5335V40.7679C25.0273 34.7917 27.4014 29.0602 31.6273 24.8343C35.8531 20.6084 41.5846 18.2344 47.5609 18.2344V18.2344"
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
                              height="66"
                              viewBox="0 0 72 66"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M35.9994 18.6223C55.3161 18.6223 70.9753 14.6774 70.9753 9.81114C70.9753 4.94488 55.3161 1 35.9994 1C16.6827 1 1.02344 4.94488 1.02344 9.81114C1.02344 14.6774 16.6827 18.6223 35.9994 18.6223Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M37.0803 44.9146C38.9649 44.9146 40.4927 43.3868 40.4927 41.5022C40.4927 39.6176 38.9649 38.0898 37.0803 38.0898C35.1957 38.0898 33.668 39.6176 33.668 41.5022C33.668 43.3868 35.1957 44.9146 37.0803 44.9146Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M71 9.96505L70.9519 56.2625C70.942 61.0843 55.5631 64.9675 36.4949 64.9974C36.3159 64.9974 35.7388 64.9974 35.7388 64.9974C31.0993 64.9879 26.4637 64.7278 21.8523 64.2181H21.8407C9.55911 62.8253 1 59.7114 1 56.11L1.04808 9.8125C1.04311 12.6081 6.20809 15.1134 14.2648 16.7533C20.234 17.9604 27.7833 18.69 35.9992 18.7082C44.2151 18.7264 51.7694 18.03 57.7402 16.8495C65.8168 15.2444 70.995 12.7623 71 9.96505Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M25.0273 64.5335V40.7679C25.0273 34.7917 27.4014 29.0602 31.6273 24.8343C35.8531 20.6084 41.5846 18.2344 47.5609 18.2344V18.2344"
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
                              height="66"
                              viewBox="0 0 72 66"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M35.9994 18.6223C55.3161 18.6223 70.9753 14.6774 70.9753 9.81114C70.9753 4.94488 55.3161 1 35.9994 1C16.6827 1 1.02344 4.94488 1.02344 9.81114C1.02344 14.6774 16.6827 18.6223 35.9994 18.6223Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M37.0803 44.9146C38.9649 44.9146 40.4927 43.3868 40.4927 41.5022C40.4927 39.6176 38.9649 38.0898 37.0803 38.0898C35.1957 38.0898 33.668 39.6176 33.668 41.5022C33.668 43.3868 35.1957 44.9146 37.0803 44.9146Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M71 9.96505L70.9519 56.2625C70.942 61.0843 55.5631 64.9675 36.4949 64.9974C36.3159 64.9974 35.7388 64.9974 35.7388 64.9974C31.0993 64.9879 26.4637 64.7278 21.8523 64.2181H21.8407C9.55911 62.8253 1 59.7114 1 56.11L1.04808 9.8125C1.04311 12.6081 6.20809 15.1134 14.2648 16.7533C20.234 17.9604 27.7833 18.69 35.9992 18.7082C44.2151 18.7264 51.7694 18.03 57.7402 16.8495C65.8168 15.2444 70.995 12.7623 71 9.96505Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M25.0273 64.5335V40.7679C25.0273 34.7917 27.4014 29.0602 31.6273 24.8343C35.8531 20.6084 41.5846 18.2344 47.5609 18.2344V18.2344"
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
                              height="66"
                              viewBox="0 0 72 66"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M35.9994 18.6223C55.3161 18.6223 70.9753 14.6774 70.9753 9.81114C70.9753 4.94488 55.3161 1 35.9994 1C16.6827 1 1.02344 4.94488 1.02344 9.81114C1.02344 14.6774 16.6827 18.6223 35.9994 18.6223Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M37.0803 44.9146C38.9649 44.9146 40.4927 43.3868 40.4927 41.5022C40.4927 39.6176 38.9649 38.0898 37.0803 38.0898C35.1957 38.0898 33.668 39.6176 33.668 41.5022C33.668 43.3868 35.1957 44.9146 37.0803 44.9146Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M71 9.96505L70.9519 56.2625C70.942 61.0843 55.5631 64.9675 36.4949 64.9974C36.3159 64.9974 35.7388 64.9974 35.7388 64.9974C31.0993 64.9879 26.4637 64.7278 21.8523 64.2181H21.8407C9.55911 62.8253 1 59.7114 1 56.11L1.04808 9.8125C1.04311 12.6081 6.20809 15.1134 14.2648 16.7533C20.234 17.9604 27.7833 18.69 35.9992 18.7082C44.2151 18.7264 51.7694 18.03 57.7402 16.8495C65.8168 15.2444 70.995 12.7623 71 9.96505Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M25.0273 64.5335V40.7679C25.0273 34.7917 27.4014 29.0602 31.6273 24.8343C35.8531 20.6084 41.5846 18.2344 47.5609 18.2344V18.2344"
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
export default CuffStyle;
