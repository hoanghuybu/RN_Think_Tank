import { localImages } from "@assets/localImages";
import ButtonComponents from "@components/ButtonComponent";
import { navigate } from "@navigation/NavigationServices";
import { ROUTE_KEY } from "@navigation/routes";
import { pixelSizeHorizontal, pixelSizeVertical } from "@utils";
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
            styleTxt={{
              color: whiteColor,
              fontSize: pixelSizeVertical(16),
              fontWeight: "700"
            }}
            title='Get started'
            onPress={() => navigate(ROUTE_KEY.onboarding)}
            styleContainer={styles.primaryColor}
          />
          <ButtonComponents
            styleTxt={{
              color: primaryColor,
              fontSize: pixelSizeVertical(16),
              fontWeight: "700"
            }}
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
    width: pixelSizeHorizontal(300),
    height: pixelSizeVertical(150)
  },
  logoText: {
    width: 300,
    height: 175
  },
  primaryColor: {
    width: pixelSizeHorizontal(350),
    height: pixelSizeVertical(70),
    backgroundColor: primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 6
  },
  outlinePrimaryColor: {
    width: pixelSizeHorizontal(350),
    height: pixelSizeVertical(70),
    backgroundColor: blackColor,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: pixelSizeVertical(10),
    borderRadius: pixelSizeVertical(6),
    borderWidth: pixelSizeVertical(2),
    borderColor: primaryColor
  }
});

export default WelcomeScreen;
