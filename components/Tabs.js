import { StyleSheet, View, ScrollView, FlatList, Text } from "react-native";
import React, { useState } from "react";
import Tab from "./Tab";
import Cards from "./Cards";
import Saved from "./Saved";
import tw from "tailwind-react-native-classnames";
import Tutorial from "./Tutorial";
import Categories from "./Categories";

export default function Tabs() {


  const dummy = [
    {
      id: 11,
      title: "How to apply this face cream the right way",
      feat: "Nykaa",
      vidUri: "video link to be stored here",
      duration: 40
    },
    {
      id: 12,
      title: "How to apply this face cream the right way",
      feat: "Nykaa",
      vidUri: "video link to be stored here",
      duration: 40
    },
    {
      id: 13,
      title: "How to apply this face cream the right way",
      feat: "Nykaa",
      vidUri: "video link to be stored here",
      duration: 40
    },
    {
      id: 14,
      title: "How to apply this face cream the right way",
      feat: "Nykaa",
      vidUri: "video link to be stored here",
      duration: 40
    }
  ];

  const tutorial = [
    {
      id: 21,
      title: "How to apply this face cream the right way",
      influencer: "Deepika Padukone",
      designation: "Fashion Stylist",
      price: 499,
      vidUri: "video link to be stored here",
      duration: 40
    },

    {
      id: 22,
      title: "How to apply this face cream the right way",
      influencer: "Smudg",
      designation: "Recommended for you",
      price: 0,
      vidUri: "video link to be stored here",
      duration: 40
    },

    {
      id: 23,
      title: "How to apply this face cream the right way",
      influencer: "Deepika Padukone",
      designation: "Fashion Stylist",
      price: 499,
      vidUri: "video link to be stored here",
      duration: 40
    },

    {
      id: 24,
      title: "How to apply this face cream the right way",
      influencer: "Deepika Padukone",
      designation: "Fashion Stylist",
      price: 666,
      vidUri: "video link to be stored here",
      duration: 40
    }
  ]

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
  );
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
