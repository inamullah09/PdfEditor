import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../constants/colors'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

export default function Upload({navigation}) {
    const [file, setFile] = useState(null)
    async function uploadDocs(params) {
        setFile(await DocumentPicker.getDocumentAsync())
        console.log(file)
    }
  return (
    <View style={styles.container}>
    <View style={styles.icontext}>
    <FontAwesome name="file-pdf-o" size={70} color={colors.blue} />
      <Text style={styles.text}>Please upload your PDF file</Text>
      <TouchableOpacity style={styles.secondaryButtonContainer} onPress={()=>uploadDocs()}>
        <Text style={styles.buttonText}>Select files</Text>
      </TouchableOpacity>
     
    </View>
    <View style={styles.filesBg}>
        <Text style={styles.fileText}>{!file ? 'No file selected' : file.name}</Text>
    </View>
    
      <TouchableOpacity style={styles.buttonContainer} onPress={()=> {navigation.navigate('Home')}}>
        <Text style={styles.buttonText}>Upload</Text>
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
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    buttonContainer: {
        backgroundColor: colors.blue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: 200,
        elevation: 5
    },
    secondaryButtonContainer: {
        backgroundColor: colors.blue,
        paddingVertical: 7,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        width: 140,
        elevation: 5
    },
    buttonText: {
        fontWeight: '500'
    },
   icontext: {
    alignItems: 'center',
    marginTop: 70
   },
   fileText: {
    color: colors.white,
    fontSize: 18,
   },
   filesBg: {
    backgroundColor: colors.secondary,
    width: "90%",
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    elevation: 10
   }
})