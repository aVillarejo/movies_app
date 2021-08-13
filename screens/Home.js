import * as React from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'

import { Header, Icon, NewSeasonSection, ContinueWatchingSection } from '../components'
import { COLORS, dummyData, icons } from '../constants/'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header
        left={
          <TouchableOpacity
            style={{
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              width: 50
            }}
          >
            <Icon
              size={40}
              color={COLORS.white}
              source={icons.playButton}
            />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity
            style={{
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              width: 50
            }}
            onPress={() => console.log('shared pressed')}
          >
            <Icon
              size={25}
              color={COLORS.primary}
              source={icons.airplay}
            />
          </TouchableOpacity>
        }
      />
      {/* Home Feed */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100
          // marginTop: Platform.OS === 'ios' ? 40 : 20
        }}
        showsVerticalScrollIndicator={false}
      >

        {/* Carrusel */}
        <NewSeasonSection data={dummyData.newSeason} />
        {/* Continue Watching - Horizontal List */}
        <ContinueWatchingSection data={dummyData.continueWatching} />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black
  }
})
