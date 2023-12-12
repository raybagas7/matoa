import React from "react";

interface IMatoaHeader {
  title: string | React.ReactNode;
  small?: boolean;
  textColor?: string;
}

function MatoaHeader({ title, textColor, small }: IMatoaHeader) {
  return (
    <div>
      <h2
        className={`${small ? "text-[1.5rem]" : "text-[2.24rem]"} ${
          textColor ? `text-${textColor}` : "text-primary-text"
        }`}
      >
        {title}
      </h2>
      <hr
        className={`w-[4rem] ${
          textColor ? `border-${textColor}` : "border-primary-text"
        }`}
      />
    </div>
  );
}

export default MatoaHeader;
