import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import cross from "../assets/cross.png";
import arr from "../assets/arr.png";
import face from "../assets/face.png";
import scan from "../assets/scan.png";
import bg1 from "../assets/bg1.png";
import { useNavigation } from "@react-navigation/native";

const FaceProfile = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bg1} resizeMode="cover">
      <TouchableOpacity
        style={styles.cross}
        onPress={() => navigation.goBack()}
      >
        <Image source={cross} />
      </TouchableOpacity>
      <View style={styles.topCont}>
        <View style={styles.qmark}>
          <Text style={styles.qtext}>?</Text>
        </View>
        <Image source={arr} />
        <Image source={face} />
        <Image source={arr} />
        <View style={styles.qmark}>
          <Text style={styles.qtext}>✓</Text>
        </View>
      </View>
      <Text style={styles.text1}>
        i have so many oh-my-gawd perfect-for-you recommendations.
      </Text>
      <Text style={styles.text2}>
        but to be honest, i can do better, much better, if you could do a face
        scan and complete your profile. what say you?
      </Text>
      <TouchableOpacity style={styles.scanBtn}>
        <Image source={scan} />
        <View>
          <Text
            style={{
              color: "white",
              fontFamily: "Spartan_600SemiBold",
              fontSize: 16,
              lineHeight: 19.2,
            }}
          >
            Analyse my profile
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Spartan_400Regular",
              fontSize: 10,
              lineHeight: 12,
              marginTop: 2,
            }}
          >
            (take 30 seconds)
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bott}>
        <Text
          style={{
            fontFamily: "Spartan_600SemiBold",
            fontSize: 14,
            lineHeight: 16.8,
          }}
        >
          can I take the quiz instead?
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default FaceProfile;

const styles = StyleSheet.create({
  qmark: {
    width: 43,
    height: 43,
    borderWidth: 1,
    backgroundColor: "#C3FA4F",
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  qtext: {
    fontFamily: "Spartan_700Bold",
    fontSize: 20,
    lineHeight: 24,
  },
  cross: { position: "absolute", marginTop: 50, right: 30 },
  topCont: {
    marginTop: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 50,
  },
  text1: {
    marginTop: 60,
    marginLeft: 40,
    fontFamily: "Spartan_500Medium",
    fontSize: 24,
    lineHeight: 28.8,
  },
  text2: {
    marginTop: 32,
    fontFamily: "Spartan_400Regular",
    fontSize: 18,
    lineHeight: 25.2,
    marginHorizontal: 40,
  },
  scanBtn: {
    marginTop: 150,
    width: 320,
    height: 60,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  bott: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
