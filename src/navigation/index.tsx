import {
  DefaultTheme,
  NavigationContainer,
  NavigationState
} from "@react-navigation/native";
import { whiteColor } from "constanst/Colors";
import { StatusBar } from "react-native";
import { navigationRef } from "./NavigationServices";
import MainNavigator from "./RootStackNavigator";

function ScreenTracking(state: NavigationState | undefined): void {
  if (state) {
    const route = state?.routes[state.index];
    if (route.state) {
      return ScreenTracking(route?.state as any);
    }
    return console.log(`=============== NAVIGATING TO > ${route?.name}`);
  }
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: whiteColor
  }
};

function MainNavigation() {
  return (
    <NavigationContainer
      theme={MyTheme}
      ref={navigationRef}
      onStateChange={ScreenTracking}>
      <StatusBar barStyle='dark-content' />
      <MainNavigator />
    </NavigationContainer>
  );
}

export default MainNavigation;
