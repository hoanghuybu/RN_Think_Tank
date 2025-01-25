import Row from "@components/RowComponent";
import Separator from "@components/Separator";
import { AntDesign } from "@expo/vector-icons";
import { whiteColor } from "constanst/Colors";
import { ItemCardGameDTO } from "constanst/DTOs";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: ItemCardGameDTO;
};

function ItemCardGame(props: Props) {
  const { imgBg, gameName, description, type, bgColor } = props.item;
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: bgColor }]}>
      <Image style={styles.img} source={imgBg} />
      <View style={styles.content}>
        <Text style={styles.txtGameName}>{gameName}</Text>
        {description && (
          <>
            <Separator height={5} />
            <Text style={styles.txtDescription}>{description}</Text>
          </>
        )}
        <Separator height={5} />
        {type?.length > 0 && (
          <>
            {type.map((item) => (
              <Row colGap={5}>
                <AntDesign name='check' size={18} color={whiteColor} />
                <Text
                  style={{
                    fontSize: 12,
                    color: whiteColor
                  }}>
                  {item}
                </Text>
              </Row>
            ))}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 188,
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 15
  },
  img: { resizeMode: "cover", width: "100%", flex: 50 },
  content: { flex: 50, padding: 10 },
  txtGameName: {
    fontSize: 14,
    fontWeight: "700",
    color: whiteColor
  },
  txtDescription: {
    fontSize: 10,
    color: whiteColor,
    fontWeight: "300"
  }
});

export default ItemCardGame;
