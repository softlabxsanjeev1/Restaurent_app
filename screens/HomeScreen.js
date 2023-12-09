import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { themeColors } from '../theme'
import { ScrollView } from 'react-native'
import Categories from '../components/Categories'
import { featured } from '../constants/index.js'
import FeaturedRow from '../components/FeaturedRow.js'


const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white mb-4">
            {/* <StatusBar backgroundColor="#ffff" barStyle="dark-content" /> */}
            <StatusBar style='light' />
            {/* search bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 mt-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <AntDesign name="search1" size={18} className='text-gray-400' />
                    <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Feather name='map-pin' size={18} className='text-gray-400' />
                        <Text className="text-gray-600">New York, NYC</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
                    <Feather name='sliders' size={20} className="text-white" />
                </View>
            </View>

            <ScrollView>
                {/* category section */}
                <Categories />

                {/* featured section */}
                <View className='mt-5'>
                    {
                        [featured, featured, featured].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen