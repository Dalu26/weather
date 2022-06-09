import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { MyText, CustomButton } from '../utils/common/index';
import { wp, hp, fontSz } from '../utils/config';
import GStyles from '../assets/styles/GeneralStyles';
import colors from '../utils/colors';

interface LoginProps {
    navigation?: NavigationProp
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.wrapper}>
           <StatusBar 
                translucent={true} 
                barStyle='light-content' 
                backgroundColor="rgba(98, 47, 181, 1)" 
            />
            <LinearGradient 
                colors={['rgba(98, 47, 181, 1)', 'rgba(27, 15, 54, 1)']}
                style={styles.container}
                start={{x: 0.5, y: 0}}>
                <View style={styles.svgWrp}>

                </View>
                <View style={styles.btnWrp}>
                    <MyText style={styles.header}>My weather app</MyText>
                        <MyText style={styles.description}>
                            Check Live weather updates all over the world with just one tap
                        </MyText>
                    <CustomButton 
                        // onPress={() => toLogin()}
                        buttonText={'Get started'}
                    />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(35),
        paddingHorizontal: wp(25),
        paddingBottom: hp(41),
    },
    wrapper: {
        flex: 1,
        paddingTop: hp(35),
    },
    svgWrp: {
        flex: 1.5,
    },
    textWrp: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    header: {
        fontSize: fontSz(32),
        lineHeight: hp(48),
        fontWeight: '600',
        fontFamily: 'Poppins-Bold'
    },
    description: {
        fontSize: fontSz(16),
        marginTop: hp(9),
        marginBottom: hp(70)
    },
    btnWrp: {
        flex: 1,
        justifyContent: 'flex-end',
    }
})

export default Login