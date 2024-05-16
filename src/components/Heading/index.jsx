import React from "react";

const sizes = {
  s: "text-[25px] font-bold",
  md: "text-[40px] font-bold",
  xs: "text-xl font-bold",
  lg: "text-6xl font-bold",
  "3xl": "text-[40px] font-bold",
  "2xl": "text-[32px] font-semibold",
  xl: "text-[25px] font-bold",
  "5xl": "text-[80px] font-bold",
  "4xl": "text-[64px] font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
