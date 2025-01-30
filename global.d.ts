import "react-native";

declare module "react-native" {
  interface ViewStyle {
    perspective?: number;
  }
}
