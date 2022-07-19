import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import NavHeader from "../components/NavHeader";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Everyday (don't judge me)",
  },
  {
    id: "2",
    title: "Once a week",
  },
  {
    id: "3",
    title: "Once a month",
  },
  {
    id: "4",
    title: "Rarely (Natural beauty FTW)",
  },
];

const Q3 = () => {
  const [op1, setOp1] = useState(null);
  const [op2, setOp2] = useState(null);
  const [op3, setOp3] = useState(null);
  const [op4, setOp4] = useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <NavHeader page={3} />
      <Text
        style={[tw`text-2xl mt-10 mx-auto`, { fontFamily: "Inter_400Regular" }]}
      >
        How often do you purchase beauty products?
      </Text>
      <Text
        style={[
          tw`text-base mt-3 mx-auto`,
          { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
        ]}
      >
        You can select multiple options
      </Text>
      <View style={[tw`mt-3`]}>
        <TouchableOpacity
          style={[
            tw`items-center border border-gray-300 rounded-xl mx-auto mt-7 flex-row pl-5`,
            {
              width: 300,
              height: 70,
              backgroundColor: op1 !== null ? "#ffecf4" : "white",
            },
          ]}
          onPress={() => {
            if (op1 === null) setOp1(data[0]);
            else setOp1(null);
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: op1 !== null ? "#EC0C77" : "#DFDFDF",
            }}
          ></View>
          <Text
            style={[
              tw`text-base ml-3`,
              {
                fontFamily: "Inter_600SemiBold",
                color: op1 !== null ? "#EC0C77" : "black",
              },
            ]}
          >
            {data[0].title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`items-center border border-gray-300 rounded-xl mx-auto mt-7 flex-row pl-5`,
            {
              width: 300,
              height: 70,
              backgroundColor: op2 !== null ? "#ffecf4" : "white",
            },
          ]}
          onPress={() => {
            if (op2 === null) setOp2(data[1]);
            else setOp2(null);
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: op2 !== null ? "#EC0C77" : "#DFDFDF",
            }}
          ></View>
          <Text
            style={[
              tw`text-base ml-3`,
              {
                fontFamily: "Inter_600SemiBold",
                color: op2 !== null ? "#EC0C77" : "black",
              },
            ]}
          >
            {data[1].title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`items-center border border-gray-300 rounded-xl mx-auto mt-7 flex-row pl-5`,
            {
              width: 300,
              height: 70,
              backgroundColor: op3 !== null ? "#ffecf4" : "white",
            },
          ]}
          onPress={() => {
            if (op3 === null) setOp3(data[2]);
            else setOp3(null);
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: op3 !== null ? "#EC0C77" : "#DFDFDF",
            }}
          ></View>
          <Text
            style={[
              tw`text-base ml-3`,
              {
                fontFamily: "Inter_600SemiBold",
                color: op3 !== null ? "#EC0C77" : "black",
              },
            ]}
          >
            {data[2].title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`items-center border border-gray-300 rounded-xl mx-auto mt-7 flex-row pl-5`,
            {
              width: 300,
              height: 70,
              backgroundColor: op4 !== null ? "#ffecf4" : "white",
            },
          ]}
          onPress={() => {
            if (op4 === null) setOp4(data[3]);
            else setOp4(null);
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: op4 !== null ? "#EC0C77" : "#DFDFDF",
            }}
          ></View>
          <Text
            style={[
              tw`text-base ml-3`,
              {
                fontFamily: "Inter_600SemiBold",
                color: op4 !== null ? "#EC0C77" : "black",
              },
            ]}
          >
            {data[3].title}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          tw`items-center justify-center rounded-xl mt-10 mx-auto`,
          { width: 300, height: 70, backgroundColor: "#EC0C77" },
        ]}
        onPress={() => {
          navigation.navigate("Q4");
        }}
      >
        <Text
          style={[
            tw`text-base text-white`,
            { fontFamily: "Inter_600SemiBold" },
          ]}
        >
          NEXT
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Q3;

const styles = StyleSheet.create({});
