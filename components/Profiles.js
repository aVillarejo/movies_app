import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { Avatar } from './'

const Profiles = ({ profiles }) => {
  if (profiles.length <= 3) {
    return (
      <View style={styles.container}>
        {profiles.map((item, index) => (
          <Avatar
            key={`profile-${index}`}
            source={item.profile}
            containerStyle={index === 0 ? null : { marginLeft: -15 }}
          />
        ))}
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        {profiles.map((item, index) => {
          if (index <= 2) {
            return (
              <Avatar
                key={`profile-${index}`}
                source={item.profile}
                containerStyle={index === 0 ? null : { marginLeft: -15 }}
              />
            )
          }
        })}
        <Text style={styles.counterText}>
          +{profiles.length - 3}
        </Text>
      </View>
    )
  }
}

export default Profiles

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  counterText: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.body3
  }
})
