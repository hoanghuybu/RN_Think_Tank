import {
  CardStyleInterpolators,
  createStackNavigator
} from "@react-navigation/stack";
import { blackColor } from "constanst/Colors";
import AppNavigator from "./AppNavigation";
import AuthNavigator from "./AuthNavigation";

const { Navigator, Screen, Group } = createStackNavigator<any>();

const defaultOption = ({}: any) => ({
  headerShown: false,
  headerTitleAllowFontScaling: false,
  headerTitleStyle: {
    color: blackColor,
    fontSize: 16
  },
  headerStyle: { shadowOpacity: 0, elevation: 0 },
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: {
    backgroundColor: "transparent"
  }
});

function MainNavigator() {
  const auth = true;
  return (
    <Navigator screenOptions={defaultOption}>
      {auth ? (
        <Screen
          name='MainNavigator'
          options={{
            headerShown: false
          }}
          component={AppNavigator}
        />
      ) : (
        <Screen
          name='AuthNavigator'
          options={{
            headerShown: false
          }}
          component={AuthNavigator}
        />
      )}
    </Navigator>
  );
}

export default MainNavigator;
