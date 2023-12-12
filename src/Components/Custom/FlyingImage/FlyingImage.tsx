import React, { useState } from "react";

interface IFlyingImage {
  xItem?: number;
  yItem?: number;
  xTarget?: number;
  yTarget?: number;
  component: React.ReactNode;
}
function FlyingImage({ xItem, yItem, component }: IFlyingImage) {
  const leftOffset = `${xItem}px`;
  const topOffset = `${yItem}px`;
  const componentStyles: any = {
    position: "fixed",
    top: topOffset,
    left: leftOffset,
  };
  return (
    <div style={componentStyles} className={`z-50 animate-shrink_to_cart`}>
      {component}
    </div>
  );
}

export default FlyingImage;
