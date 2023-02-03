import { Center, Text } from 'native-base'
import { StyleSheet } from 'react-native'

const Loading = (mode) => (
  <Center style={styles.container} >
    {mode == 'search' ? <Text style={styles.text}>Please initiate a search</Text> 
                        : <Text style={styles.text}>Please select a category</Text>
    }
  </Center>
)
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontSize: 20,
  }
});
export default Loading