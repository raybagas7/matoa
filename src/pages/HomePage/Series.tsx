import React from "react";
import MatoaHeader from "../../Components/Custom/MatoaHeader/MatoaHeader";
import MatoaSeries from "../../Components/Custom/MatoaSeries/MatoaSeries";

function Series() {
  return (
    <div className="">
      <MatoaHeader title="Maple Series" />
      <div className="mt-[3rem] grid h-[72vh] grid-rows-3 text-secondary-text">
        <MatoaSeries discount={10} />
        <MatoaSeries />
        <MatoaSeries />
      </div>
    </div>
  );
}

export default Series;
