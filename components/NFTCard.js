import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={data.image}
          resizeMode={"cover"}
          style={styles.cardImage}
        />
      </View>
      <CircleButton imageUrl={assets.heart} right={10} top={10} />
      <SubInfo/>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 250,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
});

export default NFTCard;
