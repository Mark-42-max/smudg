import { StyleSheet, View, ScrollView, FlatList, Text } from "react-native";
import React, { useState } from 'react'
import Tab from "./Tab";
import Cards from "./Cards";
import Saved from "./Saved";
import tw from "tailwind-react-native-classnames";
import Tutorial from "./Tutorial";
import Categories from "./Categories";
import { StateContext } from "../Context/StateContext";
import { useContext } from "react";

export default function TabContainer() {

    const {dummyData, tutorialData} = useContext(StateContext);
    const [dummy] = dummyData;
    const [tutorial] = tutorialData;

    const [activeTab, setActiveTab] = useState("Snippets");

    const handleActiveTabChange = (title) => {
      setActiveTab(title);
    };

  return (
    <View>
      <View style={[styles.tabs]}>
        {/* Tabs */}

        <View style={[styles.tabContainer]}>
          <Tab
            item="Snippets"
            onHandle={(text) => handleActiveTabChange(text)}
            underline={activeTab === "Snippets" ? true : false}
          />

          <Tab
            item="Tutorials"
            onHandle={(text) => handleActiveTabChange(text)}
            underline={activeTab === "Tutorials" ? true : false}
          />

          <Tab
            item="Saved"
            onHandle={(text) => handleActiveTabChange(text)}
            underline={activeTab === "Saved" ? true : false}
          />
        </View>
      </View>
      {/* Categories */}
      <View style={{backgroundColor: "#F9F9F9"}}>
        <Categories item={activeTab}/>
      </View>
      
      <View style={{borderWidth: 1, borderBottomColor: "#F6F6F6"}}></View>

      {/* Tab Content */}
      <View>
        {activeTab === 'Snippets' && <Cards data={dummy} height="72%"/>}
        {activeTab === 'Tutorials' && <Tutorial data={tutorial} height="72%"/>}
        {activeTab === 'Saved' && <Saved snippet={dummy} tutorial={tutorial} height="72%"/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabs: {
    borderColor: "#E6E6E6",
    borderWidth: 1,
    marginTop: 20,
  },

  tabContainer: {
    backGroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});