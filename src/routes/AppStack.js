import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SingleScreen from './SingleScreen'
import Tabs from '../components/layout/Tabs'

const Stack = createNativeStackNavigator()
// Tabs(movie, search & TV), singlepage 
const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="MovieStack"
                component={Tabs}
                options={{
                    title: 'Movies App',
                    headerStyle: {
                        backgroundColor: '#00264d'
                    },
                    headerTitleStyle: {
                        color: 'white'
                    }
                }}
            />
            <Stack.Screen
                name="SingleStack"
                component={SingleScreen}
                options={
                    ({ route }) => ({ 
                        title: route.params.title,
                    headerBackTitle: "Back to List",
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTitleStyle: {
                        color: 'black'
                    }
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppStack
