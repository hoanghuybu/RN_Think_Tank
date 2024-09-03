import {
  CardStyleInterpolators,
  createStackNavigator
} from "@react-navigation/stack";
import { blackColor } from "constanst/Colors";
import AuthNavigator from "./AuthNavigation";

const { Navigator, Screen } = createStackNavigator<any>();

const defaultOption = ({}: any) => ({
  headerShown: false,
  headerTitleAllowFontScaling: false,
  headerTitleStyle: {
    color: blackColor,
    fontSize: 16
  },
  headerStyle: { shadowOpacity: 0, elevation: 0 },
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
});

function MainNavigator() {
  return (
    <Navigator screenOptions={defaultOption}>
      <Screen
        name='AuthNavigator'
        options={{
          headerShown: false
        }}
        component={AuthNavigator}
      />
    </Navigator>
  );
}

export default MainNavigator;
