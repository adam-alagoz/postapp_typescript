import React from "react";

type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType = Exclude<ShapeType, "cube">;

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

type ItemProps = {
  // color: `${ThemeType}-${ColorType}`;
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
};

const Shape = (props: ItemProps) => {
  const shape: ShapeType = "cube";
  const twoDShape: TwoDShapeType = "square";
  //   // const shape:ShapeType=// all the options will pop up. "cube" | "square" | "rectangle" | "triangle";
  //   //  const another:TwoDShapeType=//Only removed the 'cube' and others will pop up.
  return <div>Shape</div>;
};

export default Shape;
