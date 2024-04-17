import React from "react";

const Button = ({ size = "medium", title, bgColor = "black", ...props }) => {
  let buttonSizeClass = "";
  let textColorClass = "";

  switch (size) {
    case "small":
      buttonSizeClass = "py-2 px-4 text-sm";
      break;
    case "medium":
      buttonSizeClass = "py-3 px-6 text-base";
      break;
    case "large":
      buttonSizeClass = "py-4 px-8 text-lg";
      break;
    default:
      buttonSizeClass = "py-3 px-6 text-base";
  }

  // Determine text color based on background color
  if (bgColor === "black") {
    textColorClass = "text-white";
  } else {
    textColorClass = "text-black";
  }

  return (
    <button
      className={`rounded-lg shadow hover:bg-${bgColor}/80 ${textColorClass} ${buttonSizeClass}`}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
