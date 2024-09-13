import React from "react";
import { StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  title: string;
  onPress: () => void;
  styleContainer?: ViewStyle;
  styleTxt?: TextStyle;
  item?: React.ReactNode;
};

function ButtonComponents(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.styleContainer]}
      onPress={props.onPress}>
      {props.item}
      <Text style={[styles.txtTitle, props.styleTxt]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 100,
    margin: 10,
    padding: 10
  },
  txtTitle: {
    fontSize: 14
  }
});

export default ButtonComponents;
