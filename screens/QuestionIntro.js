import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import arrowDown from "../assets/arrowDown.png";
import { Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setGender, setName } from "../slices/optionSlice";

const QuestionIntro = () => {
  const [isSelect1, setIsSelect1] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);
  const [isSelect3, setIsSelect3] = useState(false);
  const [op1] = useState("Male");
  const [op2] = useState("Female");
  const [op3] = useState("Prefer not to say");
  const [op, setOp] = useState("");
  const [n, setN] = useState("Aishwarya");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: "#E5E5E5" }]}>
      <View style={[tw`items-center`, { paddingTop: 70 }]}>
        <Image source={arrowDown} />
      </View>
      <Text
        style={[
          tw`text-4xl mx-auto pt-7`,
          { width: 300, fontFamily: "Inter_400Regular" },
        ]}
      >
        Let’s answer a few questions to get started
      </Text>
      <View style={[tw`mx-auto mt-14`, { width: 300 }]}>
        <Text
          style={[
            tw`text-gray-500 text-lg`,
            { fontFamily: "Inter_400Regular" },
          ]}
        >
          What should we call you?
        </Text>
        <Input
          placeholder="Aishwarya"
          style={[
            tw`mt-5 font-bold text-2xl`,
            { fontFamily: "Inter_400Regular" },
          ]}
          value={n}
          onChangeText={(text) => setN(text)}
        />
        <Text
          style={[
            tw`text-gray-500 text-lg mt-5`,
            { fontFamily: "Inter_400Regular" },
          ]}
        >
          How do you identify yourself?
        </Text>
        <View style={tw`flex-row justify-around items-center mt-10`}>
          <TouchableOpacity
            style={[
              tw`items-center justify-center border border-gray-300 rounded-xl`,
              {
                width: 120,
                height: 70,
                backgroundColor: isSelect1 ? "#ffecf4" : "white",
              },
            ]}
            onPress={() => {
              setOp(op1);
              setIsSelect1(!isSelect1);
              setIsSelect2(false);
              setIsSelect3(false);
            }}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  fontFamily: "Inter_600SemiBold",
                  color: isSelect1 ? "#EC0C77" : "black",
                },
              ]}
            >
              {op1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`items-center justify-center border border-gray-300 rounded-xl`,
              {
                width: 120,
                height: 70,
                backgroundColor: isSelect2 ? "#ffecf4" : "white",
              },
            ]}
            onPress={() => {
              setOp(op2);
              setIsSelect2(!isSelect2);
              setIsSelect1(false);
              setIsSelect3(false);
            }}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  fontFamily: "Inter_600SemiBold",
                  color: isSelect2 ? "#EC0C77" : "black",
                },
              ]}
            >
              {op2}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            tw`items-center justify-center border border-gray-300 rounded-xl mt-5 mx-auto`,
            {
              width: 270,
              height: 70,
              backgroundColor: isSelect3 ? "#ffecf4" : "white",
            },
          ]}
          onPress={() => {
            setOp(op3);
            setIsSelect3(!isSelect3);
            setIsSelect1(false);
            setIsSelect2(false);
          }}
        >
          <Text
            style={[
              tw`text-base`,
              {
                fontFamily: "Inter_600SemiBold",
                color: isSelect3 ? "#EC0C77" : "black",
              },
            ]}
          >
            {op3}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`items-center justify-center rounded-xl mt-10 mx-auto`,
            { width: 270, height: 70, backgroundColor: "#EC0C77" },
          ]}
          onPress={() => {
            dispatch(setName({ name: n }));
            dispatch(setGender({ gender: op }));
            navigation.navigate("Q1");
          }}
          disabled={op === "" ? true : false}
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
      </View>
    </SafeAreaView>
  );
};

export default QuestionIntro;

const styles = StyleSheet.create({});
