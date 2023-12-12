import React from "react";
import MatoaHeader from "../../Components/Custom/MatoaHeader/MatoaHeader";
import MatoaSeries from "../../Components/Custom/MatoaSeries/MatoaSeries";
import Series from "./Series";
import MatoaButton from "../../Components/Custom/MatoaButton/MatoaButton";

function SeriesContainer() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="grid w-[80vw] grid-cols-3 gap-[2rem]">
          <Series />
          <Series />
          <Series />
        </div>
      </div>
      <div className="mt-5 flex justify-center ">
        <div className="flex w-[80vw] items-center gap-5">
          <hr className="flex-1 "></hr>
          <MatoaButton
            borderPrimary
            animateHover
            shadow
            textColor="primary"
            children="See More"
            name="see-more"
          />
          <hr className="flex-1 "></hr>
        </div>
      </div>
    </>
  );
}

export default SeriesContainer;
