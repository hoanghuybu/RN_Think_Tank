import {
  CardStyleInterpolators,
  createStackNavigator
} from "@react-navigation/stack";
import Login from "@screens/Auth/Login";
import HomeScreen from "@screens/home";
import { blackColor } from "constanst/Colors";
import { ROUTE_KEY } from "./routes";

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
        name={ROUTE_KEY.login}
        component={Login}
        options={{ gestureEnabled: false }}
      />
      <Screen
        name={ROUTE_KEY.home}
        component={HomeScreen}
        options={{ gestureEnabled: false }}
      />
    </Navigator>
  );
}

export default MainNavigator;
