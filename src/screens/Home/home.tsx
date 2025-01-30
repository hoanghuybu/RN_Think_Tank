import { NotifySVG } from "@assets/icons";
import { localImages } from "@assets/localImages";
import Row from "@components/RowComponent";
import Separator from "@components/Separator";
import {
  deviceHeight,
  deviceWidth,
  fontPixel,
  pixelSizeHorizontal
} from "@utils";
import {
  darkBlue2D4059,
  redEA5455,
  secondaryColor,
  whiteColor
} from "constanst/Colors";
import { ListItemCardGameData } from "constanst/Data";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ItemCardGame from "./components/ItemCardGame";

function HomeScreen() {
  return (
    <ImageBackground
      resizeMode='cover'
      style={styles.bgImg}
      source={localImages().main_bg}>
      <Row style={styles.infoWrapper}>
        <Row colGap={10}>
          <Image source={localImages().avatar_person} style={styles.avatar} />
          <View style={{ rowGap: 10 }}>
            <Text style={styles.textWelcome}>Have a nice day 👋</Text>
            <Text style={styles.textUser}>Bao Long Nguyen</Text>
          </View>
        </Row>
        <NotifySVG color={secondaryColor} />
      </Row>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 160 }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.banner}>
            <Image
              source={localImages().home_banner_decor}
              style={styles.imgDecor1}
            />
            <Image
              source={localImages().home_banner_decor}
              style={styles.imgDecor2}
            />
            <View style={styles.bannerContentContainer}>
              <Text style={styles.textBanner}>
                {"Play game together with \n your friends now!"}
              </Text>
              <TouchableOpacity style={styles.btnFindFriends}>
                <Text style={styles.textFindFriends}>Find Friends</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Separator height={20} />
          <View style={styles.gameWrapper}>
            <Text style={styles.textTitle}>Memory Boot Camp</Text>
            <Text style={styles.textDescription}>
              Mini-games designed to exercise and enhance your memory. Through
              challenging gameplay, push your memory skills to the limit.
            </Text>
          </View>
          <Separator height={20} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={ListItemCardGameData}
            horizontal={true}
            renderItem={({ item }) => <ItemCardGame item={item} />}
          />
          <Separator height={20} />
          <View style={styles.gameWrapper}>
            <Text style={styles.textTitle}>Memory Contest</Text>
            <Text style={styles.textDescription}>
              Exciting competitions to challenge yourself against opponents in
              memory recall. This is an engaging arena to accelerate on the
              journey to becoming a “Memory master”.
            </Text>
          </View>
          <Separator height={20} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[1, 2]}
            horizontal={true}
            renderItem={() => (
              <View
                style={{
                  height: 192,
                  width: deviceWidth - 20,
                  borderRadius: 20,
                  overflow: "hidden",
                  marginRight: 5
                }}>
                <Image
                  style={{ resizeMode: "repeat" }}
                  source={localImages().img_contest}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    width: deviceWidth,
    height: deviceHeight
  },
  infoWrapper: {
    width: "100%",
    height: 150,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    paddingHorizontal: pixelSizeHorizontal(10),
    justifyContent: "space-between"
  },
  contentWrapper: {
    width: deviceWidth,
    height: "auto",
    paddingHorizontal: pixelSizeHorizontal(10)
  },
  banner: {
    width: "100%",
    height: 170,
    backgroundColor: darkBlue2D4059,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: 30
  },
  imgDecor1: {
    width: 461,
    height: 277,
    resizeMode: "contain",
    position: "absolute",
    bottom: -62,
    right: -175
  },
  imgDecor2: {
    width: 461,
    height: 277,
    resizeMode: "contain",
    position: "absolute",
    top: -110,
    left: -205
  },
  avatar: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 50
  },
  textWelcome: {
    fontSize: fontPixel(14),
    fontWeight: "300",
    color: whiteColor
  },
  textUser: {
    fontSize: fontPixel(16),
    fontWeight: "700",
    color: whiteColor
  },
  bannerContentContainer: {
    rowGap: 20
  },
  textBanner: {
    fontSize: fontPixel(16),
    color: whiteColor,
    fontWeight: "600"
  },
  btnFindFriends: {
    backgroundColor: redEA5455,
    borderRadius: 20,
    width: pixelSizeHorizontal(120),
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textFindFriends: {
    fontSize: fontPixel(14),
    color: whiteColor,
    fontWeight: "600"
  },
  gameWrapper: {},
  textTitle: {
    fontSize: fontPixel(18),
    fontWeight: "700",
    color: whiteColor
  },
  textDescription: {
    fontSize: fontPixel(12),
    fontWeight: "300",
    color: whiteColor
  }
});

export default HomeScreen;
