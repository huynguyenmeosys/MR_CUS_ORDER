/*

yarn add react-navigation
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add react-native-screens
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
*/
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {StackRouter} from 'react-navigation'

import {
    HomeScreen,
    MealScreen,
    ReceiptScreen
} from '../screens'

const Stack = createNativeStackNavigator()

const Navigatior = (props) => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
            <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
            <Stack.Screen name={'MealScreen'} component={MealScreen}/>
            <Stack.Screen name={'ReceiptScreen'} component={ReceiptScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default Navigatior