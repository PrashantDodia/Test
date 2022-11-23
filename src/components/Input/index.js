import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  FillGray52: "bg-gray_52",
  srcOutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid",
  srcFillWhiteA700: "bg-white_A700",
};
const shapes = {
  RoundedBorder10: "rounded-radius10",
  srcRoundedBorder10: "rounded-radius10",
};
const sizes = {
  sm: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  md: "xl:pb-[11px] pb-[13px] 3xl:pb-[15px] lg:pb-[9px] lg:pt-[12px] xl:pt-[16px] pt-[18px] 3xl:pt-[21px] xl:px-[11px] px-[13px] 3xl:px-[15px] lg:px-[9px]",
  lg: "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  smSrc:
    "3xl:pb-[10px] lg:pb-[6px] xl:pb-[8px] pb-[9px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[8px] px-[9px]",
  mdSrc:
    "lg:pb-[12px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pt-[16px] xl:pt-[20px] pt-[23px] 3xl:pt-[27px] lg:px-[12px] xl:px-[16px] px-[18px] 3xl:px-[21px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10", "srcRoundedBorder10"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "FillGray52",
    "srcOutlineBluegray100",
    "srcFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc", "mdSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineBluegray100",
  size: "lg",
};

export { Input };
