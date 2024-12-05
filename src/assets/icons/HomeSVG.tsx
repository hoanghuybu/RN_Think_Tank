import * as React from "react";
import Svg, { Path } from "react-native-svg";

declare module "react-native-svg" {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
}

type Props = {
  color: string;
  focused: boolean;
  size: number;
};
const HomeSVG = (props: Props) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none'>
    <Path
      fill={props.color}
      d='M9.515 21.639v-3.185c0-.813.664-1.473 1.483-1.473h2.994c.394 0 .77.156 1.049.432.278.276.434.65.434 1.04v3.186c-.002.338.131.663.371.903s.567.375.907.375h2.043a3.605 3.605 0 0 0 2.545-1.041 3.552 3.552 0 0 0 1.055-2.524v-9.074c0-.765-.342-1.49-.933-1.982l-6.948-5.509a3.227 3.227 0 0 0-4.114.074l-6.79 5.435a2.577 2.577 0 0 0-1.007 1.982v9.065c0 1.973 1.612 3.574 3.6 3.574H8.2c.708 0 1.282-.567 1.288-1.269l.027-.01Z'
    />
  </Svg>
);
export { HomeSVG };
