import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

export default function Cards({data, height}) {
  return (
    <View style={{height: `${height}`}}>
      <FlatList 
          data={data}
          renderItem={({item, index}) => ( <Card key={index} id={item.id} title={item.title} feat={item.feat} uri={item.vidUri} vidLen={item.duration}/> )}
          contentContainerStyle={{overflow: 'hidden', flexGrow: 1}}
      />
    </View>
  )
}

const styles = StyleSheet.create({})