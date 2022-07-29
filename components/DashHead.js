import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import menu from "../assets/menu.png";
import meter from "../assets/meter.png";

const DashHead = () => {
  return (
    <View style={styles.box}>
      <View style={styles.meter}>
        <Image source={meter} />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontSize: 4.79,
            fontFamily: "Spartan_700Bold",
            left: 18,
            top: 15,
          }}
        >
          80%
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "Spartan_600SemiBold",
              color: "white",
              fontSize: 12,
              lineHeight: 14.4,
            }}
          >
            face profile
          </Text>
          <Text
            style={{
              color: "#C7C8C8",
              textAlign: "center",
              fontFamily: "Spartan_500Medium",
              fontSize: 9,
              lineHeight: 9.36,
            }}
          >
            complete
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.menuBtn}>
        <Image source={menu} />
      </TouchableOpacity>
    </View>
  );
};

export default DashHead;

const styles = StyleSheet.create({
  menuBtn: {
    width: 37,
    height: 37,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
    marginLeft: 20,
  },
  box: {
    position: "absolute",
    top: 50,
    right: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  meter: {
    width: 128,
    height: 38,
    borderRadius: 54,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
