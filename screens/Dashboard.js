import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import DashHead from "../components/DashHead";
import bg1 from "../assets/bg1.png";
import { useSelector } from "react-redux";
import { selectName } from "../slices/optionSlice";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Makeup from "./Makeup";
import Skincare from "./Skincare";

const Dashboard = () => {
  const name = useSelector(selectName);
  const Tab = createMaterialTopTabNavigator();
  return (
    <ImageBackground source={bg1} resizeMode="cover" style={{ flex: 1 }}>
      <DashHead />
      <Text style={styles.text1}>welcome to your smudgboard, {name.name}!</Text>
      <Text style={styles.text2}>
        here, you can find your top personalized product matches, search for
        products you’ve got your eye on, discover new love-worthy trends and a
        whole lot more!
      </Text>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 18,
            fontFamily: "Spartan_500Medium",
            lineHeight: 21.6,
          },
        }}
        style={{ marginTop: 20 }}
      >
        <Tab.Screen
          name="Makeup"
          component={Makeup}
          options={{ title: "makeup" }}
        />
        <Tab.Screen
          name="Skincare"
          component={Skincare}
          options={{ title: "skincare" }}
        />
      </Tab.Navigator>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  text1: {
    marginTop: 130,
    fontSize: 28,
    lineHeight: 33.6,
    fontFamily: "Spartan_500Medium",
    marginHorizontal: 30,
  },
  text2: {
    marginTop: 30,
    fontSize: 16,
    lineHeight: 22.4,
    fontFamily: "Spartan_400Regular",
    marginHorizontal: 30,
  },
});
