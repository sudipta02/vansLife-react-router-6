import React from "react";

function LeftArrowIcon({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={width}
      height={height}
      color={color}
    >
      <path d="M19 12H6M12 5l-7 7 7 7" />
    </svg>
  );
}

export default LeftArrowIcon;
