import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar_desktop.css";
import $ from "jquery";
// import NavbarShirtDesktop from "./navbar_shirt_desktop";

import { useSelector, useDispatch } from "react-redux";
import { Change, Not_change, Click } from "../actions/index";

export default function Navbar_Desktop({ match }) {
  const object = useSelector((state) => state.clickedEvent);
  const dispatch = useDispatch();
  // console.log(object);
  let { Shirt, Pant, Home, Suit } = object;
  // console.log(Shirt);
  // console.log(Pant, Home.selected, Suit.selected);

  const [homepage, sethomepage] = useState();
  const [shirtpage, setshirtpage] = useState();
  const [pantpage, setpantpage] = useState();
  const [suitpage, setsuitpage] = useState();

  React.useEffect(() => {
    sethomepage(Home.selected);
    setshirtpage(Shirt.selected);
    setpantpage(Pant.selected);
    setsuitpage(Suit.selected);
    // console.log(homepage);
    // console.log(shirtpage);
    if (homepage == true) {
      console.log("from homepage");
      $(".home-navbar-desktop-navlink").addClass("clicked-navbar-desktop");
      $(".Shirt-navbar-desktop-navlink").removeClass("clicked-navbar-desktop");
      $(".Pant-navbar-desktop-navlink").removeClass("clicked-navbar-desktop");
      $(".Suit-navbar-desktop-navlink").removeClass("clicked-navbar-desktop");
    }

    if (shirtpage == true) {
      $(".home-navbar-desktop-navlink").removeClass("clicked-navbar-desktop");
      $(".Shirt-navbar-desktop-navlink").addClass("clicked-navbar-desktop");
      $(".Pant-navbar-desktop-navlink").removeClass("clicked-navbar-desktop");
      $(".Suit-navbar-desktop-navlink").removeClass("clicked-navbar-desktop");
    }
  });

  // const [path, setPath] = useState(
  //   "/shirt?fabric=true&foption={true,1;false,0;false,0;false,0;false,0;false,0;false,0;false,0}"
  // );
  // const [arr1, arr2] = useState(null);

  // function usePageViews() {
  //   let location = useLocation();
  //   React.useEffect(() => {
  //     let arr = location.pathname;

  //     console.log(arr);
  //     arr2(arr);
  //   });
  // }
  // usePageViews();
  // React.useEffect(() => {
  //   console.log(homepage);
  // });

  return (
    <div className="navbar-desktop">
      <div className="logo-desktop">
        <h1>MIKE GULATI</h1>
      </div>
      <div className="navbar-desktop-outer">
        <div className="navbar-desktop-inner">
          <NavLink
            className="navbar-desktop-navlink  home-navbar-desktop-navlink"
            to="/"
            // isActive={() => {
            //   return homepage;
            // }}
            onClick={() => {
              Home.selected = true;
              Shirt.selected = false;
              Pant.selected = false;
              Suit.selected = false;
              // console.log(object);
              dispatch(Click(object));
            }}
          >
            <div className="navbar-desktop-animation-outer"></div>
            <div className="navbar-dekstop-inner-inner">HOME</div>
          </NavLink>
        </div>
        <div className="navbar-desktop-inner">
          <NavLink
            className="navbar-desktop-navlink Shirt-navbar-desktop-navlink"
            to="/shirt"
            onClick={() => {
              Home.selected = false;
              Shirt.selected = true;
              Pant.selected = false;
              Suit.selected = false;
              // console.log(object);
              dispatch(Click(object));
            }}
            // isActive={() => {
            //   return shirtpage;
            // }}
          >
            <div className="navbar-desktop-animation-outer"></div>
            <div className="navbar-dekstop-inner-inner">SHIRT</div>
          </NavLink>
        </div>
        <div className="navbar-desktop-inner">
          <div
            className="navbar-desktop-navlink Pant-navbar-desktop-navlink"
            to="/pant"
            onClick={() => {
              Home.selected = false;
              Shirt.selected = false;
              Pant.selected = true;
              Suit.selected = false;
              // console.log(object);
              dispatch(Click(object));
            }}
            // isActive={() => {
            //   return shirtpage;
            // }}></NavLink>
          >
            <div className="navbar-desktop-animation-outer"></div>
            <div className="navbar-dekstop-inner-inner">PANT</div>
          </div>
        </div>
        <div
          className="navbar-desktop-inner Suit-navbar-desktop-navlink"
          to="/suit"
          onClick={() => {
            Home.selected = false;
            Shirt.selected = false;
            Pant.selected = false;
            Suit.selected = true;
            // console.log(object);
            dispatch(Click(object));
          }}
        >
          <div className="navbar-desktop-animation-outer"></div>
          <div className="navbar-dekstop-inner-inner">SUIT</div>
        </div>
      </div>
      <div className="icon-navbar-outer">
        <div className="icon-navbar-inner">
          <div className="icon-navbar-inner-inner">
            <div className="icon-desktop">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8235 2.74602C12.9612 2.74602 14.7008 4.48425 14.7008 6.6234C14.7008 8.76255 12.9612 10.5008 10.8235 10.5008C8.68431 10.5008 6.94471 8.76255 6.94471 6.6234C6.94471 4.48425 8.68431 2.74602 10.8235 2.74602ZM17.4468 6.6234C17.4468 2.97119 14.4756 0 10.8234 0C7.16986 0 4.19866 2.97119 4.19866 6.6234C4.19866 8.40968 4.91675 10.0271 6.07145 11.2202C2.51535 12.666 0 16.1548 0 20.2244C0 20.8862 0.472315 21.4546 1.12175 21.5755L4.16296 22.1411C6.37214 22.5531 8.59778 22.759 10.8234 22.759C13.0477 22.759 15.272 22.5531 17.4798 22.1411L20.5237 21.5755C21.1746 21.4546 21.6455 20.8862 21.6455 20.2244C21.6455 16.1548 19.1301 12.666 15.5754 11.2202C16.7287 10.0271 17.4468 8.40968 17.4468 6.6234Z"
                  fill="black"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="22"
                  height="23"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8235 2.74602C12.9612 2.74602 14.7008 4.48425 14.7008 6.6234C14.7008 8.76255 12.9612 10.5008 10.8235 10.5008C8.68431 10.5008 6.94471 8.76255 6.94471 6.6234C6.94471 4.48425 8.68431 2.74602 10.8235 2.74602ZM17.4468 6.6234C17.4468 2.97119 14.4756 0 10.8234 0C7.16986 0 4.19866 2.97119 4.19866 6.6234C4.19866 8.40968 4.91675 10.0271 6.07145 11.2202C2.51535 12.666 0 16.1548 0 20.2244C0 20.8862 0.472315 21.4546 1.12175 21.5755L4.16296 22.1411C6.37214 22.5531 8.59778 22.759 10.8234 22.759C13.0477 22.759 15.272 22.5531 17.4798 22.1411L20.5237 21.5755C21.1746 21.4546 21.6455 20.8862 21.6455 20.2244C21.6455 16.1548 19.1301 12.666 15.5754 11.2202C16.7287 10.0271 17.4468 8.40968 17.4468 6.6234Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <rect
                    x="-78.75"
                    y="-78.75"
                    width="180"
                    height="180"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
            <div className="icon-desktop">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7684 3.65913C15.4801 2.94988 14.9826 2.34125 14.3398 1.91118C13.6969 1.48111 12.938 1.24917 12.16 1.24505C11.3821 1.24093 10.6206 1.46482 9.97311 1.88806C9.32558 2.31129 8.82146 2.91461 8.5253 3.62077C8.47848 3.73128 8.4783 3.85553 8.5248 3.96617C8.5713 4.07682 8.66067 4.1648 8.77325 4.21076C8.88583 4.25672 9.01239 4.25689 9.12511 4.21125C9.23782 4.1656 9.32744 4.07787 9.37426 3.96736C9.6016 3.42822 9.98739 2.96778 10.4824 2.64478C10.9775 2.32179 11.5593 2.15088 12.1537 2.15386C12.7481 2.15684 13.3281 2.33358 13.8198 2.66152C14.3114 2.98946 14.6924 3.45374 14.9141 3.99513C14.9556 4.09645 15.033 4.17966 15.1321 4.22947C15.2311 4.27929 15.3451 4.29237 15.4531 4.26632C15.4742 4.2609 15.4949 4.25428 15.5151 4.24648C15.6278 4.20127 15.7177 4.11413 15.7652 4.00408C15.8126 3.89404 15.8138 3.77003 15.7684 3.65913Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.6585 5.95559L21.2786 3.6975C21.2381 3.63049 21.1805 3.575 21.1115 3.5365C21.0425 3.49799 20.9645 3.4778 20.8851 3.47791H19.5618C19.4441 3.48416 19.3332 3.53449 19.2521 3.61852C19.1711 3.70255 19.1259 3.8139 19.1259 3.92966C19.1259 4.04541 19.1711 4.15676 19.2521 4.2408C19.3332 4.32483 19.4441 4.37515 19.5618 4.38141H20.6237L21.4524 5.736H2.83855L3.66595 4.38141H20.3205C20.4382 4.37515 20.5491 4.32483 20.6302 4.2408C20.7112 4.15676 20.7564 4.04541 20.7564 3.92966C20.7564 3.8139 20.7112 3.70255 20.6302 3.61852C20.5491 3.53449 20.4382 3.48416 20.3205 3.47791H3.40587C3.32635 3.47796 3.2482 3.49821 3.17901 3.53669C3.10982 3.57517 3.05196 3.63057 3.01103 3.6975L1.63113 5.95559C1.58951 6.02419 1.56713 6.10238 1.56625 6.18221C1.56537 6.26205 1.58603 6.3407 1.62614 6.41016C1.66624 6.47962 1.72435 6.53743 1.79458 6.57771C1.8648 6.61799 1.94463 6.63931 2.02597 6.6395H22.265C22.3464 6.63949 22.4263 6.61825 22.4966 6.57797C22.5669 6.53769 22.625 6.47981 22.665 6.41025C22.7051 6.34069 22.7255 6.26194 22.7244 6.18206C22.7233 6.10217 22.7005 6.02402 22.6585 5.95559Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.7246 6.1645C22.7183 6.04894 22.6673 5.94011 22.5818 5.8604C22.4963 5.78069 22.3829 5.73617 22.265 5.73599H2.02598C1.90798 5.73585 1.79444 5.78026 1.70889 5.86004C1.62334 5.93981 1.57235 6.04883 1.56646 6.1645L0.646078 23.7702C0.642976 23.8313 0.652558 23.8925 0.674241 23.9499C0.695925 24.0073 0.729259 24.0598 0.772223 24.1042C0.815188 24.1486 0.866889 24.1839 0.924193 24.2081C0.981497 24.2323 1.04321 24.2449 1.1056 24.245H23.1841C23.2466 24.2451 23.3084 24.2327 23.3659 24.2085C23.4234 24.1844 23.4752 24.1491 23.5183 24.1047C23.5614 24.0602 23.5949 24.0077 23.6167 23.9502C23.6384 23.8927 23.648 23.8315 23.6449 23.7702L22.7246 6.1645ZM1.58937 23.3377L2.46259 6.63929H21.8271L22.7003 23.3377H1.58937Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5946 7.54025C15.3216 7.54025 15.0549 7.6197 14.8279 7.76854C14.601 7.91739 14.4241 8.12895 14.3197 8.37647C14.2153 8.62398 14.1879 8.89635 14.2412 9.15911C14.2944 9.42188 14.4258 9.66324 14.6188 9.85269C14.8118 10.0421 15.0577 10.1711 15.3254 10.2234C15.593 10.2757 15.8705 10.2489 16.1226 10.1463C16.3748 10.0438 16.5903 9.87018 16.7419 9.64742C16.8935 9.42466 16.9745 9.16276 16.9745 8.89485C16.9738 8.5358 16.8281 8.19166 16.5695 7.93778C16.3109 7.68389 15.9603 7.54095 15.5946 7.54025ZM15.5946 9.34726C15.5034 9.34726 15.4143 9.32073 15.3385 9.27101C15.2627 9.2213 15.2037 9.15064 15.1688 9.06798C15.1339 8.98531 15.1248 8.89434 15.1426 8.80658C15.1603 8.71882 15.2042 8.63821 15.2687 8.57494C15.3331 8.51167 15.4153 8.46858 15.5047 8.45113C15.5941 8.43367 15.6867 8.44263 15.7709 8.47687C15.8551 8.51111 15.9271 8.5691 15.9778 8.6435C16.0284 8.7179 16.0554 8.80537 16.0554 8.89485C16.0554 9.01483 16.0069 9.12991 15.9204 9.21475C15.834 9.29959 15.7168 9.34726 15.5946 9.34726Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.69508 7.54025C8.42233 7.54104 8.15594 7.62115 7.92955 7.77047C7.70316 7.91979 7.52692 8.13162 7.4231 8.37921C7.31927 8.6268 7.29252 8.89904 7.34622 9.16154C7.39992 9.42404 7.53166 9.66504 7.72481 9.85408C7.91795 10.0431 8.16383 10.1717 8.4314 10.2237C8.69896 10.2756 8.97621 10.2486 9.22812 10.1459C9.48002 10.0433 9.6953 9.86968 9.84675 9.647C9.99819 9.42433 10.079 9.16259 10.079 8.89485C10.0783 8.53511 9.93214 8.19037 9.67264 7.93638C9.41314 7.68238 9.06153 7.5399 8.69508 7.54025ZM8.69508 9.34726C8.60393 9.34726 8.51482 9.32073 8.43903 9.27101C8.36324 9.2213 8.30417 9.15065 8.26929 9.06798C8.23441 8.98531 8.22528 8.89434 8.24306 8.80659C8.26085 8.71883 8.30474 8.63821 8.36919 8.57494C8.43365 8.51167 8.51577 8.46858 8.60517 8.45113C8.69456 8.43367 8.78723 8.44263 8.87144 8.47687C8.95565 8.51111 9.02763 8.5691 9.07827 8.6435C9.12891 8.7179 9.15594 8.80537 9.15594 8.89485C9.15594 9.01483 9.10739 9.12991 9.02096 9.21475C8.93453 9.29959 8.81731 9.34726 8.69508 9.34726Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5946 8.89457H15.5595C15.4375 8.89492 15.3207 8.94273 15.2345 9.02751C15.1484 9.1123 15.1 9.22715 15.1 9.34688C15.0998 9.40634 15.1117 9.46525 15.1351 9.52013V11.8306C15.1435 12.2212 15.0724 12.6094 14.926 12.9727C14.7795 13.3359 14.5607 13.6668 14.2822 13.9459C14.0038 14.2251 13.6714 14.4468 13.3045 14.5982C12.9375 14.7496 12.5435 14.8276 12.1455 14.8276C11.7475 14.8276 11.3534 14.7496 10.9865 14.5982C10.6196 14.4468 10.2872 14.2251 10.0087 13.9459C9.7303 13.6668 9.51144 13.3359 9.365 12.9727C9.21856 12.6094 9.14747 12.2212 9.15592 11.8306V9.34688C9.15931 9.28551 9.14991 9.22411 9.12832 9.16642C9.10672 9.10874 9.07337 9.05598 9.0303 9.01136C8.98724 8.96674 8.93536 8.93121 8.87784 8.90693C8.82031 8.88264 8.75835 8.87012 8.69573 8.87012C8.63311 8.87012 8.57115 8.88264 8.51362 8.90693C8.4561 8.93121 8.40422 8.96674 8.36116 9.01136C8.31809 9.05598 8.28474 9.10874 8.26314 9.16642C8.24155 9.22411 8.23215 9.28551 8.23554 9.34688V11.8306C8.23554 12.8478 8.64726 13.8234 9.38014 14.5426C10.113 15.2619 11.107 15.666 12.1435 15.666C13.1799 15.666 14.1739 15.2619 14.9068 14.5426C15.6397 13.8234 16.0514 12.8478 16.0514 11.8306V9.34688C16.0514 9.2276 16.0034 9.11315 15.9179 9.02844C15.8323 8.94373 15.7161 8.89561 15.5946 8.89457Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="cart-number">
                <div className="cart-number-positioning">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6.25" r="6" fill="#FF5C41" />
                  </svg>
                  <span className="cart-number-number">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
