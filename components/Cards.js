import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

export default function Cards({data}) {
  return (
    <View style={{height: '69%'}}>
      <FlatList 
          data={data}
          renderItem={({item, index}) => ( <Card key={index} id={item.id} title={item.title} feat={item.feat} uri={item.vidUri}/> )}
          contentContainerStyle={{overflow: 'hidden', flexGrow: 1}}
      />
    </View>
  )
}

const styles = StyleSheet.create({})