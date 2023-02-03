import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'native-base'
import MovieList from './MovieList'


const  MoviesList = ({ displayContents, navigation }) => {
  
    if (displayContents == null) {
        return console.log('Not fetch yet')
    } else {
        console.log('We fetched!',displayContents.results)
    }
 
    return (
        <View>
            {(displayContents !== null) ? (
                <FlatList
                    data={displayContents.results}
                    renderItem={({ item }) => (
                        <MovieList
                            title={item.title}
                            image={item.poster_path}
                            popularity={item.popularity}
                            date={item.release_date}
                            overview={item.overview}
                            navigation={navigation}
                        />
                    )}
                /> ) :  null 
            }
        </View>
    ) 
}
export default MoviesList