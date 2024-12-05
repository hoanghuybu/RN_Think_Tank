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
const ProfileSVG = (props: Props) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none'>
    <Path
      fill={props.color}
      fillRule='evenodd'
      d='M18.015 7.595a5.494 5.494 0 0 1-5.515 5.512 5.495 5.495 0 0 1-5.514-5.512A5.494 5.494 0 0 1 12.5 2.083a5.493 5.493 0 0 1 5.515 5.512ZM12.5 22.917c-4.518 0-8.333-.735-8.333-3.568 0-2.835 3.839-3.543 8.333-3.543 4.52 0 8.333.735 8.333 3.568 0 2.834-3.838 3.543-8.333 3.543Z'
      clipRule='evenodd'
    />
  </Svg>
);
export { ProfileSVG };
