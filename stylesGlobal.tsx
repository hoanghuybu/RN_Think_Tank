import { pixelSizeHorizontal, pixelSizeVertical } from "@utils";
import { blackColor, primaryColor, redEA5455 } from "constanst/Colors";
import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({
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
  },
  secondaryColor: {
    width: pixelSizeHorizontal(350),
    height: pixelSizeVertical(70),
    backgroundColor: redEA5455,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 6
  }
});
