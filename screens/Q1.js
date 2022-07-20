import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import NavHeader from "../components/NavHeader";
import { useDispatch } from "react-redux";
import { setQ1 } from "../slices/optionSlice";

const data = [
  {
    id: "1",
    title: "Makeup Products",
  },
  {
    id: "2",
    title: "Skincare Products",
  },
  {
    id: "3",
    title: "Makeup and Skincare Products",
  },
  {
    id: "4",
    title: "Not sure, just exploring",
  },
];

const Q1 = () => {
  const navigation = useNavigation();
  const [op, setOp] = useState();
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <NavHeader page={1} />
      <Text style={styles.text1}>What are you looking for?</Text>
      <Text
        style={[
          tw`text-base mt-3 mx-auto`,
          { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
        ]}
      >
        One line for further info, can be removed
      </Text>
      <View style={tw`mt-44`}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`items-center justify-center border border-gray-300 rounded-xl mx-auto mt-4`,
                {
                  width: 300,
                  height: 70,
                  backgroundColor: item.id === op?.id ? "#ffecf4" : "white",
                },
              ]}
              onPress={() => {
                setOp(item);
                dispatch(setQ1({ q1: item }));
                navigation.navigate("Q2");
              }}
            >
              <Text
                style={[
                  tw`text-base`,
                  {
                    fontFamily: "Inter_600SemiBold",
                    color: item.id === op?.id ? "#EC0C77" : "black",
                  },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Q1;

const styles = StyleSheet.create({
  text1: {
    fontFamily: "Inter_400Regular",
    marginTop: 80,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 24,
    lineHeight: 32,
  },
});
