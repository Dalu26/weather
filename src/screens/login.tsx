import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { MyText, CustomInput, CustomButton } from '../utils/common/index';
import { wp, hp } from '../utils/config';


const Login: React.FC<{}> = () => {
    return(
        <SafeAreaView style={styles.container}>
            <MyText>Login Screen</MyText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(35)
    }
})

export default Login