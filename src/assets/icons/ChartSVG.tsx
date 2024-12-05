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
const ChartSVG = (props: Props) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none'>
    <Path
      fill={props.color}
      fillRule='evenodd'
      d='M7.636 2.084h9.728c3.543 0 5.543 2.01 5.553 5.552v9.729c0 3.542-2.01 5.552-5.553 5.552H7.636c-3.543 0-5.552-2.01-5.552-5.552v-9.73c0-3.542 2.01-5.551 5.552-5.551Zm4.915 16.52a.861.861 0 0 0 .865-.78V7.208a.85.85 0 0 0-.395-.823.875.875 0 0 0-1.334.823v10.614a.878.878 0 0 0 .864.782Zm4.793 0a.878.878 0 0 0 .865-.78v-3.417a.874.874 0 0 0-1.333-.823.84.84 0 0 0-.396.823v3.416a.861.861 0 0 0 .864.782Zm-8.782-.78a.861.861 0 0 1-.865.78.86.86 0 0 1-.863-.78v-7.199a.876.876 0 0 1 .406-.823.857.857 0 0 1 .917 0c.28.178.437.5.405.823v7.198Z'
      clipRule='evenodd'
    />
  </Svg>
);
export { ChartSVG };
