import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../constants/colors'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { convertDocs, uploadFile } from '../apis/api'

export default function Upload({ navigation, route }) {
  const [file, setFile] = useState(null)
  const [fileUploaded, setFileUploaded] = useState(false)
  async function getDocs() {
    setFile(await DocumentPicker.getDocumentAsync())
    await uploadFile(file.uri, file.mimeType, file.name);
  }

  async function uploadDocs(choiceId) {
    console.log(choiceId);
    switch (choiceId) {
      case 1:
        await convertDocs('docToPdf', file.name, 'docsForDocToPdf').then(res => {
          setFileUploaded(true);
        });

        break;
      case 2:
        await convertDocs('PdfToDoc', file.name, 'docsForPdfToDoc').then(res => {
          setFileUploaded(true);
        });
        break;
      case 3:
        await convertDocs('ExcelToPdf', file.name, 'docsForXlsxToPdf').then(res => {
          setFileUploaded(true);
        });
        break;
      case 4:
        await convertDocs('compressFile', file.name, 'docsForCompressFile').then(res => {
          setFileUploaded(true);
        });
        break;
      case 5:
        await convertDocs('extractFile', file.name, 'docsForExtraction').then(res => {
          setFileUploaded(true);
        });
        break;
      case 6:
        await convertDocs('pdfSplitter', file.name, 'docForSplitting').then(res => {
          setFileUploaded(true);
        });
        break;

      default:
        break;
    }
    navigation.navigate('Download');
  }
  return (
    <View style={styles.container}>
      <View style={styles.icontext}>
        <FontAwesome name="file-pdf-o" size={70} color={colors.blue} />
        <Text style={styles.text}>Please upload your PDF file</Text>
        <TouchableOpacity style={styles.secondaryButtonContainer} onPress={() => getDocs()}>
          <Text style={styles.buttonText}>Select files</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.filesBg}>
        <Text style={styles.fileText}>{!file ? 'No file selected' : file.name}</Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => { uploadDocs(route.params.choiceId) }}>
        <Text style={styles.buttonText}>{fileUploaded ? 'Download' : 'Upload'}</Text>
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