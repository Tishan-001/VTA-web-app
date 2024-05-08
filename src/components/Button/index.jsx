import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[18px]" };
const variants = {
  fill: {
    black_900_01: "bg-black-900_01 text-white-A700",
    white_A700_72: "bg-white-A700_72 text-black-900",
    white_A700: "bg-white-A700 shadow-bs text-black-900",
    gray_600_99: "bg-gray-600_99 text-white-A700",
    gray_700_66: "bg-gray-700_66 text-white-A700",
    white_A700_b2: "bg-white-A700_b2 shadow-bs text-black-900",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2.5",
  md: "p-3.5",
  lg: "p-[21px] sm:px-5",
  lg1: "h-[61px] pl-[35px] pr-6 text-xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700_b2",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "black_900_01",
    "white_A700_72",
    "white_A700",
    "gray_600_99",
    "gray_700_66",
    "white_A700_b2",
  ]),
};

export { Button };
