import { AntDesign } from "@expo/vector-icons";
import { goBack } from "@navigation/NavigationServices";
import {
  deviceWidth,
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical
} from "@utils";
import { blackColor, whiteColor } from "constanst/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  theme: "light" | "dark";
  title?: string;
  rightIcon?: any;
};

function NavigationHeader(props: Props) {
  const { theme, title, rightIcon } = props;
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => goBack()}>
        <AntDesign
          name='arrowleft'
          size={32}
          color={theme === "dark" ? blackColor : whiteColor}
        />
      </TouchableOpacity>
      {title && <Text style={styles.txtTitle}>{title}</Text>}
      {rightIcon ? (
        <TouchableOpacity>{rightIcon}</TouchableOpacity>
      ) : (
        //Empty View
        <View style={{ width: pixelSizeHorizontal(32) }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    width: deviceWidth,
    height: pixelSizeVertical(40),
    paddingHorizontal: pixelSizeVertical(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txtTitle: {
    fontSize: fontPixel(18),
    fontWeight: "600"
  }
});

export default NavigationHeader;
