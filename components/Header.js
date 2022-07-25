import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import cloud from "../assets/cloud.png";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topCont}>
      <Image source={cloud} />
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate("GoogleLogin")}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    alignItems: "center",
    marginTop: 40,
  },
  login: {
    backgroundColor: "#C3FA4F",
    width: 89,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
  },
  loginText: {
    fontFamily: "Spartan_600SemiBold",
    fontSize: 14,
  },
});
