import { pixelSizeVertical } from "@utils";
import React from "react";
import { StyleSheet, View } from "react-native";

function Separator({ height, style }: { height: number; style?: any }) {
  return (
    <View
      style={[
        styles.separator,
        { height: pixelSizeVertical(height), ...style }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: pixelSizeVertical(1),
    width: "100%"
  }
});

export default Separator;
