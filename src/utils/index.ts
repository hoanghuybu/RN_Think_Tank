import { devicesSimulator } from "constanst/Data";
import { Based } from "constanst/DTOs";
import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const widthBaseScale = width / devicesSimulator.Iphone15And15Pro.width;
const heightBaseScale = height / devicesSimulator.Iphone15And15Pro.height;

export const deviceWidth = width;
export const deviceHeight = height;

function normalize(size: number, based: Based = Based.WIDTH) {
  const newSize =
    based === Based.HEIGTH ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
export const widthPixel = (size: number) => {
  return normalize(size, Based.WIDTH);
};
//for height  pixel
export const heightPixel = (size: number) => {
  return normalize(size, Based.HEIGTH);
};
//for font  pixel
export const fontPixel = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
export const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
export const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};
