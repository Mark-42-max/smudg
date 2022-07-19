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
import cross from "../assets/cross.png";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={tw`absolute right-10 top-24`}
        onPress={() => navigation.goBack()}
      >
        <Image source={cross} />
      </TouchableOpacity>
      <View style={tw`mt-40 px-7`}>
        <Text style={[tw`text-4xl`, { fontFamily: "Inter_400Regular" }]}>
          Log In
        </Text>
        <Text
          style={[
            tw`text-lg mt-2`,
            { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
          ]}
        >
          Quisque tempus ligula sit amet leo pretium sollicitudin.
        </Text>
      </View>
      <View style={tw`flex-row justify-around items-center px-10 mt-28`}>
        <TouchableOpacity>
          <View style={tw`px-5 py-3 border rounded-full`}>
            <Text style={[tw`text-3xl`, { fontFamily: "Inter_400Regular" }]}>
              G
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={tw`px-5 py-3 border rounded-full`}>
            <Text style={[tw`text-3xl`, { fontFamily: "Inter_400Regular" }]}>
              F
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={tw`px-5 py-3 border rounded-full`}>
            <Text style={[tw`text-3xl`, { fontFamily: "Inter_400Regular" }]}>
              A
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`justify-center items-center mt-20`}>
        <Text
          style={[
            tw`text-lg`,
            { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
          ]}
        >
          or continue with
        </Text>
      </View>
      <TextInput
        placeholder="Enter mobile number"
        keyboardType="number-pad"
        style={[
          tw`border p-5 mx-10 mt-5 text-lg rounded-2xl border-gray-300`,
          { fontFamily: "Inter_400Regular" },
        ]}
      ></TextInput>
      <TouchableOpacity
        style={[
          tw`justify-center items-center mt-7 bg-black mx-10 rounded-2xl p-5`,
        ]}
        onPress={() => navigation.navigate("Verify")}
      >
        <View>
          <Text
            style={[tw`text-white text-lg`, { fontFamily: "Inter_400Regular" }]}
          >
            GET OTP
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
