import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { SIZES } from '../constants'

// const Header = () => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.headerButton}>
//         <Image
//           source={icons.playButton}
//           style={styles.profilePhoto}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.headerButton}>
//         <Image
//           source={icons.airplay}
//           style={styles.airplay}
//         />
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: SIZES.padding
//   },
//   headerButton: {
//     alignItems: 'center',
//     height: 50,
//     justifyContent: 'center',
//     width: 50
//   },
//   profilePhoto: {
//     borderRadius: 20,
//     height: 40,
//     tintColor: COLORS.lightGray,
//     width: 40
//   },
//   airplay: {
//     width: 25,
//     height: 25,
//     tintColor: COLORS.primary
//   }
// })

const Header = ({ left, right, fixed }) => {
  return (
    <View style={fixed ? [styles.headerContainer, styles.fixed] : styles.headerContainer}>
      {left}
      {right}
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding
  },
  fixed: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    zIndex: 999
  }
})

export default Header
