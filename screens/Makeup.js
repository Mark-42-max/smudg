import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import ProductCard from "../components/ProductCard";

const Makeup = () => {
  return (
    <ScrollView>
      <View style={styles.cardCont}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>
    </ScrollView>
  );
};

export default Makeup;

const styles = StyleSheet.create({
  cardCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 10,
  },
});
