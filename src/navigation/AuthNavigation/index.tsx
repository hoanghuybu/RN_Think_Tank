import { ROUTE_KEY } from "@navigation/routes";
import { createStackNavigator } from "@react-navigation/stack";
import { _screens } from "./_screens";

const { Navigator, Screen } = createStackNavigator();

function AuthNavigator() {
  return (
    <Navigator initialRouteName={ROUTE_KEY.welcome}>
      {_screens.map((sc, index) => (
        <Screen
          key={index}
          name={sc.route}
          component={sc.component}
          options={{
            headerShown: false
          }}
        />
      ))}
    </Navigator>
  );
}

export default AuthNavigator;
