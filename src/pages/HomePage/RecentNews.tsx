import React from "react";
import MatoaButton from "../../Components/Custom/MatoaButton/MatoaButton";

function RecentNews() {
  return (
    <div className="relative flex h-[100vh] items-center justify-center text-primary-text">
      <div className="absolute right-0 top-10 h-[28rem] w-[40rem] bg-secondary"></div>
      <img
        alt="hand-watcj"
        src="/watchwithhand.png"
        className="absolute right-[10rem] h-[28rem] w-[40rem] object-cover"
      ></img>
      <div className="flex h-full w-[80vw] items-center">
        <h2 className="absolute top-0 text-[2.25rem]">Recent News</h2>
        <div className=" space-y-5">
          <p className="text-[1.25rem] text-thin-text">Where To Travel</p>
          <p className="w-[22rem] text-[2.25rem]">
            Matoa Where To Travel? Yogyakarta
          </p>
          <MatoaButton
            name="discover"
            component="Discover"
            borderPrimary
            shadow
            animateHover
            rounded
            textColor="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default RecentNews;
