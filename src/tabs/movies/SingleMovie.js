import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { Box, Image, Heading } from 'native-base'

const SingleMovie = ({ route }) => {
  const { title, image, popularity, date, overview } = route.params

  return (
    <View style={styles.container}>
      <Heading style={styles.heading}>{title}</Heading>
      <Image alt={title} source={{uri:`https://image.tmdb.org/t/p/w500${image}`}} size={'xl'} style={styles.image}/>
      <Box style={styles.box}>
        <Text style={styles.overview}>{overview}</Text>
      </Box>
      <Box style={styles.box}>
        <Text style={styles.text}>Popularity: {popularity} | Release Date: {date}</Text>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  heading: {
    marginBottom: 40,
  },
  image: {
    width: 250,
    height: 250,
  },
  box: {
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 400,
  },
  overview: {
    color: 'gray',
  },
  text: {
    color: 'grey',
  }
})
export default SingleMovie