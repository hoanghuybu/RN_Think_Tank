import { localImages } from "@assets/localImages";
import Row from "@components/RowComponent";
import { AntDesign } from "@expo/vector-icons";
import { goBack } from "@navigation/NavigationServices";
import {
  deviceHeight,
  deviceWidth,
  pixelSizeHorizontal,
  pixelSizeVertical
} from "@utils";
import { primaryColor, secondaryColor, whiteColor } from "constanst/Colors";
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
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.button}>
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
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>PLAY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1V1 BATTLE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LEADERBOARD</Text>
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
    height: pixelSizeVertical(400),
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
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20
  },
  modeText: {
    color: "#FFFFFF",
    fontSize: 14
  },
  buttonContainer: {
    height: deviceHeight - pixelSizeVertical(400) + 30,
    bottom: 30,
    padding: 20,
    justifyContent: "center",
    gap: 15,
    backgroundColor: "red",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden"
  },
  playButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  playButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#FF8157",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default MainScreen;
