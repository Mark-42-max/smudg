import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import cloud from "../assets/cloud.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          "radial-gradient(50% 50% at 50% 50%, rgba(196, 63, 83, 0.7) 0%, rgba(159, 140, 246, 0) 100%)",
      }}
    >
      {/* <LinearGradient colors={["#C43F53", "#9F8CF6"]} style={{ flex: 1 }}> */}
      <View style={styles.topCont}>
        <Image source={cloud} />
        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.wel}>welcome to smudg</Text>
      <Text style={styles.create}>Create an account to get started</Text>
      <View style={styles.iconCont}>
        <TouchableOpacity>
          <Image source={fb} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={google} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={apple} />
        </TouchableOpacity>
      </View>
      <Text style={styles.continue}>or continue with your</Text>
      <View style={styles.bottomCont}>
        <TextInput placeholder="Email address" style={styles.input} />
        <TouchableOpacity style={styles.verify}>
          <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.foot}>
        <Text style={styles.bottomText}>Signed up with phone?</Text>
        <TouchableOpacity>
          <Text style={styles.bottomText}> Sign in →</Text>
        </TouchableOpacity>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  topCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    alignItems: "center",
    marginTop: 50,
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
    marginTop: 20,
    marginLeft: 30,
  },
  iconCont: {
    flexDirection: "row",
    marginTop: 70,
    width: 220,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
  },
  continue: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: "Spartan_500Medium",
  },
  loginText: {
    fontFamily: "Spartan_600SemiBold",
    fontSize: 14,
  },
  bottomCont: {
    marginHorizontal: 30,
  },
  input: {
    width: 318,
    height: 60,
    borderRadius: 500,
    backgroundColor: "white",
    marginTop: 30,
    fontFamily: "Spartan_400Regular",
    fontSize: 16,
    lineHeight: 22.4,
    paddingLeft: 30,
    color: "black",
  },
  verify: {
    justifyContent: "center",
    alignItems: "center",
    width: 318,
    height: 60,
    borderRadius: 500,
    backgroundColor: "black",
    marginTop: 12,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Spartan_600SemiBold",
    lineHeight: 19.2,
  },
  bottomText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Spartan_600SemiBold",
    lineHeight: 16.8,
    marginTop: 2,
  },
  foot: {
    marginTop: 20,
  },
});
