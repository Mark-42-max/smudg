import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import cross from "../assets/cross.png";
import qmark from "../assets/qmark.png";
import arr from "../assets/arr.png";
import face from "../assets/face.png";
import scan from "../assets/scan.png";
import { useNavigation } from "@react-navigation/native";

const FaceProfile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={tw`absolute right-10 top-20`}
        onPress={() => navigation.goBack()}
      >
        <Image source={cross} />
      </TouchableOpacity>
      <View style={tw`flex-row items-center justify-around mt-32 mx-5`}>
        <Image
          source={qmark}
          style={{ width: 80, height: 80, resizeMode: "contain" }}
        />
        <Image source={arr} />
        <Image source={face} />
        <Image source={arr} />
        <View style={[tw`p-2 rounded-xl`, { backgroundColor: "#008525" }]}>
          <Text style={[tw`text-white`, { fontFamily: "Spartan_700Bold" }]}>
            GREAT MATCH
          </Text>
        </View>
      </View>
      <View style={tw`mx-5 mt-24`}>
        <Text style={[tw`text-4xl`, { fontFamily: "Spartan_400Regular" }]}>
          Let’s see how these match with you!
        </Text>
        <Text
          style={[
            tw`mt-2 text-lg`,
            { color: "#464646", fontFamily: "Spartan_400Regular" },
          ]}
        >
          Quisque ac malesuada odio, quis iaculis lorem. Maecenas placerat vel
          dui ut posuere.
        </Text>
      </View>
      <TouchableOpacity>
        <View
          style={[
            tw`mx-auto mt-20 rounded-2xl flex-row items-center justify-around`,
            { backgroundColor: "#EC0C77", height: 90, width: 320 },
          ]}
        >
          <Image source={scan} />
          <View>
            <Text
              style={[
                tw`text-white text-xl`,
                { fontFamily: "Spartan_600SemiBold" },
              ]}
            >
              ANALYSE MY PROFILE
            </Text>
            <Text style={[tw`text-white text-base`]}>(Takes 30 seconds)</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={tw`flex-row justify-center items-center mt-10`}>
        <Text style={[tw`text-xl`, { color: "#8A8A8A" }]}>
          SKIP, TAKE QUIZ INSTEAD
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FaceProfile;

const styles = StyleSheet.create({});
