import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({ route, onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.label}>Digite o título do post:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => { setTitle(text) }}
      />
      <Text style={styles.label}>Digite o conteúdo do post:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <View style={{ margin: 20 }}>

        <Button
          color='#189ad3'
          title='save blog post'
          onPress={() => onSubmit(title, content)}
        />
      </View>
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    margin: 10
  },
  input: {
    borderColor: 'black',
    borderBottomWidth: 2,
    margin: 10
  }
})

export default BlogPostForm
