import React from 'react'
import { View, TextInput, Text, StyleSheet} from 'react-native'
import { Box, Button } from 'native-base'
import { useState } from 'react'
import axios from 'axios'
import SelectDropdown from 'react-native-select-dropdown'

import { API_KEY } from '../../components/config/api_config'
import { SEARCH_BASE } from '../../components/config/api_config'

import Loading from '../../components/layout/Loading'
import MoviesList from '../movies/MoviesList'


const SearchResults = ({ navigation }) => {
    //Dorpdown menu
    const searchlists = ["movie", "multi", "tv"]
    //Store movie data
    const [displayContents, setDisplayContents ] = useState('')
    const [category, setCategory] = useState('')
    const [keyword, setKeyword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [mode, setMode] = useState('search')
    const [error, setError] = useState('true')


    const chooseSearchWord = (category, keyword) => {
        axios.get(`${SEARCH_BASE}${category}?api_key=${API_KEY}&query=${keyword}`)
            .then((response) => {
                setDisplayContents(response.data)
                DataFetchStatus()

                console.log('Fetched Search') 
        })
        .catch(error => console.log(category,error))
    }

    const DataFetchStatus = () => {
        if(displayContents !== null ){
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }

    const errorMsg = () => {
        if(keyword == null){
            setError(false)
        }else{
            return
        }
    }

    return (
    <View style={styles.container}>
        <Box style={styles.searchBox}>
            <Box>
                <Text>Search Movie/TV Show Name<Text style={styles.warning}>*</Text></Text>
                <TextInput  style={styles.textInput}
                            placeholder='i.e. James Bond, CSI'
                            value={keyword}
                            onChangeText={text => setKeyword(text)}
                />
            </Box>
            <Box style={styles.submitArea}>
                <Box style={styles.dropArea}>
                    <Text>Choose Search Type<Text style={styles.warning}>*</Text></Text>
                    <SelectDropdown
                        data={searchlists}
                        style={styles.dropdown}
                        defaultButtonText={'Select Category'}
                        buttonStyle={styles.dropdownstyle}
                        buttonTextStyle={styles.menutext}
                        onSelect={(selectedItem) => {
                            setCategory(selectedItem)
                        }}
                    />
                  
                    { error == false ? <Text style={styles.warning}>movie/TV show is required</Text> : null }
                </Box>
                <Button    onPress={() => {chooseSearchWord(category, keyword),
                                            errorMsg(),
                                        console.log(keyword)}
                            }
                            style={styles.searchBtn}
                >
                    Search    
                </Button>    
            </Box>
        
        </Box>
        <Box>
            {isLoading == false ? <Loading mode={mode}/> : <MoviesList displayContents={displayContents} navigation={navigation}/>}
        </Box>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 10,
    },
    searchBox: {
        margin: 10,
        maxWidth: '100%',
    },
    textInput: {
        backgroundColor: '#e6e6e6',
        borderColor: ' #f2f2f2',
        height: 30,
        borderRadius: '5%',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 3,
    },
    warning: {
        color:'red',
    },
    submitArea: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems:'flex-end',
    },
    dropArea: {
        width: 220,
    },
    dropdown: {
        height: 8,
    },
    dropdownstyle: {
        width: '100%',
        height: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderWidth: 2,
        marginTop: 3,
    },
    menutext: {
        color: '#444', 
        textAlign: 'left'
    },
    searchBtn: {
        marginLeft: 10,
        width: 130,
        height: 40,
    }
})
export default SearchResults