import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  full?: boolean;
  between?: boolean;
  around?: boolean;
  evenly?: boolean;
  start?: boolean;
  center?: boolean;
  end?: boolean;
  direction?: "row" | "column";
  wrap?: boolean;
  rowGap?: number;
  colGap?: number;
};

function Row(props: Props) {
  const {
    direction = "row",
    full,
    wrap = false,
    style,
    children,
    between,
    around,
    evenly,
    start,
    center,
    end,
    colGap = 0,
    rowGap = 0
  } = props;
  const rowStyle = [
    styles.container,
    between && styles.spaceBetween,
    around && styles.spaceAround,
    evenly && styles.spaceEvenly,
    start && styles.flexStart,
    center && styles.flexCenter,
    end && styles.flexEnd,
    {
      flexDirection: direction
    },
    style
  ];
  return (
    <View
      style={[
        {
          width: full ? "100%" : "auto",
          flexWrap: wrap ? "wrap" : "nowrap",
          rowGap: rowGap,
          columnGap: colGap
        },
        rowStyle,
        style
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  spaceAround: {
    justifyContent: "space-around"
  },
  spaceEvenly: {
    justifyContent: "space-evenly"
  },
  flexStart: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start"
  },
  flexCenter: {
    justifyContent: "center"
  },
  flexEnd: {
    justifyContent: "flex-end"
  }
});

export default Row;
