import { OnboardingData } from "constanst/Data";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingScreenTab from "./components/OnboardingScreenTab";

function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={OnboardingData}
        renderItem={({ item, index }) => {
          return <OnboardingScreenTab item={item} index={index} />;
        }}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

export default OnboardingScreen;
