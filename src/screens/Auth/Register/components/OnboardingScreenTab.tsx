import Separator from "@components/Separator";
import {
  deviceWidth,
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical
} from "@utils";
import { darkBule2D4059 } from "constanst/Colors";
import { OnboardingDataDTO } from "constanst/DTOs";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";

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
      <Animated.Image
        style={[styles.onboardingImg, itemAnimationStyle]}
        source={props.item.image}
      />
      <Separator height={30} />
      <Text style={[styles.onboardingText, styles.onboardingTitle]}>
        {props.item.title}
      </Text>
      <Separator height={30} />
      <Text style={[styles.onboardingText, styles.onboardingContent]}>
        {props.item.content}
      </Text>
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
  }
});

export default OnboardingScreenTab;
