import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import DashHead from "../components/DashHead";
import bg1 from "../assets/bg1.png";

const Dashboard = () => {
  return (
    <ImageBackground source={bg1} resizeMode="cover" style={{ flex: 1 }}>
      <DashHead />
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
