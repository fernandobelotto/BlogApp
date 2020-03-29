import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === id)
  const { addBlogPost } = useContext(Context)
  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  return (
    <View>
      <Text style={styles.label}>aqui é para EDITAR um blog!</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => { setTitle(text) }}
      />
      <Text style={styles.label}>aqui é para EDITAR um blog!</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title='save CHANGE' onPress={() => {
          addBlogPost(title, content)
          navigation.navigate('BlogApp')
        }}
      />
    </View>
  )
}

export default EditScreen

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
