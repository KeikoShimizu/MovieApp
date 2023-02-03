import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MovieScreen from '../../routes/MovieScreen'
import SearchScreen from '../../routes/SearchScreen'
import TVscreen from '../../routes/TVscreen'


const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MovieScreen} />
      <Tab.Screen name="Search Result" component={SearchScreen} />
      <Tab.Screen name="TV Shows" component={TVscreen} />
    </Tab.Navigator>
  );
}

export default Tabs