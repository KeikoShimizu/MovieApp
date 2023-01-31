import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Tabs = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => Navigation.navigate('Movies', item)}>
            <Text>Movies</Text>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => Navigation.navigate('SearchResults', item)}>
        <Text>Search Results</Text>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => Navigation.navigate('TVShow', item)}>
        <Text>TV Shows</Text>
        </TouchableOpacity>  
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent:'space-around',
        alignItems:'flex-start',
        backgroundColor: 'gray',
        flexDirection:'row',
    }
})
export default Tabs
