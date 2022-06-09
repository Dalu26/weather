import React, { useState } from 'react';
import { View, ScrollView, StatusBar, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { MyText, CustomButton, CustomInput } from '../utils/common/index';
import { wp, hp, fontSz } from '../utils/config';
import colors from '../utils/colors';
import GoogleIcon from '../assets/svgs/login/google.svg';
import AppleIcon from '../assets/svgs/login/apple.svg';
import { setUserData } from '../redux/actions/index';
import { setUser } from '../utils/helpers';

interface LoginProps {
    navigation?: NavigationProp
}

const user = {
    email: 'weather@gmail.com',
    password: 'weather'
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
    const dispatch = useDispatch()
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [usernameError, setusernameError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [loading, setloading] = useState(false);

    const toHome = () => {
        navigation.navigate('Tabs')
    }

    const login = () => {
        setloading(true)
        if(passwordError){
            setpasswordError(false);
        }
        if(usernameError){
            setusernameError(false);
        }
        Keyboard.dismiss()
        setTimeout(() => {
            if(username !== user.email){
                setusernameError(true);
                setloading(false);
            }
            if(password !== user.password){
                setpasswordError(true);
                setloading(false);
            }
            if(username === user.email && password === user.password){
                setloading(false);
                dispatch(setUserData(user));
                setUser(user);
                toHome();
            }
        }, 2500)
    }

    return(
        <ScrollView contentContainerStyle={styles.wrapper}>
           <StatusBar 
                translucent={true} 
                barStyle='light-content' 
                backgroundColor="rgba(127, 76, 210, 1)" 
            />
            <LinearGradient 
                colors={['rgba(127, 76, 210, 1)', 'rgba(41, 24, 101, 1)']}
                style={styles.container}
                start={{x: 0.5, y: 0.1}}>
                <View>
                    <MyText style={styles.header}>Login</MyText>
                    <MyText style={styles.description}>Enter your account details to login.</MyText>
                    <CustomInput
                        value={username}
                        onChangeText={(value: string) => setusername(value)} 
                        autoFocus={true}
                        placeholder='Email'
                        keyboard='email-address'
                        containerStyle={styles.input}
                        placeholderColor={colors.white}
                        editable={!loading}
                        error={usernameError} 
                    />
                    <CustomInput
                        value={password}
                        onChangeText={(value: string) => setpassword(value)}
                        keyboard='default'
                        secureTextEntry={true}
                        password={true}
                        placeholder='Password'
                        placeholderColor={colors.white}
                        editable={!loading}
                        error={passwordError}
                    />
                    <TouchableOpacity style={styles.forgotPwdWrp}>
                        <MyText style={styles.forgotPwd}>Forgot password?</MyText>
                    </TouchableOpacity>
                    <View style={styles.orWrp}>
                        <View style={styles.divider} />
                        <MyText style={styles.orText}>or</MyText>
                        <View style={styles.divider} />
                    </View>
                    <MyText style={styles.signintext}>Sign in with</MyText>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity
                                activeOpacity={0.8} 
                                style={styles.button}>
                                <GoogleIcon />
                            </TouchableOpacity>
                            <MyText style={styles.btnText}>Google</MyText>
                        </View>
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity
                                activeOpacity={0.8} 
                                style={styles.button}>
                                <AppleIcon />
                            </TouchableOpacity>
                            <MyText style={styles.btnText}>Apple</MyText>
                        </View>
                    </View>
                </View>
                <CustomButton 
                    onPress={() => login()}
                    loading={loading}
                    buttonText={'Login'}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                />
                <TouchableOpacity style={styles.textWrapper}>
                    <MyText style={styles.newUser}>
                        I’m new here 
                    </MyText>
                    <Icon name='arrowright' size={fontSz(20)} color={colors.white} />
                </TouchableOpacity>
            </LinearGradient>
        </ScrollView>
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
        fontSize: fontSz(36),
        lineHeight: hp(48),
        fontWeight: '600',
        fontFamily: 'Poppins-Bold'
    },
    description: {
        fontSize: fontSz(16),
        marginBottom: hp(51)
    },
    btnWrp: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    input: {
        marginBottom: hp(30)
    },
    forgotPwdWrp: {
        alignSelf: 'flex-end'
    },
    forgotPwd: {
        textAlign: 'right',
        fontSize: fontSz(16),
        marginTop: hp(10),
    },
    orWrp: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: hp(16)
    },
    orText: {
        marginHorizontal: wp(5),
        fontSize: fontSz(16)
    },
    divider: {
        height: hp(1),
        backgroundColor: colors.white,
        flex: 1
    },
    signintext: {
        textAlign: 'center',
        fontSize: fontSz(28),
        fontFamily: 'Poppins-Bold',
        lineHeight: hp(31),
        marginBottom: hp(35)
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: hp(58)
    },
    btnWrapper: {
        alignItems: 'center'
    },
    button: {
        height: hp(80),
        width: hp(80),
        borderRadius: hp(40),
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        height: hp(76),
        marginBottom: hp(70)
    },
    textStyle: {
        fontSize: fontSz(28)
    },
    btnText: {
        marginTop: hp(6),
        fontFamily: 'Poppins-Medium'
    },
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    newUser: {
        textDecorationLine: 'underline',
        marginRight: wp(7),
        fontFamily: 'Poppins-Medium',
        fontSize: fontSz(20)
    }
})

export default Login