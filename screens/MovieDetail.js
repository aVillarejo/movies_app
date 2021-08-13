import React from 'react'
import { StyleSheet, Text, ScrollView, TouchableOpacity, ImageBackground, View, Platform } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import { Icon, Header, ProgressBar } from '../components'
import LinearGradient from 'react-native-linear-gradient'

const MovieDetail = ({ route, navigation }) => {
  const { selectedMovie } = route.params
  return (
    <ScrollView
      contentContainerStyle={styles.screenContainer}
      style={{ backgroundColor: COLORS.black }}
    >
      <ImageBackground
        resizeMode='cover'
        source={selectedMovie.details.image}
        style={{
          width: SIZES.width,
          height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
          paddingTop: Platform.OS === 'ios' ? 40 : 20
        }}
      >
        {/* Header */}
        <Header
          // Back Button
          left={
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => navigation.goBack()}
            >
              <Icon
                size={20}
                color={COLORS.white}
                source={icons.leftArrow}
              />
            </TouchableOpacity>
          }
          // Share Button
          right={
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => console.log('Share pressed')}
            >
              <Icon
                size={22}
                color={COLORS.white}
                source={icons.upload}
              />
            </TouchableOpacity>
          }
        />

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end'
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['transparent', '#000']}
            style={{
              width: SIZES.width,
              height: 150,
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{selectedMovie.details.season}</Text>
            <Text style={{ color: COLORS.white, ...FONTS.h1, marginTop: SIZES.base }}>{selectedMovie.name}</Text>
          </LinearGradient>
        </View>
      </ImageBackground>

      {/* Movie Category and Rating */}
      <View style={{
        flexDirection: 'row',
        marginTop: SIZES.base,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        {/* Age */}
        <View style={[styles.categoryContainer, { marginLeft: 0 }]}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4
            }}
          >
            {selectedMovie.details.age}
          </Text>
        </View>

        {/* Genre */}
        <View style={[styles.categoryContainer, { paddingHorizontal: SIZES.padding }]}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4
            }}
          >
            {selectedMovie.details.genre}
          </Text>
        </View>

        {/* Rating */}
        <View style={styles.categoryContainer}>
          <Icon
            size={15}
            source={icons.star}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white,
              ...FONTS.h4
            }}
          >
            {selectedMovie.details.ratings}
          </Text>
        </View>
      </View>

      {/* ProgressBar and Continue Watching */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          justifyContent: 'space-around'
        }}
      >
        {/* Title, running time and progressbar */}
        <View>
          {/* Title and running time */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: SIZES.radius
            }}
          >
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.h3
              }}
            >
              {selectedMovie.details.currentEpisode}
            </Text>
            <Text
              style={{
                color: COLORS.lightGray,
                ...FONTS.body3
              }}
            >
              {selectedMovie.details.runningTime}
            </Text>
          </View>
          {/* Progress bar */}
          <ProgressBar
            containerStyle={{ marginTop: SIZES.radius }}
            barStyle={{ height: 5, borderRadius: 3 }}
            barPercentage={selectedMovie.details.progress}
          />
        </View>
        {/* Watch Now */}
        <TouchableOpacity
          style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: Platform.OS === 'ios' ? SIZES.padding * 2 : 0,
            borderRadius: 15,
            backgroundColor: COLORS.primary
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2
            }}
          >
            {selectedMovie.details.progress === '0%'
              ? 'WATCH NOW'
              : 'CONTINUE WATCH'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.black
  },
  headerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: COLORS.transparentBlack
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: 3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.gray1
  }
})
