import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) {
        // Pass the full event back to parent component
        onChange(e);
      }
    };

    return (
      <>
        <div className={className.trim()}>
          {!!label && <label htmlFor={name}>{label}</label>}
          {!!prefix && <span>{prefix}</span>}
          <input 
            ref={ref} 
            type={type} 
            name={name} 
            onChange={handleChange} 
            placeholder={placeholder} 
            {...restProps} 
          />
          {!!suffix && <span>{suffix}</span>}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onChange: PropTypes.func,
};

export { Input };
