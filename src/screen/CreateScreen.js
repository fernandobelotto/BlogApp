import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <View>
      <Text style={styles.label}>aqui é para criar um blog!</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => { setTitle(text) }}
      />
      <Text style={styles.label}>aqui é para criar um blog!</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title='save blog' onPress={() => {
          addBlogPost(title, content)
          navigation.navigate('BlogApp')
        }}
      />
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 10
  }
})
