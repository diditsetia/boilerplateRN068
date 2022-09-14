import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import BerandaScreen from '../screens/beranda_screen'
import AccountScreen from '../../account/screens/account_screen'
import { ScreenName } from '../../../utils/constan'

enableScreens()
const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()


const BerandaStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.berandaScreen}
          component={BerandaScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
  }

  const AccountStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.accountScreen}
          component={AccountScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
  }


const DashboardScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name={'Beranda'} component={BerandaStack} />
        <Tab.Screen name={'Account'} component={AccountStack} />
      </Tab.Navigator>
    )
  }
  
  export default DashboardScreen