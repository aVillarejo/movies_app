import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const Progressbar = ({ containerStyle, barStyle, barPercentage }) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={[
          styles.defaultBarStyle,
          {
            backgroundColor: COLORS.gray,
            ...barStyle
          }
        ]}
      />
      <View
        style={[
          styles.defaultBarStyle,
          {
            backgroundColor: COLORS.primary,
            width: barPercentage,
            ...barStyle
          }
        ]}
      />
    </View>
  )
}

export default Progressbar

const styles = StyleSheet.create({
  defaultBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    marginTop: SIZES.base
  }
})
