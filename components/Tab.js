import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import  tw  from 'tailwind-react-native-classnames';

export default function Tab({item, onHandle, underline}) {
  return (
    <View 
    style={underline ? [styles.tabContainer, tw`py-5`] : tw`py-5`}>
        <TouchableOpacity style={styles.touchTab} onPress={() => onHandle(item)}>
            <Text style={underline && {fontWeight: 'bold'}}>{item}</Text>
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer:{
    borderBottomWidth: 3,
  },

  touchTab:{
    justifyContent: 'space-between',
  },

})