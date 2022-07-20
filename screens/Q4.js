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
import { useDispatch } from "react-redux";
import { setQ4 } from "../slices/optionSlice";

const data = [
  {
    id: "1",
    title: "Hair Cream",
    active: false,
  },
  {
    id: "2",
    title: "Lip Balm Organic ABC",
    active: false,
  },
  {
    id: "3",
    title: "Eye Liner Thin Dark",
    active: false,
  },
  {
    id: "4",
    title: "Eye Cream",
    active: false,
  },
  {
    id: "5",
    title: "Hair Spray For Curly Frizzy Hair",
    active: false,
  },
  {
    id: "6",
    title: "Lotion",
    active: false,
  },
  {
    id: "7",
    title: "Sun Tan Lotion",
    active: false,
  },
  {
    id: "8",
    title: "Dark Circle Remover Gel",
    active: false,
  },
  {
    id: "9",
    title: "Mask",
    active: false,
  },
  {
    id: "10",
    title: "Eye Liner Thin Dark",
    active: false,
  },
];

const Q4 = () => {
  const [op, setOp] = useState(data);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <NavHeader page={4} />
      <Text
        style={[tw`text-2xl mt-7 mx-10`, { fontFamily: "Inter_400Regular" }]}
      >
        What kind of products are you looking for?
      </Text>
      <Text
        style={[
          tw`text-base mt-3 mx-auto`,
          { fontFamily: "Inter_400Regular", color: "#8F8F8F" },
        ]}
      >
        Select atleast two options
      </Text>
      <View style={styles.container}>
        {op.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              tw`border border-gray-300 p-5 rounded-2xl ml-3 mt-2`,
              {
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
            <Text
              style={{
                color: item.active === true ? "#EC0C77" : "black",
                fontFamily: "Inter_600SemiBold",
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[
          tw`items-center justify-center rounded-xl mt-7 mx-auto`,
          { width: 300, height: 70, backgroundColor: "#EC0C77" },
        ]}
        onPress={() => {
          dispatch(setQ4({ q4: op.filter((el) => el.active === true) }));
          navigation.navigate("Recommendation");
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

export default Q4;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 340,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
