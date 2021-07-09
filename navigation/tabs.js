import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabIcon } from '../components'
import { icons } from '../constants'

// SCREENS
import { Home } from '../screens'

const Tab = createBottomTabNavigator()
const tabBarOptions = {
  showLabel: false,
  style: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: 'black',
    borderTopColor: 'transparent',
    height: 100
  }
}
const Tabs = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
            />
          )
        }}
      />
      <Tab.Screen
        name='Play'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.playButton}
            />
          )
        }}
      />
      <Tab.Screen
        name='Search'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
            />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.profile}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
