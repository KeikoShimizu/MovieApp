import React, { useState } from 'react'
import { View, Text, Divider, Button } from 'react-native'

const MovieList = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [popularity, setPopularity] = useState('')
    const [date, setDate] = useState('')
  return (
    <View>
      {/* <Divider/> */}
      <Text>{title}</Text>
      <Text>{image}</Text>
      <Text>{popularity}</Text>
      <Text>{date}</Text>
      {/* <Button >More Details</Button> */}
    </View>
  )
}

export default MovieList

// ここで全部のこの１つのDataObjectをButtonでsinglepageにPropで送る。