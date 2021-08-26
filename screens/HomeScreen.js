import React from 'react'
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white h-full`, styles.droidSafeArea]}>
            <View style={tw`p-5`}>
                <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={require('../assets/images/logo.png')} />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
})
