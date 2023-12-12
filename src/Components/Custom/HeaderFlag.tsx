import React from "react";

interface IHeadFlag {
  title: string;
}

function HeaderFlag({ title }: IHeadFlag) {
  return (
    <div className=" w-fit rounded-r-full bg-primary py-3 pl-[3.125rem] pr-5 shadow-md">
      <div className="rounded-full bg-white/40 px-3 py-1 shadow-md">
        <h2 className="text-xl text-white">{title}</h2>
      </div>
    </div>
  );
}

export default HeaderFlag;
