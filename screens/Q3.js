import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import NavHeader from "../components/NavHeader";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setQ3 } from "../slices/optionSlice";

const data = [
  {
    id: "1",
    title: "Everyday (don't judge me)",
    active: false,
  },
  {
    id: "2",
    title: "Once a week",
    active: false,
  },
  {
    id: "3",
    title: "Once a month",
    active: false,
  },
  {
    id: "4",
    title: "Rarely (Natural beauty FTW)",
    active: false,
  },
];

const Q3 = () => {
  const [op, setOp] = useState(data);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <NavHeader page={3} />
      <Text style={styles.text1}>
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
      <View style={[tw`pt-32`]}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={op}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`items-center border border-gray-300 rounded-xl mx-auto mt-4 flex-row pl-5`,
                {
                  width: 300,
                  height: 70,
                  backgroundColor: item.active === true ? "#ffecf4" : "white",
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
              <View
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: item.active === true ? "#EC0C77" : "#DFDFDF",
                }}
              ></View>
              <Text
                style={[
                  tw`text-base ml-3`,
                  {
                    fontFamily: "Inter_600SemiBold",
                    color: item.active === true ? "#EC0C77" : "black",
                  },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={[
          tw`items-center justify-center rounded-xl mt-6 mx-auto`,
          { width: 300, height: 70, backgroundColor: "#EC0C77" },
        ]}
        onPress={() => {
          dispatch(setQ3({ q3: op.filter((el) => el.active === true) }));
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

const styles = StyleSheet.create({
  text1: {
    fontFamily: "Inter_400Regular",
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 24,
    lineHeight: 32,
  },
});
