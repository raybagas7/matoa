import React from "react";

function Discover() {
  return (
    <div className="mt-[5rem] flex h-[17rem] w-full gap-[2rem] px-[10vw]">
      <div className="relative flex-1 space-y-3 bg-white p-[2rem]">
        <p className="text-[1.75rem]">
          Luxurious <span className="font-semibold">Eyewear</span>
        </p>
        <p className="max-w-[21.5rem]">
          See the beauty of exotic world with the luxurious glasses
        </p>
        <button className="border-b-2 border-primary-text font-semibold">
          Discover Now
        </button>
        <img
          className="absolute bottom-5 right-5"
          src="./glasses.png"
          alt="glasses"
        />
      </div>
      <div className="relative flex-1 bg-white p-[2rem]">
        <p className="text-[1.75rem]">
          Comfortable <span className="font-semibold">Watches</span>
        </p>
        <p className="max-w-[21.5rem]">
          Feels the balancing function and beauty in our wooden watches
        </p>
        <button className="border-b-2 border-primary-text font-semibold">
          Discover Now
        </button>
        <img
          className="absolute bottom-5 right-5"
          src="./watch.png"
          alt="glasses"
        />
      </div>
    </div>
  );
}

export default Discover;
