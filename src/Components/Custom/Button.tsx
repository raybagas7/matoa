import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    React.ClassAttributes<HTMLButtonElement> {
  name: string;
}

const Button: FC<ButtonProps> = ({ name, ...rest }: ButtonProps) => {
  return (
    <button
      name={name}
      {...rest}
      className="w-fit rounded-lg bg-primary px-[28px] py-[12px] text-[15px] text-white"
    ></button>
  );
};

export default Button;
