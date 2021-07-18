import React from 'react'
import { FlatList, Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS, FONTS, icons, SIZES } from '../constants'
import { Progressbar } from './'

const ContinueWatchingSection = ({ data }) => {
  const navigation = useNavigation()

  const keyExtractor = i => `${i.id}`

  const renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('MovieDetail', { selectedMovie: item })}
      >
        <View
          style={{
            marginLeft: index === 0 ? SIZES.padding : 20,
            marginRight: index === data.length - 1 ? SIZES.padding : 0
          }}
        >
          {/* Thumbnail */}
          <Image
            source={item.thumbnail}
            resizeMode='cover'
            style={{
              width: SIZES.width / 3,
              height: (SIZES.width / 3) + 30,
              borderRadius: 20
            }}
          />

          {/* Name */}
          <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h4 }}>{item.name}</Text>

          {/* ProgressBar */}
          <Progressbar
            containerStyle={{ marginTop: SIZES.radius }}
            barStyle={{ height: 3 }}
            barPercentage={item.overallProgress}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.titleListContainer}>
        <Text style={styles.listTitle}>Continue Watching</Text>
        <Image source={icons.rightArrow} style={styles.icon} />
      </View>
      {/* List */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  )
}

export default ContinueWatchingSection

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding
  },
  titleListContainer: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center'
  },
  listTitle: {
    flex: 1,
    color: COLORS.white,
    ...FONTS.h2
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary
  },
  // FlatList
  contentContainerStyle: {
    marginTop: SIZES.padding
  }
})
