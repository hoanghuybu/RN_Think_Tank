import { localImages } from "@assets/localImages";
import ButtonComponents from "@components/ButtonComponent";
import InputComponent from "@components/InputComponent";
import NavigationHeader from "@components/NavigationHeader";
import Row from "@components/RowComponent";
import Separator from "@components/Separator";
import { navigate } from "@navigation/NavigationServices";
import { ROUTE_KEY } from "@navigation/routes";
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical } from "@utils";
import { gray818C9B, grayD9D9D9, whiteColor } from "constanst/Colors";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGlobal } from "../../../../stylesGlobal";

function Register() {
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

  console.log(input);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationHeader theme='dark' />
      <Separator height={30} />
      <View style={styles.content}>
        <View style={styles.titleWrapper}>
          <Text style={styles.txtTitle}>Create an account</Text>
          <Separator height={10} />
          <Text
            style={
              styles.txtSubTitle
            }>{`Please enter your full name, username, email \n address and password`}</Text>
        </View>
        <Separator height={30} />
        <Row direction='column' rowGap={pixelSizeVertical(20)}>
          <InputComponent
            multiline
            text={input?.fullName}
            keyInput='fullName'
            handleChangeInput={handleChangeInput}
            title='Full Name'
            isRequired
          />

          <InputComponent
            multiline
            text={input?.userName}
            keyInput='userName'
            handleChangeInput={handleChangeInput}
            title='User Name'
            isRequired
          />

          <InputComponent
            multiline
            text={input?.email}
            keyInput='email'
            handleChangeInput={handleChangeInput}
            title='Email'
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

        <Separator height={60} />
        <Row colGap={15} full center>
          <View style={styles.line} />
          <Text style={{ color: grayD9D9D9, fontWeight: "500" }}> or </Text>
          <View style={styles.line} />
        </Row>
        <Separator height={40} />
      </View>
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
          title='Sign up'
          onPress={() => navigate(ROUTE_KEY.login)}
          styleContainer={stylesGlobal.secondaryColor}
        />
      </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: pixelSizeHorizontal(15)
  },
  titleWrapper: {
    alignItems: "center"
  },
  txtTitle: {
    fontSize: fontPixel(24),
    fontWeight: "500"
  },
  txtSubTitle: {
    textAlign: "center",
    fontSize: fontPixel(12),
    color: gray818C9B
  },
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

export default Register;
