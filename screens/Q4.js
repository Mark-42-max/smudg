import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import NavHeader from "../components/NavHeader";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setQ4 } from "../slices/optionSlice";
import bg1 from "../assets/bg1.png";

const data = [
  {
    id: "1",
    title: "Button",
    active: false,
  },
  {
    id: "2",
    title: "eyeliner thin dark",
    active: false,
  },
  {
    id: "3",
    title: "sun tan lotion",
    active: false,
  },
  {
    id: "4",
    title: "eye cream",
    active: false,
  },
  {
    id: "5",
    title: "lip balm organic abc",
    active: false,
  },
  {
    id: "6",
    title: "mask",
    active: false,
  },
  {
    id: "7",
    title: "hair spray for curly frizzy hair",
    active: false,
  },
  {
    id: "8",
    title: "lotion",
    active: false,
  },
  {
    id: "9",
    title: "dark circle remover gel",
    active: false,
  },
];

const Q4 = () => {
  const [op, setOp] = useState(data);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <ImageBackground source={bg1} resizeMode="cover">
      <NavHeader page={4} />
      <Text style={styles.text1}>
        which products are on your mind, for now?
      </Text>
      <Text style={styles.text2}>
        let’s make this investment effective and worth it for you.
      </Text>
      <View style={styles.container}>
        {op.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              backgroundColor: item.active === true ? "#ffecf4" : "white",
              borderRadius: 30,
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginTop: 16,
              marginLeft: 16,
            }}
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
              style={{
                color: item.active === true ? "#EC0C77" : "black",
                fontFamily: "Spartan_600SemiBold",
              }}
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
              op.filter((el) => el.active === true).length >= 1
                ? "black"
                : "#AEAFAF",
          },
        ]}
        onPress={() => {
          dispatch(setQ4({ q4: op.filter((el) => el.active === true) }));
          navigation.navigate("Recommendation");
        }}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Q4;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 340,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  text1: {
    fontFamily: "Spartan_500Medium",
    marginTop: 70,
    marginHorizontal: 30,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 32,
  },
  text2: {
    marginTop: 30,
    marginHorizontal: 40,
    fontSize: 18,
    lineHeight: 25.2,
    fontFamily: "Spartan_400Regular",
    textAlign: "center",
  },
  next: {
    marginTop: 40,
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
