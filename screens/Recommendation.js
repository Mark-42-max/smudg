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
import qmark from "../assets/qmark.png";
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

const Recommendation = () => {
  const navigation = useNavigation();
  const name = useSelector(selectName);
  const gender = useSelector(selectGender);
  const q1 = useSelector(selectQ1);
  const q2 = useSelector(selectQ2);
  const q3 = useSelector(selectQ3);
  const q4 = useSelector(selectQ4);
  return (
    <SafeAreaView>
      <View style={tw`mt-24 px-7`}>
        <Text style={[tw`text-4xl`, { fontFamily: "Inter_400Regular" }]}>
          Look Aishwarya! We’ve found some products for you.
        </Text>
        <Text
          style={[
            tw`mt-3 text-base`,
            { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
          ]}
        >
          One line for any additional copy
        </Text>
        <View style={tw`flex-row mt-10 justify-between`}>
          <View
            style={[
              tw`border border-gray-300 rounded-2xl justify-center items-center`,
              { width: 145, height: 250 },
            ]}
          >
            <View
              style={[
                tw`rounded-2xl`,
                { width: 120, height: 150, backgroundColor: "#DFDFDF" },
              ]}
            ></View>
            <Text style={[tw`mt-2 text-sm`, { fontFamily: "Inter_500Medium" }]}>
              A name of a product might go to 2 lines
            </Text>
            <TouchableOpacity
              style={tw`absolute -bottom-10`}
              onPress={() => navigation.navigate("Face")}
            >
              <Image source={qmark} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              tw`border border-gray-300 rounded-2xl justify-center items-center`,
              { width: 145, height: 250 },
            ]}
          >
            <View
              style={[
                tw`rounded-2xl`,
                { width: 120, height: 150, backgroundColor: "#DFDFDF" },
              ]}
            ></View>
            <Text style={[tw`mt-2 text-sm`, { fontFamily: "Inter_500Medium" }]}>
              A name of a product might go to 2 lines
            </Text>
            <TouchableOpacity
              style={tw`absolute -bottom-10`}
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
              <Image source={qmark} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tw`justify-center items-center mt-40`}>
        <Text
          style={[
            tw`text-base`,
            { color: "#999999", fontFamily: "Inter_600SemiBold" },
          ]}
        >
          Tap on any ‘?’ to continue
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Recommendation;

const styles = StyleSheet.create({});
