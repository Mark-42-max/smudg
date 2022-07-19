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
  const [op, setOp] = useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <NavHeader page={2} />
      <Text
        style={[tw`text-2xl mt-20 mx-auto`, { fontFamily: "Inter_400Regular" }]}
      >
        What is your skincare goal?
      </Text>
      <Text
        style={[
          tw`text-base mt-3 mx-auto`,
          { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
        ]}
      >
        One line for further info, can be removed
      </Text>
      <View style={[tw`mt-24`]}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`items-center border border-gray-300 rounded-xl mx-auto mt-7 flex-row pl-5`,
                {
                  width: 280,
                  height: 70,
                  backgroundColor: item.id === op?.id ? "#ffecf4" : "white",
                },
              ]}
              onPress={() => {
                setOp(item);
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

const styles = StyleSheet.create({});
