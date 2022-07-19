import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import backArrow from "../assets/backArrow.png";

const Verify = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={tw`mt-20 mx-10`}
        onPress={() => navigation.goBack()}
      >
        <Image source={backArrow} />
      </TouchableOpacity>
      <Text
        style={[tw`text-4xl mt-10 mx-10`, { fontFamily: "Inter_400Regular" }]}
      >
        Verify OTP
      </Text>
      <Text
        style={[
          tw`mx-10 mt-10 text-base`,
          { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
        ]}
      >
        Donec tincidunt turpis ipsum, ac fringilla eros convallis ac.
      </Text>
      <View style={tw`flex-row justify-between mx-10 mt-10`}>
        <TextInput
          style={[
            tw`border p-4 pl-7 border-gray-300 rounded-xl`,
            { fontFamily: "Inter_400Regular" },
          ]}
          placeholder="0"
          keyboardType="number-pad"
        />
        <TextInput
          style={[
            tw`border p-4 border-gray-300 pl-7 rounded-xl`,
            { fontFamily: "Inter_400Regular" },
          ]}
          placeholder="0"
          keyboardType="number-pad"
        />
        <TextInput
          style={[
            tw`border p-4 border-gray-300 pl-7 rounded-xl`,
            { fontFamily: "Inter_400Regular" },
          ]}
          placeholder="0"
          keyboardType="number-pad"
        />
        <TextInput
          style={[
            tw`border p-4 border-gray-300 pl-7 rounded-xl`,
            { fontFamily: "Inter_400Regular" },
          ]}
          placeholder="0"
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity
        style={[
          tw`justify-center items-center mt-7 bg-black mx-10 rounded-2xl p-5`,
        ]}
      >
        <View>
          <Text
            style={[tw`text-white text-lg`, { fontFamily: "Inter_400Regular" }]}
          >
            VERIFY
          </Text>
        </View>
      </TouchableOpacity>
      <View style={tw`justify-center items-center mt-20`}>
        <Text
          style={[
            tw`text-lg`,
            { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
          ]}
        >
          Didn't receive an OTP?
        </Text>
        <Text style={[tw`mt-2 underline`, { fontFamily: "Inter_700Bold" }]}>
          resend OTP to +919999999999
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Verify;

const styles = StyleSheet.create({});
