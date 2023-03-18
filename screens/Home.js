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
            name: 'PDF to Word'
        },
        {
            choiceId: 2,
            name: 'PDF to JPG'
        },
        {
            choiceId: 3,
            name: 'Extract PDF'
        },
        {
            choiceId: 4,
            name: 'Merge PDF'
        },
        {
            choiceId: 5,
            name: 'Split PDF'
        },
        {
            choiceId: 6,
            name: 'Add Pages'
        },
        {
            choiceId: 7,
            name: 'Remove Pages'
        },
        {
            choiceId: 8,
            name: 'Word to PDF'
        },
        {
            choiceId: 9,
            name: 'Excel to PDF'
        },
        {
            choiceId: 10,
            name: 'PPTX to PDF'
        },
        {
            choiceId: 11,
            name: 'Compress PDF'
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
       <TouchableOpacity onPress={() => {navigation.navigate("Upload")}}>
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