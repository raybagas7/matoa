import React from "react";

interface IMatoaSeries {
  discount?: number;
}

function MatoaSeries({ discount }: IMatoaSeries) {
  let valueAfterCut = 0;
  if (discount) {
    if (discount > 0) {
      valueAfterCut = 1280000 - (discount / 100) * 1280000;
      console.log(valueAfterCut);
    }
  }

  return (
    <div className="flex items-center gap-6">
      <div className="flex aspect-square h-[90%] items-center justify-center bg-secondary">
        <img
          src="/waykambas.png"
          className="h-[6.25rem] w-[6.25rem] object-contain"
        />
      </div>
      <div className="h-[90%] flex-1">
        <p className="text-[1.5rem]">Way Kambas Maple</p>
        <p className="line-through decoration-primary">
          {discount && "Rp. 1280000"}
        </p>
        <p className="text-[1.5rem] font-[500]">
          {discount ? "Rp. " + valueAfterCut : "Rp 1.280.000"}
        </p>
      </div>
    </div>
  );
}

export default MatoaSeries;
