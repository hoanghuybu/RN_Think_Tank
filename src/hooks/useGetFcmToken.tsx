import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import Toast from "react-native-toast-message";

const useGetFcmToken = () => {
  useEffect(() => {
    const fecthFcmToken = async () => {
      let authorizationStatus = null;
      if (Platform.OS === "android" && Platform.Version >= 33) {
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );
        if (status === PermissionsAndroid.RESULTS.GRANTED) {
          authorizationStatus = messaging.AuthorizationStatus.AUTHORIZED;
        }
      } else {
        authorizationStatus = await messaging().requestPermission();
      }
      const enabled =
        authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL;
      console.log(authorizationStatus);
      if (!enabled) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Permission denied"
        });
        return;
      }
      const token = await messaging()
        .getToken()
        .catch((error: any) => {
          console.log(error);
        });
      if (token) {
        // await AsyncStorage.setItem(Key.FCM_TOKEN, token);
        console.log(token);
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Token not found"
        });
      }
    };
    fecthFcmToken();
  }, []);
};

export default useGetFcmToken;
