import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const NavOptions = () => {

    const navigation=useNavigation()

    const data = [
        {
            id: '123',
            title: 'Get a ride',
            image: require('../assets/images/UberX.webp'),
            screen: 'MapScreen'
        },
        {
            id: '1234',
            title: 'Order food',
            image: require('../assets/images/food.png'),
            screen: 'EatScreen'
        }
    ]

    return (
        <View>
            <FlatList data={data} 
            horizontal 
            keyExtractor={(item)=>item.id}
            renderItem={({ item }) => (
                <TouchableOpacity 
                onPress={()=>navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`} >
                    <View>
                        <Image style={{ width: 120, height: 120, resizeMode: 'contain' }} source={item.image} />
                        <Text style={tw`mt-2 text-lg font-semibold `} >{item.title}</Text>
                   <Icon
                   style={tw`p-2 bg-black rounded-full w-10 mt-4 `}
                   name="arrowright"
                   color= "white"
                   type='antdesign'
                   />
                    </View>
                </TouchableOpacity>

            )} />
        </View>
    )
}

export default NavOptions

