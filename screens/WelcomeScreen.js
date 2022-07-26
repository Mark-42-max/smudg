import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Swiper from "react-native-swiper";
import Q1 from "./Q1";
import swipeup from "../assets/swipeup.png";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          "radial-gradient(50% 50% at 50% 50%, rgba(196, 63, 83, 0.7) 0%, rgba(159, 140, 246, 0) 100%)",
      }}
    >
      <Header />
      <Swiper showsPagination={false} loop={false}>
        <View>
          <Text style={styles.wel}>
            tired of products that make you feel icky?
          </Text>
          <Text style={styles.create}>
            welcome to a world where you only find beauty & skincare products
            that are right for you!
          </Text>
        </View>
        <View>
          <Text style={styles.wel}>hey there stranger, i am smudg. </Text>
          <Text style={styles.create}>an all-knowing intelligent being.</Text>
          <Text style={styles.job}>
            my job is to get to know you and your skin - and find you the best
            matches from the billions of products out there
          </Text>
        </View>
        <Swiper showsPagination={false} loop={false} horizontal={false}>
          <View>
            <View style={{ marginTop: 50 }}>
              <Text style={styles.job}>
                over ten thousnd new skincare products are launched every day!
              </Text>
              <Text style={styles.job}>
                but you don’t need to worry about that anymore, i’ll sort
                through them and only recommend what’s best for you.{" "}
              </Text>
              <Text style={styles.me}>so that is me..</Text>
            </View>
            <View style={styles.swipeCont}>
              <Text style={styles.swipeText}>swipe up</Text>
              <Image source={swipeup} />
            </View>
          </View>
          <Q1 />
        </Swiper>
      </Swiper>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  wel: {
    fontSize: 40,
    fontFamily: "Spartan_400Regular",
    lineHeight: 44,
    marginTop: 70,
    marginLeft: 30,
  },
  create: {
    fontFamily: "Spartan_400Regular",
    fontSize: 18,
    lineHeight: 25.2,
    marginTop: 55,
    marginHorizontal: 30,
  },
  job: {
    fontFamily: "Spartan_400Regular",
    fontSize: 18,
    lineHeight: 25.2,
    marginHorizontal: 30,
    marginTop: 35,
  },
  me: {
    fontFamily: "Spartan_400Regular",
    fontSize: 18,
    lineHeight: 25.2,
    marginHorizontal: 30,
    marginTop: 70,
  },
  swipeCont: {
    position: "absolute",
    bottom: -250,
    left: "43%",
  },
  swipeText: {
    fontFamily: "Spartan_600SemiBold",
    fontSize: 14,
    lineHeight: 16.8,
    marginBottom: 10,
    marginLeft: -9,
  },
});
