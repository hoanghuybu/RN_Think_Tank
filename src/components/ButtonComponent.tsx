import { Text, TextStyle, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  title: string;
  onPress: () => void;
  styleContainer?: ViewStyle;
  styleTxt?: TextStyle;
};

function ButtonComponents(props: Props) {
  return (
    <TouchableOpacity style={props.styleContainer} onPress={props.onPress}>
      <Text style={props.styleTxt}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponents;
