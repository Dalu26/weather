import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { MyText } from '../utils/common/index';
import { wp, hp } from '../utils/config';
import GStyles from '../assets/styles/GeneralStyles';


const SplashScreen: React.FC<{}> = () => {
    const { textBlack } = GStyles
    return(
        <SafeAreaView style={styles.container}>
           <StatusBar 
                translucent={true} 
                barStyle='light-content' 
                backgroundColor="rgba(0,0,0,0)" 
            />
            <MyText>Splash Screen</MyText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(35),
        backgroundColor: '#7F4CD2'
    }
})

export default SplashScreen