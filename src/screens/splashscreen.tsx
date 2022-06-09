import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { MyText } from '../utils/common/index';
import { wp, hp } from '../utils/config';


const SplashScreen: React.FC<{}> = () => {
    return(
        <SafeAreaView style={styles.container}>
            <MyText>Splash Screen</MyText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(35)
    }
})

export default SplashScreen