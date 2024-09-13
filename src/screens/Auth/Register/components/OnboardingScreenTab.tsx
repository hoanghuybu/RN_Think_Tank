import ButtonComponents from "@components/ButtonComponent";
import Separator from "@components/Separator";
import { navigate } from "@navigation/NavigationServices";
import { ROUTE_KEY } from "@navigation/routes";
import {
  deviceWidth,
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical
} from "@utils";
import { darkBule2D4059, whiteColor } from "constanst/Colors";
import { OnboardingDataDTO } from "constanst/DTOs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";
import { stylesGlobal } from "../../../../../stylesGlobal";

type Props = {
  item: OnboardingDataDTO;
  index: number;
  x?: any;
};

function OnboardingScreenTab(props: Props) {
  const itemAnimationStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      props.x.value,
      [
        (props.index - 1) * deviceWidth,
        props.index * deviceWidth,
        (props.index + 1) * deviceWidth
      ],
      [0, 1, 0],
      Extrapolation.CLAMP
    );
    const translateYAnimation = interpolate(
      props.x.value,
      [
        (props.index - 1) * deviceWidth,
        props.index * deviceWidth,
        (props.index + 1) * deviceWidth
      ],
      [100, 0, 100],
      Extrapolation.CLAMP
    );
    return {
      opacity: opacityAnimation,
      transform: [{ translateY: translateYAnimation }]
    };
  });

  return (
    <View style={[styles.tabContainer, { width: deviceWidth }]}>
      {props.index !== 3 && (
        <TouchableOpacity
          onPress={() => navigate(ROUTE_KEY.register)}
          style={styles.btnSkip}>
          <Text style={styles.txtSkip}>Skip</Text>
        </TouchableOpacity>
      )}
      <Animated.Image
        style={[
          props.index === 3 ? styles.logoTextImg : styles.onboardingImg,
          itemAnimationStyle
        ]}
        source={props.item.image}
      />
      <Separator height={30} />
      <Text style={[styles.onboardingText, styles.onboardingTitle]}>
        {props.item.title}
      </Text>
      <Separator height={30} />
      <Text style={[styles.onboardingText, styles.onboardingContent]}>
        {props.item?.content}
      </Text>
      {props.index === 3 && (
        <ButtonComponents
          styleTxt={{
            color: whiteColor,
            fontSize: pixelSizeVertical(16),
            fontWeight: "700"
          }}
          title='Continue'
          onPress={() => navigate(ROUTE_KEY.register)}
          styleContainer={stylesGlobal.secondaryColor}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    marginTop: pixelSizeVertical(50),
    alignItems: "center"
  },
  onboardingImg: {
    width: deviceWidth * 0.8,
    height: deviceWidth * 0.8
  },
  logoTextImg: {
    width: deviceWidth * 0.8,
    height: deviceWidth * 0.7
  },
  onboardingText: {
    color: darkBule2D4059,
    textAlign: "center"
  },
  onboardingTitle: {
    fontSize: fontPixel(18),
    fontWeight: "bold"
  },
  onboardingContent: {
    fontSize: fontPixel(14),
    opacity: 0.6,
    marginHorizontal: pixelSizeHorizontal(10)
  },
  btnSkip: {
    width: deviceWidth,
    paddingHorizontal: pixelSizeHorizontal(10)
  },
  txtSkip: { fontSize: pixelSizeVertical(16), textAlign: "right" }
});

export default OnboardingScreenTab;
