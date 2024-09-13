import {
  CommonActions,
  NavigationContainerRef
} from "@react-navigation/native";
import React from "react";

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: any, key?: string) {
  if (key) {
    navigationRef.current?.navigate({ key, name, params });
    return;
  }
  navigationRef.current?.navigate(name, params);
}

export function navigateAndReset(
  routes: { name: string; params?: any }[],
  index: number
) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes
    })
  );
}

export function goBack() {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  } else {
    navigateAndReset([{ name: "Home" }], 0);
  }
}
