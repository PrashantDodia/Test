import React from "react";
const variantClasses = {
  h1: "font-extrabold lg:text-[38px] xl:text-[48px] text-[54px] 3xl:text-[64px]",
  h2: "font-extrabold lg:text-[32px] xl:text-[40px] text-[46px] 3xl:text-[55px]",
  h3: "font-extrabold lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h4: "font-extrabold lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  h5: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h6: "font-bold lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body1: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body2: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body3: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body4: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body5:
    "font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
