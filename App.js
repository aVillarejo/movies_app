import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { MovieDetail } from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Home'
      >
        <Stack.Screen
          name='Home'
          component={Tabs}
        />
        <Stack.Screen
          name='MovieDetail'
          component={MovieDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
