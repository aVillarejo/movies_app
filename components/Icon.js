import React from 'react'
import { Image } from 'react-native'

const Icon = ({ color, size = 20, source, ...props }) => {
  return (
    <Image
      style={{ width: size, height: size, tintColor: color }}
      source={source}
      {...props}
    />
  )
}

export default Icon
