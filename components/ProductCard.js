import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import gel from "../assets/gel.png";

const ProductCard = () => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.topCont}>
        <Image source={gel} />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainCont: {
    width: 154,
    height: 330,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 40,
  },
  topCont: {
    height: 178,
    borderBottomWidth: 1,
    backgroundColor: "#E9E9E9",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
