import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Box, Button, Divider, Heading, Text, Image } from 'native-base'


const MovieList = ( props ) => {
    const { title, image, popularity, date, overview , navigation } = props
   
    return (
        <View>
            <Box style={ styles.container }>
                <Box>
                    <Image alt={ title } source={{ uri:`https://image.tmdb.org/t/p/w500${image}`}} size={'xl'} style={ styles.image }/>
                </Box>
                <Box style={ styles.rightBox }>
                    <Heading style={ styles.heading }>{ title }</Heading> 
                    <Text>Popularity: { popularity }</Text> 
                    <Text>Release Date: { date }</Text> 
                    <Button
                        onPress={() => (
                            navigation.navigate('SingleStack', {title, image, popularity, date, overview})
                        )} 
                        style={styles.listBtn}
                    >
                        More Details    
                    </Button>
                </Box>
            </Box>
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        marginRight: 30,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    image: {
        width: 100,
        height: 100,
    },
    rightBox : {
        marginLeft: 10,
        justifyContent: 'center',
    },
    heading:{
        fontSize: 15,
    },
    listBtn: {
        width: 250,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
    }
})
export default MovieList