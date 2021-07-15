import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { COLORS } from '../constants'

const Avatar = ({ source, containerStyle }) => {
  return (
    <View style={containerStyle}>
      <Image
        source={source}
        resizeMode='cover'
        style={styles.image}
      />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: COLORS.black
  }
})
