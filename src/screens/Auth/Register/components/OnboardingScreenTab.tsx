import Separator from "@components/Separator";
import {
  deviceWidth,
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical
} from "@utils";
import { darkBule2D4059 } from "constanst/Colors";
import { OnboardingDataDTO } from "constanst/DTOs";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  item: OnboardingDataDTO;
  index: number;
};

function OnboardingScreenTab(props: Props) {
  return (
    <View style={[styles.tabContainer, { width: deviceWidth }]}>
      <Image style={styles.onboardingImg} source={props.item.image} />
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
