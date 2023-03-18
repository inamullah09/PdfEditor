import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../constants/colors'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Splash({navigation}) {
    
  return (
    <View style={styles.container}>
    <View style={styles.icontext}>
    <FontAwesome name="file-pdf-o" size={90} color={colors.blue} />
      <Text style={styles.text}>Welcome to Smart PDF Editor</Text>
     
    </View>
    
      <TouchableOpacity style={styles.buttonContainer} onPress={()=> {navigation.navigate('Home')}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30
    },
    text: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    buttonContainer: {
        backgroundColor: colors.blue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: 200,
    },
    buttonText: {
        fontWeight: '500'
    },
   icontext: {
    alignItems: 'center',
    marginTop: 70
   }
})