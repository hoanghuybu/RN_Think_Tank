import { deviceWidth, pixelSizeHorizontal, pixelSizeVertical } from "@utils";
import { darkBule2D4059 } from "constanst/Colors";
import { OnboardingDataDTO } from "constanst/DTOs";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";

type Props = {
  data: OnboardingDataDTO[];
  x?: any;
};

function PaginationIndicator(props: Props) {
  return (
    <View style={styles.paginationWrapper}>
      {props.data.map((_, i) => {
        const indicatorAnimationStyle = useAnimatedStyle(() => {
          const opacityAnimation = interpolate(
            props.x.value,
            [(i - 1) * deviceWidth, i * deviceWidth, (i + 1) * deviceWidth],
            [0.4, 1, 0.4],
            Extrapolation.CLAMP
          );
          return {
            opacity: opacityAnimation
          };
        });
        return (
          <Animated.View
            key={i}
            style={[styles.indicator, indicatorAnimationStyle]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    width: pixelSizeHorizontal(12),
    height: pixelSizeVertical(12),
    borderRadius: pixelSizeHorizontal(35),
    backgroundColor: darkBule2D4059
  },
  paginationWrapper: {
    flexDirection: "row",
    columnGap: 8,
    width: "100%",
    marginVertical: pixelSizeVertical(10),
    justifyContent: "center"
  }
});

export default PaginationIndicator;
