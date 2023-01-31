import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './src/components/Tabs';
import MoviesList from './src/tabs/movies/MoviesList';
import DropMenu from './src/tabs/movies/DropMenu';
// import SearchResults from './src/tabs/SearchResults';



export default function App() {

  console.log('yahh')
  return (
    <View style={styles.container}>
      <Tabs/>
      <DropMenu/>
      <Text>Yahhoo</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
