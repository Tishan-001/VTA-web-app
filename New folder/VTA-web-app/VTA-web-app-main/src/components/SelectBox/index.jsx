import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[3px]",
  square: "rounded-[0px]",
};
const variants = {
  outline: {
    black_900_33: "border-black-900_33 border border-solid text-black-900",
  },
  underline: "text-black-900_7f border-b border-black-900_7f border-solid",
};
const sizes = {
  sm: "h-[29px] pl-[9px] pr-[35px] text-[10px]",
  xs: "h-[21px] pr-[35px] text-[9px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape = "",
      size = "xs",
      variant = "underline",
      color = "black_900_33",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
  ref={ref}
  options={options}
  className={`${className} flex ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
  isSearchable={isSearchable}
  isMulti={isMulti}
  components={{
    IndicatorSeparator: () => null,
    ...(indicator && { DropdownIndicator: () => indicator }),
  }}
  styles={{
    container: (provided) => ({
      ...provided,
      zIndex: 0,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "0 !important",
      boxShadow: "0 !important",
      minHeight: "auto",
      width: "100%",
      "&:hover": {
        border: "0 !important",
      },
    }),
    input: (provided) => ({
      ...provided,
      color: "inherit",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected && "#447e9e",
      color: state.isSelected && "#ffffff",
      "&:hover": {
        backgroundColor: "#447e9e",
        color: "#ffffff",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
    }),
    placeholder: (provided) => ({
      ...provided,
      margin: 0,
    }),
    menuPortal: (base) => ({ ...base, zIndex: 999999 }),
  }}
  menuPortalTarget={document.body}
  closeMenuOnScroll={(event) => {
    return event.target.id === "scrollContainer";
  }}
  {...restProps}
/>

        {children}
      </>
    );
  },
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["outline", "underline"]),
  color: PropTypes.oneOf(["black_900_33"]),
};

export { SelectBox };