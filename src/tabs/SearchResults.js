import React from 'react'
import { View, TextInput, Text, StyleSheet, Button} from 'react-native'
// import { MaterialIcons} from '@expo/vector-icons'

const SearchResults = () => {
    const submitHandler = () => {

    }
    return (
    <View>
        <Text>Search Movie/TV Show Name*</Text>
        {/* <MaterialIcons/> */}
        <TextInput style={styles.textInput}
                  placeholder='i.e. James Bond, CSI'
        />
        <Text>Choose Search Type*</Text>

        <TextInput style={styles.textInput}/>
        {/* <MaterialIcons/> */}
        <Button onPress={() => submitHandler()}
                title='Search'
                
        />
      
    </View>
  )
}
const styles = StyleSheet.create({
    textInput:{
        backgroundColor: '',
    }
})

export default SearchResults
