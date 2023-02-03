import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Box, View } from 'native-base'
import axios from 'axios'
import SelectDropdown from 'react-native-select-dropdown'

import { API_KEY } from '../../components/config/api_config'
import { TV_BASE } from '../../components/config/api_config'

import Loading from '../../components/layout/Loading'
import TVsList from './TVsList'


const TVShows = ({navigation}) => {
  //Dorpdown menu
  const lists2 = ["airing_today", "on_the_air", "popular", "top_rated"]
  //Store TV data
  const [displayContents, setDisplayContents ] = useState('')
  //check loading status 
  const [isLoading, setIsLoading] = useState(false)


  const chooseCategory = (selectedItem) => {    
      axios.get(`${TV_BASE}${selectedItem}?api_key=${API_KEY}`)
          .then((response) => {
              setDisplayContents(response.data)
              DataFetchStatus()
              
              console.log('fetch TV')
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
      <Box tyle={styles.dropdownbox}>
        <SelectDropdown
              data={lists2}
              style={styles.dropdown}
              defaultButtonText={'Select Category'}
              buttonStyle={styles.dropdownstyle}
              buttonTextStyle={styles.menutext}
              onSelect={(selectedItem) => {
                  chooseCategory(selectedItem)
              }}
        />
      </Box>  
      {isLoading == false ? <Loading/> : <TVsList displayContents={displayContents} navigation={navigation}/>}
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
      marginBottom: 20,
  },
  menutext: {
      color: '#444', 
      textAlign: 'left'
  }
})
export default TVShows
