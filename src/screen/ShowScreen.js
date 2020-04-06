import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === id)
  const title = blogPost.title
  const content = blogPost.content

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  content: {
    fontSize: 18
  },
  icon: {
    fontSize: 42,
    color: '#189ad3',
    marginRight: 15
  }
})
