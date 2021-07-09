import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={
        [
          styles.iconStyle,
          { tintColor: focused ? 'red' : 'gray' }
        ]
      }
      />
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 50
  },
  iconStyle: {
    width: 25,
    height: 25
  }
})
