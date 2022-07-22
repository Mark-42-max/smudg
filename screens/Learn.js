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
            Learn
          </Text>
          <Text
            style={[
              tw`text-lg mt-2`,
              { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
            ]}
          >
            Nunc rutrum bibendum dui, a commodo quam placerat nec.
          </Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({});
  