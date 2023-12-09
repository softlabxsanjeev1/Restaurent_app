import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import StarImage from '../assets/images/fullStar.png'


const RestaurantCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('Resturant', { ...item })
        }}>
            <View style={{ shadowColor: themeColors.bgColor(0.2), shadowRadius: 7 }} className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">

                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={StarImage} className="h-4 w-4" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700">
                                ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Feather name='map-pin' size={18} className='text-gray-400' />
                        <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default RestaurantCard