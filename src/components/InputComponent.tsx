import { pixelSizeVertical } from "@utils";
import { redColor, secondaryColor } from "constanst/Colors";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle
} from "react-native";

type Props = {
  text?: string | null;
  isRequired?: boolean;
  title?: string;
  placeholder?: string;
  handleChangeInput?: (
    txt: string | number | Date | any,
    keyInput: string
  ) => void;
  styleWrapper?: StyleProp<ViewStyle>;
  keyInput?: string;
  isNumberType?: boolean;
  editable?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  multiline?: boolean;
};

function InputComponent(props: Props) {
  const {
    title = "",
    isRequired,
    styleWrapper,
    isNumberType,
    placeholder = "",
    text = "",
    handleChangeInput,
    editable = true,
    keyInput,
    secureTextEntry,
    multiline
  } = props;
  return (
    <View style={[styles.inputWrapper, styleWrapper]}>
      {title && (
        <Text style={styles.txtTitle}>
          {title} {isRequired && <Text style={{ color: redColor }}>*</Text>}
        </Text>
      )}
      <TextInput
        editable={editable}
        multiline={multiline}
        style={styles.input}
        onChangeText={(txt) => {
          handleChangeInput(keyInput, txt);
        }}
        autoCorrect={false}
        value={text?.toString()}
        placeholderTextColor='#a4a5a6'
        keyboardType={isNumberType ? "numeric" : "default"}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
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
