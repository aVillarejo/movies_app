import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { COLORS, icons, SIZES } from '../constants'

const Header = ({ children }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerButton}>
        <Image
          source={icons.playButton}
          style={styles.profilePhoto}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerButton}>
        <Image
          source={icons.airplay}
          style={styles.airplay}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding
  },
  headerButton: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: 50
  },
  profilePhoto: {
    borderRadius: 20,
    height: 40,
    tintColor: COLORS.lightGray,
    width: 40
  },
  airplay: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary
  }
})

export default Header
