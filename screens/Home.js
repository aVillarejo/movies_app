import * as React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import { Header, NewSeasonSection, ContinueWatchingSection } from '../components'
import { COLORS, dummyData } from '../constants/'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Home Feed */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
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
