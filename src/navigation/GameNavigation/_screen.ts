import { ROUTE_KEY } from "@navigation/routes";
import FlipCardGame from "@screens/Games/Flipcard/FlipCardGame";
import MainScreen from "@screens/Games/Flipcard/MainScreen";
import { _screensDTO } from "constanst/DTOs";

export const _screens: _screensDTO[] = [
  {
    name: "",
    component: MainScreen,
    route: ROUTE_KEY.mainScreenFlipcard
  },
  {
    name: "",
    component: FlipCardGame,
    route: ROUTE_KEY.flipcard
  }
];
