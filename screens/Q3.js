import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import NavHeader from "../components/NavHeader";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setQ3 } from "../slices/optionSlice";
import bg1 from "../assets/bg1.png";

const data = [
  {
    id: "1",
    title: "everyday (don't judge me)",
    active: false,
  },
  {
    id: "2",
    title: "once a week",
    active: false,
  },
  {
    id: "3",
    title: "once a month",
    active: false,
  },
  {
    id: "4",
    title: "rarely(natural beauty FTW)",
    active: false,
  },
];

const Q3 = () => {
  const [op, setOp] = useState(data);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <ImageBackground source={bg1} resizeMode="cover">
      <NavHeader page={3} />
      <Text style={styles.text1}>
        what’s your spend on these products like?
      </Text>
      <Text style={styles.text2}>
        let’s make this investment effective and worth it for you.
      </Text>
      <View style={{ marginTop: 60 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={op}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.choices,
                {
                  backgroundColor: item.id === op?.id ? "#ffecf4" : "white",
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
                style={{
                  fontFamily: "Spartan_600SemiBold",
                  color: item.active === true ? "#EC0C77" : "black",
                  fontSize: 16,
                  lineHeight: 22.4,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
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
          dispatch(setQ3({ q3: op.filter((el) => el.active === true) }));
          navigation.navigate("Q4");
        }}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Q3;

const styles = StyleSheet.create({
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
  choices: {
    width: 318,
    height: 60,
    justifyContent: "center",
    paddingLeft: 27,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    borderRadius: 500,
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
