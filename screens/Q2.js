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
import { useDispatch } from "react-redux";
import NavHeader from "../components/NavHeader";
import { setQ2 } from "../slices/optionSlice";

const data = [
  {
    id: "1",
    title: "Anti Acne",
  },
  {
    id: "2",
    title: "Dark Circles",
  },
  {
    id: "3",
    title: "Open Pores",
  },
  {
    id: "4",
    title: "Something Else",
  },
];

const Q2 = () => {
  const [op, setOp] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <NavHeader page={2} />
      <Text style={styles.text1}>What is your skincare goal?</Text>
      <Text
        style={[
          tw`text-base mt-3 mx-auto`,
          { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
        ]}
      >
        One line for further info, can be removed
      </Text>
      <View style={[tw`mt-40`]}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`items-center border border-gray-300 rounded-xl mx-auto mt-4 flex-row pl-5`,
                {
                  width: 300,
                  height: 70,
                  backgroundColor: item.id === op?.id ? "#ffecf4" : "white",
                },
              ]}
              onPress={() => {
                setOp(item);
                dispatch(setQ2({ q2: item }));
                navigation.navigate("Q3");
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: item.id !== op?.id ? "#DFDFDF" : "#EC0C77",
                }}
              ></View>
              <Text
                style={[
                  tw`text-base ml-5`,
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

export default Q2;

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
