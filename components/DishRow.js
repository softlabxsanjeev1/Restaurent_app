import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice'

const DishRow = ({ item }) => {
    const dispatch = useDispatch();
    const totalItems = useSelector(state => selectCartItemsById(state, item.id));
    const handleIncrease = () => {
        dispatch(addToCart({ ...item }));
    }
    const handleDecrease = () => {
        dispatch(removeFromCart({ id: item.id }))
    }
    return (
        <>
            <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
                <Image className="rounded-3xl" style={{ height: 100, width: 100 }}
                    source={item.image} />
                <View className="flex flex-1 space-y-3">
                    <View className="pl-3">
                        <Text className="text-xl">{item.name}</Text>
                        <Text className="text-gray-700">{item.description}</Text>
                    </View>
                    <View className="flex-row pl-3 justify-between items-center">
                        <Text className="text-gray-700 text-lg font-bold">
                            &#8377;{item.price}
                        </Text>
                        <View className="flex-row items-center">
                            <TouchableOpacity
                                onPress={handleDecrease}
                                disabled={!totalItems.length}
                                className="p-1 rounded-full"
                                style={{ backgroundColor: themeColors.bgColor(1) }}>
                                <AntDesign name='minus' size={20} />
                            </TouchableOpacity>
                            <Text className="px-3">
                                {totalItems.length}
                            </Text>
                            <TouchableOpacity
                                onPress={handleIncrease}
                                className="p-1 rounded-full"
                                style={{ backgroundColor: themeColors.bgColor(1) }}>
                                <AntDesign name='plus' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </View>
        </>
    )
}

export default DishRow