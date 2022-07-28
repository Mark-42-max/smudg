import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";

const NewLogin = () => {
  const inputs = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(inputs);
  const changeHandler = (name, value) => {
    setUser({ ...user, [name]: value });
  };
  const { email, password } = user;
  return (
    <SafeAreaView>
      <Text style={tw`text-center pt-20 text-2xl font-bold`}>Login Screen</Text>
      <View style={tw`mt-20 mx-10`}>
        <TextInput
          placeholder="Enter your email"
          style={tw`p-5 border border-gray-300 mt-5 text-lg`}
          onChangeText={(text) => changeHandler("email", text)}
          value={email}
        ></TextInput>
        <TextInput
          placeholder="Enter your password"
          style={tw`p-5 border border-gray-300 mt-7 text-lg`}
          onChangeText={(text) => changeHandler("password", text)}
          value={password}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={tw`mt-20 p-5 bg-black mx-32 rounded-2xl`}
        onPress={() => console.log(user)}
      >
        <Text style={tw`text-center text-white text-xl`}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewLogin;

const styles = StyleSheet.create({});
