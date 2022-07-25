import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RazorpayModal = () => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Razorpay</Text>
        <TouchableOpacity>
            <Image source={require('../assets/cross.png')} style={styles.cross} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RazorpayModal

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    headingText: {
        fontSize: 20,
        color: '#B4B4B4',
    }
})