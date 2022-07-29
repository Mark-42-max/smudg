import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setGender, setName } from "../slices/optionSlice";

const data = [
  {
    id: "1",
    title: "Male",
    active: false,
  },
  {
    id: "2",
    title: "Female",
    active: false,
  },
  {
    id: "3",
    title: "naa, i dont wish to reveal",
    active: false,
  },
];

const QuestionIntro = () => {
  const [op, setOp] = useState(data);
  const [n, setN] = useState("aishwarya");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          "radial-gradient(50% 50% at 50% 50%, #C43F53 0%, rgba(159, 140, 246, 0) 100%)",
      }}
    >
      <Text style={styles.turn}>now your turn!! (don't be a stranger)</Text>
      <Text style={styles.call}>what do i call you?</Text>
      <TextInput
        placeholder="first name, that's all"
        style={styles.input}
        placeholderTextColor="#939494"
        value={n}
        onChangeText={(text) => setN(text)}
      />
      <Text style={styles.identify}>
        and, how do you identify yourself? (it helps me understand you better
        but no pressure)
      </Text>
      <View style={styles.btnCont}>
        {op.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.choices,
              {
                backgroundColor:
                  item.active === true ? "#f8ecef" : "transparent",
              },
            ]}
            onPress={() => {
              setOp(
                [...op].map((obj) => {
                  if (obj?.id === item.id) {
                    return {
                      ...obj,
                      active: !item.active,
                    };
                  } else return obj;
                })
              );
            }}
          >
            <Text
              style={[
                styles.btnText,
                { color: item.active === true ? "#c53f52" : "white" },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[
          styles.next,
          {
            backgroundColor:
              op.filter((el) => el.active === true).length === 1
                ? "black"
                : "#AEAFAF",
          },
        ]}
        onPress={() => {
          dispatch(setName({ name: n }));
          dispatch(
            setGender({ gender: op.filter((el) => el.active === true) })
          );
          navigation.navigate("Q1");
        }}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuestionIntro;

const styles = StyleSheet.create({
  turn: {
    fontFamily: "Spartan_400Regular",
    marginTop: 80,
    textAlign: "center",
    fontSize: 28,
    marginHorizontal: 40,
    lineHeight: 33.6,
    color: "white",
  },
  call: {
    fontFamily: "Spartan_400Regular",
    fontSize: 18,
    marginHorizontal: 30,
    lineHeight: 25.2,
    color: "white",
    marginTop: 80,
  },
  input: {
    borderBottomWidth: 1,
    marginHorizontal: 30,
    borderColor: "#939494",
    marginTop: 20,
    padding: 10,
    fontFamily: "Spartan_400Regular",
    fontSize: 24,
    lineHeight: 28.8,
    color: "white",
  },
  identify: {
    fontFamily: "Spartan_400Regular",
    fontSize: 18,
    marginHorizontal: 30,
    lineHeight: 25.2,
    color: "white",
    marginTop: 40,
  },
  btnCont: {
    width: 300,
    marginLeft: 30,
    height: 200,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  choices: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10,
    borderColor: "white",
  },
  btnText: {
    fontFamily: "Spartan_600SemiBold",
    fontSize: 14,
    lineHeight: 16.8,
  },
  next: {
    marginTop: 30,
    width: 320,
    height: 60,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontFamily: "Spartan_600SemiBold",
    fontSize: 18,
    lineHeight: 21.6,
  },
});
