import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={(i) => {
          return (
            <View style={styles.listView}>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate('BlogView', { id: i.item.id }) }}>
                <Text style={styles.header}>{i.item.title} - {i.item.id}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(i.item.id)}>
                <Feather style={styles.icon} name='trash-2' />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({
  listView: {
    flexDirection: 'row',
    margin: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  },
  header: {
    flex: 1,
    fontSize: 20,
    marginBottom: 10
  },
  icon: {
    fontSize: 26,
    alignSelf: 'center',
    color: 'grey'
  }
})
