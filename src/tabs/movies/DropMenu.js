import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Box } from 'native-base'
import axios from 'axios'
import SelectDropdown from 'react-native-select-dropdown'

import { API_KEY } from '../../components/config/api_config'
import { MOVIE_BASE } from '../../components/config/api_config'
import Loading from '../../components/layout/Loading'
import MoviesList from './MoviesList'


const DropMenu = ({ navigation }) => {
    //Dorpdown menu
    const lists1 = ["popular", "now_playing", "top_rated", "upcoming"]
    //Store movie data
    const [displayContents, setDisplayContents ] = useState('')
    //check loading status 
    const [isLoading, setIsLoading] = useState(false)
  
    
    const chooseCategory = (selectedItem) => {    
        axios.get(`${MOVIE_BASE}${selectedItem}?api_key=${API_KEY}`)
            .then((response) => {
                setDisplayContents(response.data)
                DataFetchStatus()

                console.log('fetch movie')
        })
        .catch(error => console.log(selectedItem,error)) 
    }
    
    const DataFetchStatus = () => {
        if(displayContents !== null ) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }

  return (
    <View style={styles.container}>
        <Box style={styles.dropdownbox}>
        <SelectDropdown
              data={lists1}
              style={styles.dropdown}
              defaultButtonText={'Select Category'}
              buttonStyle={styles.dropdownstyle}
              buttonTextStyle={styles.menutext}
              onSelect={(selectedItem) => {
                  chooseCategory(selectedItem)
              }}
        />
        </Box>
        {isLoading == false ? <Loading /> : <MoviesList displayContents={displayContents} navigation={navigation}/>}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
    },
    dropdownbox: {
        marginBottom: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    dropdown: {
        height: 10,
    },
    dropdownstyle: {
        width: '50%',
        height: 35,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderWidth: 1.5,
    },
    menutext: {color: '#444', 
              textAlign: 'left'
    },
});
export default DropMenu 
