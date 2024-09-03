import { ROUTE_KEY } from "@navigation/routes";
import Login from "@screens/Auth/Login";
import Register from "@screens/Auth/Register";
import OnboardingScreen from "@screens/Auth/Register/OnboardingScreen";
import WelcomeScreen from "@screens/Auth/WelcomeScreen";
import { _screensDTO } from "constanst/DTOs";

export const _screens: _screensDTO[] = [
  {
    name: "",
    component: WelcomeScreen,
    route: ROUTE_KEY.welcome
  },
  {
    name: "",
    component: Login,
    route: ROUTE_KEY.login
  },
  {
    name: "",
    component: Register,
    route: ROUTE_KEY.register
  },
  {
    name: "",
    component: OnboardingScreen,
    route: ROUTE_KEY.onboarding
  }
];
