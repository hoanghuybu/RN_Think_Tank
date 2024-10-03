import { ExpoConfig } from "@expo/config";
import dotenv from "dotenv";

dotenv.config();

const envs = {
  development: {
    EXPO_PUBLIC_APP_VARIANT: "development",
    EXPO_PUBLIC_APP_NAME: "THINK TANK",
    EXPO_PUBLIC_BUNDLE_ID: "com.hoanghuybu.thinktank.dev"
  },
  staging: {
    EXPO_PUBLIC_APP_VARIANT: "staging",
    EXPO_PUBLIC_APP_NAME: "THINK TANK",
    EXPO_PUBLIC_BUNDLE_ID: "com.hoanghuybu.thinktank.staging"
  },
  production: {
    EXPO_PUBLIC_APP_VARIANT: "production",
    EXPO_PUBLIC_APP_NAME: "THINK TANK",
    EXPO_PUBLIC_BUNDLE_ID: "com.hoanghuybu.thinktank.prod"
  }
};

const { EXPO_PUBLIC_APP_VARIANT, EXPO_PUBLIC_APP_NAME, EXPO_PUBLIC_BUNDLE_ID } =
  envs[(process.env.NODE_ENV as keyof typeof envs) || "production"];

if (EXPO_PUBLIC_BUNDLE_ID === null) {
  throw new Error("EXPO_PUBLIC_BUNDLE_ID is not defined");
}

export default (): ExpoConfig => ({
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  name: EXPO_PUBLIC_APP_NAME,
  slug: "think-tank",
  version: "1.0.0",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: ["**/*"],
  web: {
    favicon: "./assets/favicon.png"
  },
  owner: "hoanghuybu",
  runtimeVersion: "1.0.0",
  ios: {
    bundleIdentifier: EXPO_PUBLIC_BUNDLE_ID,
    buildNumber: "1",
    infoPlist: {
      CFBundleAllowMixedLocalizations: true
    }
  },
  android: {
    versionCode: 1,
    package: EXPO_PUBLIC_BUNDLE_ID,
    userInterfaceStyle: "automatic"
  }
});
