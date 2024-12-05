import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@screens/Home/home";
import { ROUTE_KEY } from "./routes";

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTE_KEY.home}>
      <Stack.Screen
        name={ROUTE_KEY.home}
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
