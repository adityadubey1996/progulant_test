import React from "react";
import "../../css/banner_section.css";
class Banner_Desktop extends React.Component {
  render() {
    return (
      <div className="banner-desktop-outer">
        <div className="left-text">
          <div className="left-text-inner">
            <div className="left-text-inner-header">
              <h1>ABOUT US</h1>
            </div>
            <div className="left-text-inner-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
            </div>
          </div>
        </div>
        <div className="right-form">
          <div className="right-from-inner">
            <div className="right-from-inner-inner">
              <div className="right-form-header">
                <div className="right-form-inner-inner">
                  <div className="right-form-header-inner-inner right-form-inner">
                    Sign up for a free account
                  </div>
                </div>
              </div>
              <div className="right-form-placeholder">
                <div className="right-form-inner-inner">
                  <div className="right-form-inner special-input-field">
                    <input
                      className="first_name"
                      placeholder="first-name"
                    ></input>
                    <input
                      className="last_name"
                      placeholder="last-name"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="right-form-placeholder">
                <div className="right-form-inner-inner">
                  <div className="right-form-inner">
                    <input
                      className="phone_number special-input-class"
                      placeholder="phone number"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="right-form-placeholder">
                <div className="right-form-inner-inner">
                  <div className="right-form-inner">
                    <input
                      className="email special-input-class"
                      placeholder="email"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="right-form-placeholder">
                <div className="right-form-inner-inner">
                  <div className="right-form-inner">
                    <input
                      className="create_password special-input-class"
                      placeholder="create password"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="right-form-placeholder">
                <div className="right-form-inner-inner">
                  <div className="right-form-inner">
                    <input
                      className="confirm_password special-input-class"
                      placeholder="confirm password"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="right-form-button">
                <div className="right-form-inner-inner">
                  <div className="right-form-inner special-button-desktop">
                    <button className="primary_button">Register</button>
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

export default Banner_Desktop;
