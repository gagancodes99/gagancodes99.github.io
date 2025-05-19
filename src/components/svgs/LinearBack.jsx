import * as React from "react";

const LinearBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
    viewBox="0 0 106 38"
  >
    <path
      fill="#29292B"
      stroke="url(#paint0_linear_392_339)"
      d="M.5.5h105v37H.5z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_392_339"
        x1="53"
        x2="53"
        y1="0"
        y2="38"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F66435"></stop>
        <stop offset="1" stopColor="#903B1F"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default LinearBack;
