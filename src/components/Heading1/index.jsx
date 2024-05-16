import React from "react";

const sizes = {
  xl: "text-3xl font-bold",
  xl2: "text-xl font-semibold",
  "4xl": "text-[40px] font-bold",
  "2xl": "text-2xl font-semibold",
  "5xl": "text-[64px] font-semibold",
  "3xl": "text-4xl font-semibold",
  xl1: "text-xl font-semibold",
  s: "text-base font-bold",
  s1: "text-sm font-semibold",
  md: "text-lg font-bold",
  xs: "text-[15px] font-bold",
  lg: "text-2xl font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
