import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import backArrow from "../assets/backArrow.png";
import { useNavigation } from "@react-navigation/native";

const NavHeader = ({ page }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backArrow} />
        </TouchableOpacity>
        <Text
          style={[
            tw`ml-24 text-lg`,
            { fontFamily: "Spartan_700Bold", color: "black" },
          ]}
        >
          {page} OF 5
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  headingContainer: {
    width: 280,
    marginTop: 64,
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
  },
});
