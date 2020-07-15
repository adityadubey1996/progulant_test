import React, { Component } from "react";
import "../css/404page.css";
import { NavLink } from "react-router-dom";
export default class Page404 extends Component {
  render() {
    return (
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <NavLink to="/home">home</NavLink> and try from there.
          </p>
        </div>
      </div>
    );
  }
}
