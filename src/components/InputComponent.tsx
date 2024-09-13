import { pixelSizeVertical } from "@utils";
import { redColor, secondaryColor } from "constanst/Colors";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  isRequired?: boolean;
  title?: string;
};

function InputComponent(props: Props) {
  const { title, isRequired } = props;
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");
  return (
    <View style={styles.inputWrapper}>
      {title && (
        <Text style={styles.txtTitle}>
          {title} {isRequired && <Text style={{ color: redColor }}>*</Text>}
        </Text>
      )}

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: "100%"
  },
  input: {
    height: pixelSizeVertical(40),
    borderBottomWidth: 1,
    borderColor: secondaryColor
  },
  txtTitle: {
    fontSize: 12
  }
});

export default InputComponent;
