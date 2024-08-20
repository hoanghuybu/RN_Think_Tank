import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: any, key?: string) {
  if (key) {
    navigationRef.current?.navigate({ key, name, params });
    return;
  }
  navigationRef.current?.navigate(name, params);
}
