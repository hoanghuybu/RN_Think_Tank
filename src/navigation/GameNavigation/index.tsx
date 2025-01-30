import { ROUTE_KEY } from "@navigation/routes";
import { createStackNavigator } from "@react-navigation/stack";
import { _screens } from "./_screen";

const { Navigator, Screen } = createStackNavigator();

function GameNavigator() {
  return (
    <Navigator
      initialRouteName={ROUTE_KEY.mainScreenFlipcard}
      screenOptions={{ headerShown: false }}>
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

export default GameNavigator;
