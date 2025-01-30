import { localImages } from "@assets/localImages";
import Row from "@components/RowComponent";
import { AntDesign } from "@expo/vector-icons";
import { goBack, navigate } from "@navigation/NavigationServices";
import { ROUTE_KEY } from "@navigation/routes";
import {
  deviceHeight,
  deviceWidth,
  pixelSizeHorizontal,
  pixelSizeVertical
} from "@utils";
import {
  darkBlue2D4059,
  primaryColor,
  redEA4335,
  redEA5455,
  secondaryColor,
  whiteColor
} from "constanst/Colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
function MainScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={localImages().img_bg_flipcard}
        style={styles.headerBackground}>
        <LinearGradient
          // Button Linear Gradient
          colors={["transparent", "rgba(0, 0, 0, 0.5)"]}
          style={styles.linearBgWrapper}>
          <Row between>
            <TouchableOpacity onPress={() => goBack()}>
              <AntDesign name='arrowleft' size={32} color={whiteColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: pixelSizeHorizontal(35),
                width: pixelSizeHorizontal(35),
                borderWidth: 3,
                borderColor: secondaryColor,
                backgroundColor: primaryColor,
                borderRadius: pixelSizeHorizontal(35),
                justifyContent: "center",
                alignItems: "center"
              }}>
              <AntDesign name='question' size={28} color={whiteColor} />
            </TouchableOpacity>
          </Row>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Flip Card Challenge</Text>
            <View style={styles.modeContainer}>
              <TouchableOpacity style={styles.modeButton}>
                <Text style={styles.modeText}>Visual Memory</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modeButton}>
                <Text style={styles.modeText}>Short-Term Memory</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      <ImageBackground
        source={localImages().comic_bg}
        style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigate(ROUTE_KEY.flipcard)}
          style={[styles.button, styles.playButton]}>
          <Text style={styles.playButtonText}>PLAY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.battleButton]}>
          <Text style={styles.buttonText}>1V1 BATTLE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.leaderboardButton]}>
          <Text style={styles.buttonLeaderboard}>LEADERBOARD</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    position: "absolute"
  },
  headerBackground: {
    height: pixelSizeVertical(400)
  },
  linearBgWrapper: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
    justifyContent: "space-between"
  },
  headerContent: {},
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20
  },
  modeContainer: {
    flexDirection: "row",
    gap: 10
  },
  modeButton: {
    backgroundColor: darkBlue2D4059,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8
  },
  modeText: {
    color: "#FFFFFF",
    fontSize: 14
  },
  buttonContainer: {
    height: deviceHeight - pixelSizeVertical(400) + 30,
    bottom: 30,
    padding: 20,
    paddingTop: pixelSizeVertical(100),
    gap: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden"
  },
  playButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    paddingVertical: 20,
    borderRadius: pixelSizeHorizontal(40),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 4
  },
  playButton: {
    backgroundColor: redEA4335,
    borderColor: whiteColor
  },
  battleButton: {
    backgroundColor: primaryColor,
    borderColor: whiteColor
  },
  leaderboardButton: {
    borderColor: redEA5455,
    backgroundColor: "transparent"
  },
  buttonText: {
    color: whiteColor,
    fontSize: 20,
    fontWeight: "900"
  },
  buttonLeaderboard: {
    color: redEA5455,
    fontSize: 20,
    fontWeight: "900"
  }
});

export default MainScreen;
