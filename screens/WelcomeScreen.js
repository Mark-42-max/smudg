import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#C43F53", "#9F8CF6"]}
      style={{ flex: 1 }}
    ></LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
