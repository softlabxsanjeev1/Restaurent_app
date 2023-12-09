import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'


const FeaturedRow = ({ title, description, restaurants }) => {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">
                        {description}
                    </Text>
                </View>

                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-semibold">See All</Text>
                </TouchableOpacity>
            </View>


            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className="overflow-visible py-5"
            >
                {
                    restaurants.map((resturant, index) => {
                        return (
                            <RestaurantCard
                                item={resturant}
                                key={index}
                            // key={resturant._id}
                            // id={resturant._id}
                            // imgUrl={resturant.image}
                            // title={resturant.name}
                            // rating={resturant.rating}
                            // type={resturant.type?.name}
                            // address="123 main street"
                            // description={resturant.description}
                            // dishes={resturant.dishes}
                            // lng={resturant.lng}
                            // lat={resturant.lat}

                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow