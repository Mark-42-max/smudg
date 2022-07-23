import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import arrowUp from "../assets/arrowUp.png";
import QuestionIntro from "./QuestionIntro";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Swiper
      horizontal={false}
      loop={false}
      showsPagination={false}
      style={{ backgroundColor: "#E5E5E5" }}
    >
      <View style={[tw`flex-1`, { backgroundColor: "#E5E5E5" }]}>
        <View style={styles.topContainer}>
          <View style={styles.box}></View>
          <TouchableOpacity onPress={() => navigation.navigate("GoogleLogin")}>
            <Text
              style={[tw`text-xl underline`, { fontFamily: "Inter_700Bold" }]}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.midContainer}>
          <Text style={[tw`text-4xl`, { fontFamily: "Inter_500Medium" }]}>
            Etiam ut molestie nisl, sed maximus velit.
          </Text>
          <Text style={[tw`pt-4 text-lg`, { fontFamily: "Inter_400Regular" }]}>
            Some funny and witty copy here.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={[tw`text-xl`, { fontFamily: "Inter_500Medium" }]}>
            swipe up to begin
          </Text>
          <Image source={arrowUp} style={styles.img} />
        </View>
      </View>
      <QuestionIntro />
    </Swiper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 48,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#DDDDDD",
  },
  midContainer: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 145,
  },
  bottomContainer: {
    position: "absolute",
    left: "28%",
    bottom: 67,
    alignItems: "center",
  },
  img: {
    marginTop: 24,
    width: 21,
    height: 18,
    resizeMode: "contain",
  },
});
