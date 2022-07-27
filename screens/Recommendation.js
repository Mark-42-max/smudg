import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import gel from "../assets/gel.png";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectGender,
  selectName,
  selectQ1,
  selectQ2,
  selectQ3,
  selectQ4,
} from "../slices/optionSlice";
import bg1 from "../assets/bg1.png";

const Recommendation = () => {
  const navigation = useNavigation();
  const name = useSelector(selectName);
  const gender = useSelector(selectGender);
  const q1 = useSelector(selectQ1);
  const q2 = useSelector(selectQ2);
  const q3 = useSelector(selectQ3);
  const q4 = useSelector(selectQ4);
  return (
    <ImageBackground source={bg1} resizeMode="cover">
      <Text style={styles.text1}>
        so i have a few interesting recommendations for you..
      </Text>
      <Text style={styles.text2}>
        quick reminder: these product matches are generated after knowing you
        just a little bit. baby steps. when i know you better, i will do much
        better. you’ll see! for now, do any of these pique your interest?
      </Text>
      <View style={styles.boxCont}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Image source={gel} />
          </View>
          <Text style={styles.t1}>NYKAA</Text>
          <Text style={styles.t2}>NYX Professional Makeup</Text>
        </View>
        <TouchableOpacity
          style={styles.q1}
          onPress={() => {
            console.log(name);
            console.log(gender);
            console.log(q1);
            console.log(q2);
            console.log(q3);
            console.log(q4);
            navigation.navigate("Face");
          }}
        >
          <Text style={{ fontFamily: "Spartan_700Bold", fontSize: 20 }}>?</Text>
        </TouchableOpacity>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Image source={gel} />
          </View>
          <Text style={styles.t1}>NYKAA</Text>
          <Text style={styles.t2}>NYX Professional Makeup</Text>
        </View>
        <TouchableOpacity
          style={styles.q2}
          onPress={() => {
            console.log(name);
            console.log(gender);
            console.log(q1);
            console.log(q2);
            console.log(q3);
            console.log(q4);
            navigation.navigate("Face");
          }}
        >
          <Text style={{ fontFamily: "Spartan_700Bold", fontSize: 20 }}>?</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>
        tap on any ‘?’ to show me you’re interested in this-that.
      </Text>
    </ImageBackground>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  text1: {
    fontFamily: "Spartan_500Medium",
    marginTop: 70,
    marginHorizontal: 15,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 32,
  },
  text2: {
    marginTop: 30,
    marginHorizontal: 30,
    fontSize: 18,
    lineHeight: 25.2,
    fontFamily: "Spartan_400Regular",
  },
  box: {
    width: 154,
    height: 282,
    borderRadius: 10,
    borderWidth: 1,
  },
  boxCont: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  bottomText: {
    fontFamily: "Spartan_600SemiBold",
    textAlign: "center",
    marginTop: 60,
    marginHorizontal: 40,
  },
  innerBox: {
    height: 178,
    borderBottomWidth: 1,
    backgroundColor: "#E9E9E9",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  t1: {
    fontFamily: "Spartan_700Bold",
    paddingTop: 15,
    fontSize: 12,
    lineHeight: 14.4,
    paddingHorizontal: 10,
  },
  t2: {
    paddingHorizontal: 10,
    fontFamily: "Spartan_500Medium",
    fontSize: 12,
    lineHeight: 14.4,
    paddingTop: 10,
  },
  q1: {
    position: "absolute",
    width: 95,
    height: 41,
    backgroundColor: "#C3FA4F",
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: -20,
    left: 30,
  },
  q2: {
    position: "absolute",
    width: 95,
    height: 41,
    backgroundColor: "#C3FA4F",
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: -20,
    right: 30,
  },
});
