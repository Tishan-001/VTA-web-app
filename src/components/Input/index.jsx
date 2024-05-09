import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
<<<<<<< HEAD
=======
      children,
>>>>>>> 062ef950bd3e20315de8a7e1cc76d0bdb5df61d8
      label = "",
      prefix,
      suffix,
      onChange,
<<<<<<< HEAD
=======

>>>>>>> 062ef950bd3e20315de8a7e1cc76d0bdb5df61d8
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
<<<<<<< HEAD
      if (onChange) {
        // Pass the full event back to parent component
        onChange(e);
      }
=======
      if (onChange) onChange(e?.target?.value);
>>>>>>> 062ef950bd3e20315de8a7e1cc76d0bdb5df61d8
    };

    return (
      <>
<<<<<<< HEAD
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
=======
        <div className={`${className} undefined   `}>
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
>>>>>>> 062ef950bd3e20315de8a7e1cc76d0bdb5df61d8
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
<<<<<<< HEAD
  onChange: PropTypes.func,
=======
>>>>>>> 062ef950bd3e20315de8a7e1cc76d0bdb5df61d8
};

export { Input };
