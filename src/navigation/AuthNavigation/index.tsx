import { ROUTE_KEY } from "@navigation/routes";
import { createStackNavigator } from "@react-navigation/stack";
import { _screens } from "./_screens";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTE_KEY.welcome}>
      {_screens.map((sc, index) => (
        <Stack.Screen
          key={index}
          name={sc.route}
          component={sc.component}
          options={{
            headerShown: false
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
