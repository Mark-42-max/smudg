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
        <View
          style={[tw`flex-row justify-between pt-20 mx-auto`, { width: 300 }]}
        >
          <View
            style={{ width: 80, height: 80, backgroundColor: "#DDDDDD" }}
          ></View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={[tw`text-xl underline`, { fontFamily: "Inter_700Bold" }]}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[tw`mx-auto mt-32`, { width: 300 }]}>
          <Text style={[tw`text-4xl`, { fontFamily: "Inter_500Medium" }]}>
            Etiam ut molestie nisl, sed maximus velit.
          </Text>
          <Text style={[tw`pt-5 text-lg`, { fontFamily: "Inter_400Regular" }]}>
            Some funny and witty copy here.
          </Text>
        </View>
        <View
          style={[
            tw`justify-center items-center absolute`,
            { left: "28%", bottom: 20 },
          ]}
        >
          <Text style={[tw`text-xl`, { fontFamily: "Inter_500Medium" }]}>
            swipe up to begin
          </Text>
          <Image source={arrowUp} style={{ marginTop: 30 }} />
        </View>
      </View>
      <QuestionIntro />
    </Swiper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
