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
  import Tabs from "../components/Tabs";
import { StateProviders } from "../Context/StateContext";
  
  const Learn = () => {
    const navigation = useNavigation();
    return (
      <StateProviders>
      <SafeAreaView>
        <View style={tw`mt-24 px-7`}>
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
        <Tabs />
      </SafeAreaView>
      </StateProviders>
    );
  };
  
  export default Learn;
  
  const styles = StyleSheet.create({});
  