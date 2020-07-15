import React from "react";
import "../css/top-nav.css";
import gsap from "gsap";
import $ from "jquery";
class TopNavbar extends React.Component {
  something = () => {
    console.log("aksndksankdnaskdnksnd");
    var testing = $(".to-be-revealed");
    gsap.to(testing, 3, {});
  };

  render() {
    return (
      <div>
        <div className="to-be-revealed"></div>
        <div className="top-nav-main">
          <div className="top-nav">
            <div className="logo">LOGO</div>
            <div className="top-nav-content">
              <div className="user-icon icon-selector">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1354 5.41314C15.014 5.41314 16.5427 6.94065 16.5427 8.82048C16.5427 10.7003 15.014 12.2278 13.1354 12.2278C11.2556 12.2278 9.72683 10.7003 9.72683 8.82048C9.72683 6.94065 11.2556 5.41314 13.1354 5.41314ZM18.9558 8.82046C18.9558 5.611 16.3448 3 13.1354 3C9.9247 3 7.3137 5.611 7.3137 8.82046C7.3137 10.3902 7.94473 11.8115 8.95945 12.86C5.83445 14.1306 3.62402 17.1964 3.62402 20.7727C3.62402 21.3542 4.03908 21.8538 4.60979 21.9599L7.28232 22.457C9.22369 22.819 11.1795 23 13.1354 23C15.09 23 17.0446 22.819 18.9848 22.457L21.6597 21.9599C22.2316 21.8538 22.6455 21.3542 22.6455 20.7727C22.6455 17.1964 20.4351 14.1306 17.3113 12.86C18.3248 11.8115 18.9558 10.3902 18.9558 8.82046Z"
                      fill="#ABABAB"
                    />
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="3"
                      y="3"
                      width="20"
                      height="20"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.1354 5.41314C15.014 5.41314 16.5427 6.94065 16.5427 8.82048C16.5427 10.7003 15.014 12.2278 13.1354 12.2278C11.2556 12.2278 9.72683 10.7003 9.72683 8.82048C9.72683 6.94065 11.2556 5.41314 13.1354 5.41314ZM18.9558 8.82046C18.9558 5.611 16.3448 3 13.1354 3C9.9247 3 7.3137 5.611 7.3137 8.82046C7.3137 10.3902 7.94473 11.8115 8.95945 12.86C5.83445 14.1306 3.62402 17.1964 3.62402 20.7727C3.62402 21.3542 4.03908 21.8538 4.60979 21.9599L7.28232 22.457C9.22369 22.819 11.1795 23 13.1354 23C15.09 23 17.0446 22.819 18.9848 22.457L21.6597 21.9599C22.2316 21.8538 22.6455 21.3542 22.6455 20.7727C22.6455 17.1964 20.4351 14.1306 17.3113 12.86C18.3248 11.8115 18.9558 10.3902 18.9558 8.82046Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0)">
                      <rect
                        x="-65.5793"
                        y="-66.2034"
                        width="158.179"
                        height="158.179"
                        fill="#C2C2C2"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.624023"
                      y="0"
                      width="25.0215"
                      height="26"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="car-icon icon-selector">
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      d="M16.7958 6.09925C16.5451 5.48251 16.1125 4.95327 15.5535 4.5793C14.9945 4.20532 14.3345 4.00363 13.6581 4.00005C12.9816 3.99647 12.3195 4.19115 11.7564 4.55918C11.1933 4.92722 10.755 5.45184 10.4974 6.06589C10.4567 6.16199 10.4566 6.27003 10.497 6.36624C10.5374 6.46246 10.6152 6.53896 10.7131 6.57892C10.8109 6.61889 10.921 6.61904 11.019 6.57935C11.117 6.53966 11.195 6.46337 11.2357 6.36727C11.4334 5.89845 11.7688 5.49807 12.1993 5.21721C12.6298 4.93634 13.1357 4.78773 13.6526 4.79032C14.1694 4.79291 14.6738 4.94659 15.1013 5.23176C15.5288 5.51693 15.8601 5.92065 16.0529 6.39143C16.0891 6.47953 16.1563 6.55188 16.2424 6.5952C16.3286 6.63852 16.4277 6.64989 16.5216 6.62724C16.5399 6.62253 16.5579 6.61677 16.5755 6.60998C16.6735 6.57067 16.7517 6.4949 16.793 6.39921C16.8342 6.30352 16.8353 6.19568 16.7958 6.09925Z"
                      fill="#C2C2C2"
                      stroke="#C2C2C2"
                      stroke-width="0.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.7872 8.09616L21.5872 6.1326C21.552 6.07434 21.502 6.02608 21.442 5.9926C21.382 5.95912 21.3141 5.94156 21.2451 5.94165H20.0944C19.992 5.94709 19.8956 5.99085 19.8251 6.06392C19.7546 6.137 19.7153 6.23382 19.7153 6.33448C19.7153 6.43513 19.7546 6.53196 19.8251 6.60503C19.8956 6.67811 19.992 6.72186 20.0944 6.72731H21.0178L21.7384 7.90521H5.55241L6.27189 6.72731H20.7541C20.8565 6.72186 20.9529 6.67811 21.0234 6.60503C21.0939 6.53196 21.1332 6.43513 21.1332 6.33448C21.1332 6.23382 21.0939 6.137 21.0234 6.06392C20.9529 5.99085 20.8565 5.94709 20.7541 5.94165H6.04574C5.97659 5.9417 5.90863 5.95931 5.84847 5.99277C5.78831 6.02623 5.73799 6.0744 5.7024 6.1326L4.50249 8.09616C4.4663 8.15581 4.44683 8.2238 4.44607 8.29322C4.44531 8.36265 4.46327 8.43103 4.49814 8.49143C4.53301 8.55184 4.58355 8.6021 4.64461 8.63713C4.70568 8.67216 4.7751 8.6907 4.84582 8.69087H22.445C22.5158 8.69085 22.5853 8.67239 22.6464 8.63736C22.7075 8.60234 22.758 8.55201 22.7928 8.49152C22.8276 8.43103 22.8455 8.36255 22.8445 8.29309C22.8435 8.22362 22.8237 8.15566 22.7872 8.09616Z"
                      fill="#C2C2C2"
                      stroke="#C2C2C2"
                      stroke-width="0.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.8447 8.27783C22.8393 8.17734 22.7948 8.08271 22.7205 8.01339C22.6462 7.94408 22.5476 7.90537 22.4451 7.90521H4.84592C4.74331 7.90509 4.64458 7.94371 4.57019 8.01308C4.4958 8.08245 4.45145 8.17724 4.44634 8.27783L3.646 23.5871C3.64331 23.6403 3.65164 23.6935 3.67049 23.7434C3.68935 23.7933 3.71833 23.8389 3.7557 23.8775C3.79306 23.9162 3.83801 23.9469 3.88784 23.968C3.93767 23.989 3.99134 23.9999 4.04559 24H23.2443C23.2986 24.0001 23.3524 23.9893 23.4024 23.9683C23.4523 23.9473 23.4974 23.9166 23.5349 23.878C23.5724 23.8393 23.6015 23.7936 23.6204 23.7436C23.6393 23.6936 23.6477 23.6404 23.645 23.5871L22.8447 8.27783ZM4.46626 23.2111L5.22558 8.69069H22.0643L22.8236 23.2111H4.46626Z"
                      fill="#C2C2C2"
                      stroke="#C2C2C2"
                      stroke-width="0.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.6447 9.47415C16.4074 9.47415 16.1754 9.54323 15.9781 9.67266C15.7808 9.80209 15.627 9.98606 15.5362 10.2013C15.4453 10.4165 15.4216 10.6534 15.4679 10.8819C15.5142 11.1103 15.6285 11.3202 15.7963 11.485C15.9641 11.6497 16.1779 11.7619 16.4107 11.8073C16.6434 11.8528 16.8847 11.8295 17.1039 11.7403C17.3232 11.6512 17.5106 11.5002 17.6424 11.3065C17.7743 11.1128 17.8447 10.885 17.8447 10.6521C17.844 10.3398 17.7174 10.0406 17.4925 9.81982C17.2676 9.59906 16.9628 9.47476 16.6447 9.47415ZM16.6447 11.0455C16.5655 11.0455 16.488 11.0224 16.4221 10.9792C16.3562 10.9359 16.3048 10.8745 16.2745 10.8026C16.2442 10.7307 16.2362 10.6516 16.2517 10.5753C16.2672 10.499 16.3053 10.4289 16.3614 10.3739C16.4174 10.3189 16.4888 10.2814 16.5666 10.2662C16.6443 10.251 16.7249 10.2588 16.7981 10.2886C16.8713 10.3184 16.9339 10.3688 16.978 10.4335C17.022 10.4982 17.0455 10.5743 17.0455 10.6521C17.0455 10.7564 17.0033 10.8565 16.9281 10.9302C16.853 11.004 16.751 11.0455 16.6447 11.0455Z"
                      fill="#C2C2C2"
                      stroke="#C2C2C2"
                      stroke-width="0.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6451 9.47415C10.408 9.47483 10.1763 9.5445 9.97945 9.67434C9.78259 9.80418 9.62934 9.98839 9.53906 10.2037C9.44878 10.419 9.42552 10.6557 9.47222 10.884C9.51891 11.1122 9.63347 11.3218 9.80142 11.4862C9.96937 11.6506 10.1832 11.7624 10.4158 11.8076C10.6485 11.8528 10.8896 11.8292 11.1086 11.74C11.3277 11.6507 11.5149 11.4997 11.6466 11.3061C11.7783 11.1125 11.8486 10.8849 11.8486 10.6521C11.8479 10.3392 11.7208 10.0395 11.4952 9.81861C11.2695 9.59774 10.9638 9.47385 10.6451 9.47415ZM10.6451 11.0455C10.5659 11.0455 10.4884 11.0224 10.4225 10.9792C10.3566 10.9359 10.3052 10.8745 10.2749 10.8026C10.2446 10.7307 10.2366 10.6516 10.2521 10.5753C10.2675 10.499 10.3057 10.4289 10.3618 10.3739C10.4178 10.3189 10.4892 10.2814 10.5669 10.2662C10.6447 10.251 10.7253 10.2588 10.7985 10.2886C10.8717 10.3184 10.9343 10.3688 10.9783 10.4335C11.0224 10.4982 11.0459 10.5743 11.0459 10.6521C11.0459 10.7564 11.0037 10.8565 10.9285 10.9302C10.8534 11.004 10.7514 11.0455 10.6451 11.0455Z"
                      fill="#C2C2C2"
                      stroke="#C2C2C2"
                      stroke-width="0.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.6446 10.6518H16.6142C16.5081 10.6521 16.4064 10.6937 16.3315 10.7674C16.2566 10.8411 16.2146 10.941 16.2146 11.0451C16.2144 11.0968 16.2248 11.1481 16.245 11.1958V13.2049C16.2524 13.5445 16.1906 13.8821 16.0632 14.198C15.9359 14.5139 15.7456 14.8016 15.5035 15.0443C15.2613 15.287 14.9723 15.4799 14.6532 15.6115C14.3342 15.7432 13.9915 15.811 13.6454 15.811C13.2993 15.811 12.9567 15.7432 12.6376 15.6115C12.3186 15.4799 12.0295 15.287 11.7874 15.0443C11.5453 14.8016 11.3549 14.5139 11.2276 14.198C11.1003 13.8821 11.0384 13.5445 11.0458 13.2049V11.0451C11.0487 10.9918 11.0406 10.9384 11.0218 10.8882C11.003 10.838 10.974 10.7922 10.9366 10.7534C10.8991 10.7146 10.854 10.6837 10.804 10.6626C10.754 10.6414 10.7001 10.6306 10.6456 10.6306C10.5912 10.6306 10.5373 10.6414 10.4873 10.6626C10.4373 10.6837 10.3921 10.7146 10.3547 10.7534C10.3172 10.7922 10.2882 10.838 10.2695 10.8882C10.2507 10.9384 10.2425 10.9918 10.2455 11.0451V13.2049C10.2455 14.0894 10.6035 14.9377 11.2408 15.5632C11.8781 16.1886 12.7424 16.54 13.6437 16.54C14.5449 16.54 15.4093 16.1886 16.0466 15.5632C16.6838 14.9377 17.0419 14.0894 17.0419 13.2049V11.0451C17.0419 10.9414 17.0001 10.8419 16.9257 10.7682C16.8513 10.6946 16.7503 10.6527 16.6446 10.6518Z"
                      fill="#C2C2C2"
                      stroke="#C2C2C2"
                      stroke-width="0.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <circle
                    cx="13.5189"
                    cy="17.0478"
                    r="5.21739"
                    fill="#FF5C41"
                  />
                  <path
                    d="M14.4298 13.8304V20.8304H13.4398V14.7004H11.8598V13.8304H14.4298Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.29541"
                      y="0.649994"
                      width="26.7"
                      height="26.7"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div
                onClick={() => {
                  this.something();
                }}
                className="menu-icon icon-selector"
              >
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <rect
                      x="3.64551"
                      y="3"
                      width="20"
                      height="20"
                      rx="6"
                      fill="#C2C2C2"
                    />
                  </g>
                  <g filter="url(#filter1_ii)">
                    <line
                      x1="8.39551"
                      y1="9.25"
                      x2="18.8955"
                      y2="9.25"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="8.39551"
                      y1="13.25"
                      x2="18.8955"
                      y2="13.25"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="8.39551"
                      y1="17.25"
                      x2="18.8955"
                      y2="17.25"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.645508"
                      y="0"
                      width="26"
                      height="26"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_ii"
                      x="7.14551"
                      y="8"
                      width="13"
                      height="10.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="0.5" dy="0.5" />
                      <feGaussianBlur stdDeviation="0.75" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-0.5" dy="-0.5" />
                      <feGaussianBlur stdDeviation="0.75" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow"
                        result="effect2_innerShadow"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopNavbar;
