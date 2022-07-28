import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import NavHeader from "../components/NavHeader";
import { setQ2 } from "../slices/optionSlice";
import bg1 from "../assets/bg1.png";

const data = [
  {
    id: "1",
    title: "anti acne",
  },
  {
    id: "2",
    title: "dark circles",
  },
  {
    id: "3",
    title: "open pores",
  },
  {
    id: "4",
    title: "something else",
  },
];

const Q2 = () => {
  const [op, setOp] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <ImageBackground source={bg1} resizeMode="cover">
      <NavHeader page={2} />
      <Text style={styles.text1}>
        what about your skin concerns you or makes you a little conscious?
      </Text>
      <View style={{ marginTop: 175 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.choices,
                {
                  backgroundColor: item.id === op?.id ? "#ffecf4" : "white",
                },
              ]}
              onPress={() => {
                setOp(item);
                dispatch(setQ2({ q2: item }));
                navigation.navigate("Q3");
              }}
            >
              <Text
                style={{
                  fontFamily: "Spartan_600SemiBold",
                  color: item.id === op?.id ? "#EC0C77" : "black",
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
    </ImageBackground>
  );
};

export default Q2;

const styles = StyleSheet.create({
  text1: {
    fontFamily: "Spartan_500Medium",
    marginTop: 70,
    marginHorizontal: 20,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 32,
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
});
