import React from "react";

const sizeClasses = {
  txtInterMedium20WhiteA70001: "font-inter font-medium",
  txtInterMedium20Black900b2: "font-inter font-medium",
  txtInterMedium25Black900: "font-inter font-medium",
  txtInterBold20Gray200: "font-bold font-inter",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtInterBold25: "font-bold font-inter",
  txtInterBold20Gray50: "font-bold font-inter",
  txtInterMedium25: "font-inter font-medium",
  txtInterBold20Black900cc: "font-bold font-inter",
  txtInterBold25Black900: "font-bold font-inter",
  txtInterLight15: "font-inter font-light",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtInterBold40: "font-bold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtInterBold25WhiteA700: "font-bold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium50: "font-inter font-medium",
  txtInterBold60: "font-bold font-inter",
  txtInterMedium40: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular13: "font-inter font-normal",
  txtInterBold20WhiteA7007f: "font-bold font-inter",
  txtInterRegular13WhiteA700: "font-inter font-normal",
  xs: "text-[13px] font-normal",
  lg: "text-xl font-medium",
  s: "text-[15px] font-medium",
  "2xl": "text-3xl font-medium",
  "3xl": "text-[32px] font-medium",
  xl: "text-2xl font-medium",
  md: "text-lg font-medium",

};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
