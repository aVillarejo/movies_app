import React from 'react'
import { Animated, Dimensions, View } from 'react-native'

import { SIZES } from '../constants'

const { width } = Dimensions.get('window')

const RenderDots = ({ data, scrollX, colors, containerStyle, dotStyle }) => {
  const dotPosition = Animated.divide(scrollX, width)
  return (
    <View
      style={containerStyle}
    >
      {data.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        })

        const dotWidth = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [6, 20, 6],
          extrapolate: 'clamp'
        })

        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [colors[1], colors[0], colors[1]],
          extrapolate: 'clamp'
        })

        return (
          <Animated.View
            key={`dot-${index}`}
            opacity={opacity}
            style={{
              backgroundColor: dotColor,
              borderRadius: SIZES.radius,
              height: 6,
              marginHorizontal: 3,
              width: dotWidth
            }}
          />
        )
      })}

    </View>
  )
}

export default RenderDots
