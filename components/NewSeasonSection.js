import React, { useRef } from 'react'
import {
  Animated,
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View
} from 'react-native'

import { COLORS, FONTS, icons, SIZES } from '../constants/'
import { Profiles, RenderDots } from './'

const NewSeasonSection = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current

  const keyExtractor = i => `${i.id}`

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  )

  const renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZES.width
          }}
        >
          <ImageBackground
            imageStyle={{ borderRadius: 40 }}
            resizeMode='cover'
            source={item.thumbnail}
            style={{
              width: SIZES.width * 0.85,
              height: SIZES.width * 0.85,
              justifyContent: 'flex-end'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                height: 60,
                width: '100%',
                marginBottom: SIZES.radius,
                paddingHorizontal: SIZES.radius
              }}
            >
              {/* Play Now */}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: COLORS.transparentWhite
                  }}
                >
                  <Image
                    source={icons.play}
                    resizeMode='contain'
                    style={{
                      width: 15,
                      height: 15,
                      tintColor: COLORS.white
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: SIZES.base,
                    color: COLORS.white,
                    ...FONTS.h3
                  }}
                >
                  Play Now
                </Text>
              </View>

              {/* Still Watching */}
              {
                item.stillWatching.length > 0 &&
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h4, color: COLORS.white }}>Still Watching</Text>
                    <Profiles profiles={item.stillWatching} />
                  </View>
              }
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <>
      <Animated.FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        decelerationRate={0}
        horizontal
        keyExtractor={keyExtractor}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToAlignment='center'
        snapToInterval={SIZES.width}
      />
      {/* render Dots */}
      <RenderDots
        data={data}
        scrollX={scrollX}
        colors={[COLORS.primary, COLORS.lightGray]}
        containerStyle={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: SIZES.padding
        }}
      />
    </>
  )
}

export default NewSeasonSection

const styles = StyleSheet.create({
  contentContainerStyle: { marginTop: SIZES.radius }
})
