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
import NavHeader from "../components/NavHeader";
import { useDispatch } from "react-redux";
import { setQ1 } from "../slices/optionSlice";
import bg1 from "../assets/bg1.png";

const data = [
  {
    id: "1",
    title: "makeup Products",
  },
  {
    id: "2",
    title: "skincare Products",
  },
  {
    id: "3",
    title: "i had some time to kill",
  },
];

const Q1 = () => {
  const navigation = useNavigation();
  const [op, setOp] = useState();
  const dispatch = useDispatch();
  return (
    <ImageBackground resizeMode="cover" source={bg1}>
      <NavHeader page={1} />
      <Text style={styles.text1}>what brings you to me?</Text>
      <Text style={styles.text2}>
        (i don’t wanna brag but after this, you ain’t going back to your friends
        for makeup and skincare questions.)
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
                dispatch(setQ1({ q1: item }));
                navigation.navigate("Q2");
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

export default Q1;

const styles = StyleSheet.create({
  text1: {
    fontFamily: "Spartan_500Medium",
    marginTop: 70,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 24,
    lineHeight: 32,
  },
  text2: {
    marginTop: 32,
    marginHorizontal: 40,
    fontSize: 18,
    lineHeight: 25.2,
    fontFamily: "Spartan_400Regular",
  },
  choices: {
    width: 318,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    borderRadius: 500,
  },
});
