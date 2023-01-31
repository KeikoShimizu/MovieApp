import React, { useState } from 'react'
import { View,StyleSheet} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import MoviesList from './MoviesList'

//Fetch data
import axios from 'axios'
import { API_KEY, BASE_POPULAR_URL, BASE_NOWPLAYING_URL, BASE_TOPRATED_URL, BASE_UPCOMING_URL } from '../../components/config/api_config'


const DropMenu = () => {
    //Dorpdown menu
    const lists = ["popular", "now_playing", "tip_rate", "up_coming"]
    //Store movie data
    const [displayMovie, setDisplayMovie ] = useState([])

    const chooseCategory = (selectedItem) => {
        
        if (selectedItem == 'popular'){
            axios.get(`${BASE_POPULAR_URL}${API_KEY}`)
                .then((response) => {
                    setDisplayMovie(response.data)
                    // console.log('これです',displayMovie)
            })
            .catch(error => console.log('HAHA',error))
            //ここにnavigateも入れる 

        } else if(selectedItem == 'now_playing') {
            axios.get(`${BASE_NOWPLAYING_URL}${API_KEY}`)
                .then((response) => {
                    setDisplayMovie(response.data)
                    // console.log(displayMovie)
            })
            .catch(error => console.log('mama',error))
            //ここにnavigateも入れる 

        } else if (selectedItem == 'tip_rate') {
            axios.get(`${BASE_TOPRATED_URL}${API_KEY}`)
                .then((response) => {
                    setDisplayMovie(response.data)  
                    // console.log(displayMovie)           
            })
            .catch(error => console.log('tata',error))
            //ここにnavigateも入れる 
        } else if (selectedItem == 'up_coming'){
            axios.get(`${BASE_UPCOMING_URL}${API_KEY}`)
                .then((response) => {   
                    setDisplayMovie(response.data)  
                    // console.log(displayMovie)
                })
                .catch(error => console.log('tot',error))
            //ここにnavigateも入れる 
        }
    }
    
  return (
    <View>
        <SelectDropdown
              data={lists}
              onSelect={(selectedItem) => {
                  chooseCategory(selectedItem)
              }}
        />
        <MoviesList displayMovie={displayMovie}/>
    </View>
  )
}
const styles = StyleSheet.create({
    
})
export default DropMenu 
