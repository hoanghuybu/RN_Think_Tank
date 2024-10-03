import { localImages } from "@assets/localImages";
import ButtonComponents from "@components/ButtonComponent";
import InputComponent from "@components/InputComponent";
import NavigationHeader from "@components/NavigationHeader";
import Row from "@components/RowComponent";
import Separator from "@components/Separator";
import { deviceWidth, pixelSizeHorizontal, pixelSizeVertical } from "@utils";
import {
  grayD9D9D9,
  primaryColor,
  redEA5455,
  whiteColor
} from "constanst/Colors";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGlobal } from "../../../../stylesGlobal";

function Login() {
  const [input, setInput] = useState(null);

  // function
  const handleChangeInput = (
    keyInput: string,
    value: string | number | Date | any
  ) => {
    setInput((pre: any) => ({
      ...pre,
      [keyInput]: value
    }));
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationHeader theme='dark' />
      <View style={styles.container}>
        <View style={{ width: deviceWidth, alignItems: "center" }}>
          <Image style={styles.img} source={localImages().hello_1} />
        </View>
        <Separator height={10} />
        <Row direction='column' rowGap={pixelSizeVertical(20)}>
          <InputComponent
            multiline
            text={input?.fullName}
            keyInput='userName'
            handleChangeInput={handleChangeInput}
            title='Username'
            isRequired
          />
          <InputComponent
            text={input?.password}
            keyInput='password'
            handleChangeInput={handleChangeInput}
            title='Password'
            isRequired
            secureTextEntry
          />
        </Row>
        <Separator height={20} />
        <Row style={{ justifyContent: "space-between" }}>
          <Row colGap={5}>
            <View style={styles.boxWrapper}>
              <BouncyCheckbox
                size={20}
                fillColor={redEA5455}
                unFillColor={whiteColor}
                iconStyle={styles.boxIconStyle}
                innerIconStyle={styles.boxInnerIconStyle}
                onPress={(isChecked: boolean) => {}}
              />
            </View>
            <Text>Remember me</Text>
          </Row>
          <TouchableOpacity>
            <Text style={{ color: primaryColor }}>Forgot password?</Text>
          </TouchableOpacity>
        </Row>
      </View>
      <Separator height={60} />
      <Row colGap={15} full center>
        <View style={styles.line} />
        <Text style={{ color: grayD9D9D9, fontWeight: "500" }}> or </Text>
        <View style={styles.line} />
      </Row>
      <Separator height={40} />

      <Row full center>
        <ButtonComponents
          styleContainer={styles.btnGoogle}
          onPress={() => {}}
          title={"Continue with Google"}
          item={
            <Image
              style={styles.iconGoogle}
              source={localImages().google_icon}
            />
          }
        />
      </Row>
      <Row style={styles.btnSignUpWrapper} full center>
        <ButtonComponents
          styleTxt={{
            color: whiteColor,
            fontSize: pixelSizeVertical(16),
            fontWeight: "700"
          }}
          title='Sign in'
          onPress={() => {}}
          styleContainer={stylesGlobal.secondaryColor}
        />
      </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  img: {
    width: pixelSizeHorizontal(237),
    height: pixelSizeVertical(237)
  },
  boxIconStyle: { borderColor: redEA5455, borderRadius: 4 },
  boxInnerIconStyle: { borderWidth: 1, borderRadius: 4 },
  boxWrapper: { width: 20, height: 20 },
  line: {
    width: pixelSizeHorizontal(108),
    height: pixelSizeVertical(1.5),
    backgroundColor: grayD9D9D9
  },
  btnGoogle: {
    width: pixelSizeHorizontal(355),
    height: pixelSizeVertical(46),
    backgroundColor: whiteColor,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Shadow for Android
    elevation: 5
  },
  btnSignUpWrapper: {
    backgroundColor: whiteColor,
    position: "absolute",
    bottom: 0,
    height: pixelSizeVertical(132),
    alignItems: "flex-start",
    paddingTop: pixelSizeVertical(10),

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Shadow for Android
    elevation: 5
  },
  iconGoogle: {
    width: pixelSizeHorizontal(19),
    height: pixelSizeVertical(19),
    position: "absolute",
    left: pixelSizeHorizontal(85)
  }
});

export default Login;
