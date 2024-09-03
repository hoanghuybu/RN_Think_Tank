import { localImages } from "@assets/localImages";
import ButtonComponents from "@components/ButtonComponent";
import { navigate } from "@navigation/NavigationServices";
import { ROUTE_KEY } from "@navigation/routes";
import { blackColor, primaryColor, whiteColor } from "constanst/Colors";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

function WelcomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <View
          style={{
            width: "100%",
            alignItems: "center"
          }}>
          <Image source={localImages().logo_image} style={styles.logoImage} />
          <Image source={localImages().logo_text} style={styles.logoText} />
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center"
          }}>
          <ButtonComponents
            styleTxt={{ color: whiteColor, fontSize: 16, fontWeight: "700" }}
            title='Get started'
            onPress={() => navigate(ROUTE_KEY.onboarding)}
            styleContainer={styles.primaryColor}
          />
          <ButtonComponents
            styleTxt={{ color: primaryColor, fontSize: 16, fontWeight: "700" }}
            title='Already a member? Sign in'
            onPress={() => navigate(ROUTE_KEY.login)}
            styleContainer={styles.outlinePrimaryColor}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: blackColor, justifyContent: "center" },
  logoImage: {
    width: 300,
    height: 150
  },
  logoText: {
    width: 300,
    height: 175
  },
  primaryColor: {
    width: 350,
    height: 70,
    backgroundColor: primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 6
  },
  outlinePrimaryColor: {
    width: 350,
    height: 70,
    backgroundColor: blackColor,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: primaryColor
  }
});

export default WelcomeScreen;
