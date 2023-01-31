import React, { useState } from 'react'
import { View,Text, Divider, Button, StyleSheet} from 'react-native'
import MovieList from './MovieList'

const MoviesList = ({displayMovie}) => {
  console.log('あ！',displayMovie)

  
  return (
    <View>
      <MovieList/>
    </View>
  )
}
const styles = StyleSheet.create({
    
})
export default MoviesList
