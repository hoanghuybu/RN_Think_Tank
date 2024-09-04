import { pixelSizeVertical } from "@utils";
import { OnboardingData } from "constanst/Data";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingScreenTab from "./components/OnboardingScreenTab";
import PaginationIndicator from "./components/PaginationIndicator";

function OnboardingScreen() {
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    }
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.FlatList
        onScroll={onScroll}
        keyExtractor={(item) => item.id}
        data={OnboardingData}
        renderItem={({ item, index }) => {
          return <OnboardingScreenTab item={item} index={index} x={x} />;
        }}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />

      <PaginationIndicator data={OnboardingData} x={x} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },

  txtSkip: { fontSize: pixelSizeVertical(16), textAlign: "right" }
});

export default OnboardingScreen;
