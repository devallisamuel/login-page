import React, { useState } from "react";
import ErrorMessage from '../atoms/ErrorMessage';

const CustomInput = ({
    className, 
    icon, 
    iconClass,
    name, 
    inputClassName,
    disabled,
    onChange,
    placeholder,
    type,
    value,
    required,
    label,
    error,
    ...otherProps
}) => {
  const inputRef= React.useRef(null);

  const handleClick = () => {
    // if (inputRef && inputRef.current) inputRef.current.focus();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <label>{label}</label>
      <div className={`flex items-center mt-3 h-[46px] w-full ${className}`}>
        <div className={`flex px-5 bg-white text-black items-center justify-start h-full w-full rounded border-citiGray-100`} onClick={handleClick}>
          {icon && <i className={`fa ${icon}`}  />}
          <input
            aria-label={name}
            className={`${inputClassName} border-none outline-none focus:ring-0 autofill:shadow-reset-bg autofill:hover:shadow-reset-bg autofill:focus:shadow-reset-bg autofill:active:shadow-reset-bg h-full w-full`}
            disabled={disabled}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            ref={inputRef}
            required={required}
            tabIndex={0}
            type={type === "password" && showPassword ? "text" : type}
            value={value}
            {...otherProps}
          />
          {type === "password" && showPassword ? (
            <i className="fa fa-eye text-gray-400" onClick={handleShowPassword} ></i>
          ) : (
            type === "password" && !showPassword && <i className="fa fa-eye-slash text-gray-400" onClick={handleShowPassword} />
          )}
        </div>
      </div>
      <div>
        <ErrorMessage error={error}/>
      </div>
    </>
  );
};

export default CustomInput;

CustomInput.defaultProps = {
  className: "",
  disabled: false,
  error: "",
  icon: "",
  readOnly: false,
  inputClassName: "",
  name: "",
  iconClass: "",
  container: "",
  required: false,
};
