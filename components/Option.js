import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import { colors } from '../constants/colors'

export default function Option(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get("screen").width / 2) - 30,
        height:  (Dimensions.get("screen").width / 2) - 30,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 15,
        margin: 10
    },
     text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
     }
})