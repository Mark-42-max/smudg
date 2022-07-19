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
  const [op, setOp] = useState(null);
  return (
    <SafeAreaView>
      <NavHeader page={1} />
      <Text
        style={[tw`text-2xl mt-20 mx-auto`, { fontFamily: "Inter_400Regular" }]}
      >
        What are you looking for?
      </Text>
      <Text
        style={[
          tw`text-base mt-3 mx-auto`,
          { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
        ]}
      >
        One line for further info, can be removed
      </Text>
      <View style={tw`mt-24`}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`items-center justify-center border border-gray-300 rounded-xl mx-auto mt-7`,
                {
                  width: 280,
                  height: 70,
                  backgroundColor: item.id === op?.id ? "#ffecf4" : "white",
                },
              ]}
              onPress={() => {
                setOp(item);
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

const styles = StyleSheet.create({});