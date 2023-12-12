import "./matoaButton.css";

import React, { ButtonHTMLAttributes, FC } from "react";
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    React.ClassAttributes<HTMLButtonElement> {
  name: string;
  rounded?: boolean;
  primary?: boolean;
  borderPrimary?: boolean;
  textColor?: string;
  animateHover?: boolean;
  shadow?: boolean;
  component?: React.ReactNode;
}

const MatoaButton: FC<ButtonProps> = ({
  name,
  rounded,
  primary,
  borderPrimary,
  textColor,
  animateHover,
  shadow,
  component,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      name={name}
      {...rest}
      className={`
  ${rounded ? "rounded-full" : ""} ${
    textColor ? `text-${textColor}` : "text-white"
  } ${primary ? "bg-primary" : ""} ${
    borderPrimary ? "matoa-button__primary" : ""
  } ${animateHover ? "matoa-button_hover" : ""} ${
    shadow ? "shadow-md" : ""
  } matoa-button w-fit`}
    >
      {children && children}
      {component && component}
    </button>
  );
};

export default MatoaButton;
