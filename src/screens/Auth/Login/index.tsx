import { navigate } from "@navigation/NavigationServices";
import { ROUTE_KEY } from "@navigation/routes";
import { blackColor } from "constanst/Colors";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function Login() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: blackColor }}>
      <View style={{ flex: 1, backgroundColor: blackColor }}>
        <Text style={{ color: "red" }}>Login Screen</Text>
        <TouchableOpacity onPress={() => navigate(ROUTE_KEY.home)}>
          <Text style={{ color: "red" }}>Login button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
