import { FlatList, View } from 'react-native'
import React from 'react'
import Tuts from './Tuts'

export default function Tutorial({data}) {
  return (
    <View style={{height: '70%'}}>
        <FlatList 
          data={data}
          renderItem={({item, index}) => ( <Tuts key={index} id={item.id} title={item.title} influencer={item.influencer} uri={item.vidUri} desig={item.designation} price={item.price}/> )}
          contentContainerStyle={{overflow: 'hidden', flexGrow: 1}}
      />
    </View>
  )
}
