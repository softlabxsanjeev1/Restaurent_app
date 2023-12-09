import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native'
import { themeColors } from '../theme'
import StarImage from '../assets/images/fullStar.png'
import Feather from 'react-native-vector-icons/Feather'
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'
import { StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'
import { setResturant } from '../slices/restaurantSlice.js'


const RestaurantScreen = () => {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;
    const dispatch = useDispatch();
    // console.log("restaurant", item)
    useEffect(() => {
        if (item && item.id) {
            dispatch(setResturant({ ...item }))
        }
    }, [])
    return (
        <View>
            <CartIcon />
            <StatusBar style='light' />
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={item.image} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-6 left-3 bg-gray-50 p-2 rounded-full shadow">
                        <AntDesign name='arrowleft' size={25} style={themeColors.bgColor(1)} />
                    </TouchableOpacity>
                </View>
                {/* section 2 */}
                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-white -mt-12 pt-6">
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{item.name}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <Image source={StarImage} className="h-4 w-4" />
                                <Text className="text-xs">
                                    <Text className="text-green-700">{item.stars}</Text>
                                    <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.type}</Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <Feather name='map-pin' size={18} className='text-gray-400' />
                                <Text className="text-gray-800 text-xs"> Nearby · {item.address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2">{item.description}</Text>
                    </View>
                </View>

                <View className="pb-36 bg-white">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {/* dishes */}
                    {
                        item.dishes.map((dish, index) => {
                            return (
                                <DishRow
                                    key={index}
                                    item={{ ...dish }}
                                // id={dish._id}
                                // name={dish.name}
                                // description={dish.description}
                                // price={dish.price}
                                // image={dish.image}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default RestaurantScreen