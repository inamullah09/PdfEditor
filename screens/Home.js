import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../constants/colors'
import Option from '../components/Option'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Home({navigation}) {
    const [options] = useState([
        {
            choiceId: 1,
            name: 'DOC to PDF'
        },
        {
            choiceId: 2,
            name: 'PDF to DOC'
        },
        {
            choiceId: 3,
            name: 'EXCEL to PDF'
        },
        {
            choiceId: 4,
            name: 'Compress File'
        },
        {
            choiceId: 5,
            name: 'Extract File'
        },
        {
            choiceId: 6,
            name: 'PDF Splitter'
        },
    ])
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Get perfect <Text style={{color: colors.blue}}>Results</Text> with our amazing tools</Text>
      <ScrollView>
      <FlatList
      columnWrapperStyle={{justifyContent: 'center'}}
       data={options}
       renderItem={( option ) => 
       <TouchableOpacity onPress={() => {navigation.navigate("Upload", {
        choiceId: option.item.choiceId
       })}}>
       <Option text={option.item.name} />
       </TouchableOpacity>
       }
       keyExtractor={item => item.choiceId}
       numColumns={2}
       key={item => item.choiceId}
      />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 15,
        paddingTop: 35
    }, 
    mainText: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingBottom: 25 
    }
})