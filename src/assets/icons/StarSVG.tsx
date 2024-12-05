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
const StarSVG = (props: Props) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none'>
    <Path
      fill={props.color}
      d='M18.665 14.917c-.27.261-.394.64-.332 1.01l.926 5.125c.078.434-.105.874-.469 1.125-.356.26-.83.292-1.219.084l-4.613-2.407a1.178 1.178 0 0 0-.521-.136h-.282a.846.846 0 0 0-.281.093L7.258 22.23c-.228.115-.487.155-.74.115a1.158 1.158 0 0 1-.927-1.324l.927-5.125a1.166 1.166 0 0 0-.332-1.02L2.426 11.23a1.124 1.124 0 0 1-.28-1.177 1.17 1.17 0 0 1 .925-.781L8.25 8.52c.393-.04.74-.28.916-.634l2.281-4.678c.055-.104.124-.2.209-.28l.094-.074a.7.7 0 0 1 .167-.135l.114-.042.177-.073h.438c.392.04.737.275.917.625l2.312 4.656c.166.341.49.578.864.635l5.177.75c.438.063.803.366.948.782.137.418.019.876-.302 1.177l-3.896 3.688Z'
    />
  </Svg>
);
export { StarSVG };
