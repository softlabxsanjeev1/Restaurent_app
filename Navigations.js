import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import RestaurantScreen from './screens/RestaurantScreen'
import CartScreen from './screens/CartScreen'
import OrderPreparingScreen from './screens/OrderPreparingScreen'
import DeliveryScreen from './screens/DeliveryScreen'


const Navigations = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='Resturant' component={RestaurantScreen} />
                <Stack.Screen name='Cart' options={{ presentation: 'modal' }} component={CartScreen} />
                <Stack.Screen name='OrderPreparing' options={{ presentation: 'fullScreenModal' }} component={OrderPreparingScreen} />
                <Stack.Screen name='Delivery' options={{ presentation: 'fullScreenModal' }} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigations