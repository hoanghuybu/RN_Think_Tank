import { ChartSVG, HomeSVG, ProfileSVG, UserSVG } from "@assets/icons";
import { StarSVG } from "@assets/icons/StarSVG";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  blackColor,
  grayBCBCBC,
  secondaryColor,
  whiteColor
} from "constanst/Colors";
import { Platform, Text, View } from "react-native";
import HomeNavigator from "./HomeNavigation";
import { ROUTE_KEY } from "./routes";

const { Navigator, Screen } = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: blackColor,
          height: Platform.OS == "android" ? 80 : 100
        },
        tabBarActiveTintColor: secondaryColor,
        tabBarInactiveTintColor: blackColor
      }}>
      <Screen
        name={ROUTE_KEY.home}
        component={HomeNavigator}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{ color: focused ? secondaryColor : grayBCBCBC }]}>
              {"Home"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <HomeSVG
              size={size}
              focused={focused}
              color={focused ? secondaryColor : grayBCBCBC}
            />
          ),
          headerShown: false
        }}
      />
      <Screen
        name={ROUTE_KEY.memory}
        component={() => <View />}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{ color: focused ? secondaryColor : grayBCBCBC }]}>
              {"Memory"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <ChartSVG
              size={size}
              focused={focused}
              color={focused ? secondaryColor : grayBCBCBC}
            />
          ),
          headerShown: false
        }}
      />
      <Screen
        name={ROUTE_KEY.account}
        component={() => <View />}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={[
                // styles.labelStyle,
                { color: focused ? secondaryColor : grayBCBCBC }
              ]}>
              {"Account"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <ProfileSVG
              size={size}
              focused={focused}
              color={focused ? secondaryColor : grayBCBCBC}
            />
          ),
          headerShown: false
        }}
      />
      <Screen
        name={ROUTE_KEY.achieve}
        component={() => <View />}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{ color: focused ? secondaryColor : grayBCBCBC }]}>
              {"Achieve"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <StarSVG
              size={size}
              focused={focused}
              color={focused ? secondaryColor : grayBCBCBC}
            />
          ),
          headerShown: false
        }}
      />
      <Screen
        name={ROUTE_KEY.friends}
        component={() => <View />}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{ color: focused ? secondaryColor : grayBCBCBC }]}>
              {"Friends"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <UserSVG
              size={size}
              focused={focused}
              color={focused ? secondaryColor : whiteColor}
            />
          ),
          headerShown: false
        }}
      />
    </Navigator>
  );
}

export default AppNavigator;
