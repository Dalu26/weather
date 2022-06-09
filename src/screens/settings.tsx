import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { MyText } from '../utils/common/index';
import { wp, hp } from '../utils/config';
import GStyles from '../assets/styles/GeneralStyles';
import { clearData } from '../utils/helpers';

interface SettingsProp {
    navigation?: NavigationProp
}

const Settings: React.FC<NavigationProp> = ({ navigation }) => {

    const signOut = () => {
        clearData()
        navigation.replace('Splash')
    }

    const { textF28, textPoppinsBold } = GStyles
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar 
                translucent={true} 
                barStyle='light-content' 
                backgroundColor="rgba(0,0,0,0)" 
            />
            <TouchableOpacity
                onPress={() => signOut()} 
                style={styles.logout}>
                <MyText style={[textF28, textPoppinsBold]}>Sign Out</MyText>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(35),
        backgroundColor: 'rgba(27, 15, 54, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logout: {
        padding: hp(15),
        backgroundColor: 'rgba(255, 46, 83, 0.8)',
        borderRadius: hp(10)
    }
})

export default Settings