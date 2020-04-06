import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import IndexScreen from './src/screen/IndexScreen'
import ShowScreen from './src/screen/ShowScreen'
import CreateScreen from './src/screen/CreateScreen'
import EditScreen from './src/screen/EditScreen'

const Stack = createStackNavigator()

const Nav = () => {
  const header = {
    headerStyle: {
      backgroundColor: '#189ad3'
    },
    headerTintColor: '#FFF'
  }

  const header2 = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#189ad3'
    },
    headerTintColor: '#FFF',
    headerRight: () =>
      (
        <TouchableOpacity onPress={() => navigation.navigate('BlogCreate')}>
          <AntDesign name='pluscircleo' style={{ color: 'white', fontSize: 35, marginRight: 20 }} />
        </TouchableOpacity>
      )
  })

  const header3 = ({ navigation, route }) => ({
    headerStyle: {
      backgroundColor: '#189ad3'
    },
    headerTintColor: '#FFF',
    headerRight: () =>
      (
        <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { id: route.params.id })}>
          <Feather name='edit' style={{ color: 'white', fontSize: 35, marginRight: 20 }} />
        </TouchableOpacity>
      )
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='IndexScreen' component={IndexScreen} options={header2} />
        <Stack.Screen name='Show' component={ShowScreen} options={header3} />
        <Stack.Screen name='BlogCreate' component={CreateScreen} options={header} />
        <Stack.Screen name='EditScreen' component={EditScreen} options={header} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav
