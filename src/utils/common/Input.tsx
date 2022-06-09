import React, { useRef, useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, KeyboardType, StyleProp, StyleSheetProperties } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GStyles from '../../assets/styles/GeneralStyles';
import colors from '../colors';
import { fontSz, hp, wp } from '../config';

interface CustomInputProps {
    placeholder?: String ;
    onChangeText?: Function; 
    value?: any; 
    onFocus?: Function; 
    onBlur?: Function; 
    autoCapitalize?: any;
    textInputStyle?: any; 
    onChange?: Function ;
    placeholderColor?: String; 
    textAlignVertical?: String; 
    multiline?: any;
    error?: any; 
    autoFocus?: any;
    maxLength?: Number;
    icon?: any;
    iconPress?: Function;
    containerStyle?: any;
    keyboard?: KeyboardType
    label?: String;
    errorMsg?: String;
    password?: Boolean;
    secureTextEntry?: any;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
    let inputRef = useRef(null);
    const [secure, setSecure] = useState(true)
    const [borderColor, setBorderColor] = useState('transparent');

    const handleOnblur = () => {
        setBorderColor('transparent');
    };
    const hitslopConfig = {right: wp(10), left: wp(10), top: hp(10), bottom: hp(10)}

    const { inputStyle } = styles;
    const { textPoppins, flexRow } = GStyles

    const { 
            placeholder, 
            onChangeText, 
            value, 
            onFocus, 
            onBlur, 
            autoCapitalize,
            textInputStyle, 
            onChange, 
            placeholderColor, 
            textAlignVertical, 
            multiline, 
            keyboard, 
            error, 
            autoFocus,
            maxLength,
            icon,
            iconPress,
            containerStyle,
            password,
            secureTextEntry
    } = props;
    
    return(
        <View 
            style={[styles.container, containerStyle]}>
            <View style={[flexRow, styles.inputContainer]}>
            <TextInput
                style={[
                    inputStyle, 
                    textInputStyle, 
                    textPoppins,
                    {borderColor: error ? colors.magenta : borderColor},
                ]}
                onChangeText={onChangeText}
                autoCorrect={false}
                value={value}
                onBlur={error ? onBlur : handleOnblur}
                onFocus={() => setBorderColor(colors.purple)}
                autoCapitalize={autoCapitalize || 'none'}
                placeholder={placeholder || ' '}
                onChange={onChange}
                keyboardType={keyboard} 
                maxLength={maxLength}
                multiline={multiline}
                secureTextEntry={secureTextEntry && secure}
                placeholderTextColor={placeholderColor || colors.grayOutline} 
                textAlignVertical={textAlignVertical || "center"}
                ref={ref => inputRef = ref}
                autoFocus={autoFocus}
            />
            {password && 
                <TouchableOpacity
                    hitSlop={hitslopConfig}
                    style={{marginLeft: wp(-30)}} 
                    onPress={() => setSecure(secure => !secure)}>
                    {secure ? <Icon name='ios-eye' color={'#CCD2E3B2'} size={fontSz(36)} />
                    : <Icon name='ios-eye-off' color={'#CCD2E3B2'} size={fontSz(36)} />}
                </TouchableOpacity>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    inputContainer: {
        alignItems: 'center'
    },
    inputStyle: {
        fontSize: fontSz(16),
        color: colors.white,
        paddingHorizontal: wp(18),
        borderWidth: wp(1),
        borderRadius: hp(18),
        backgroundColor: colors.darkBlue,
        width: '100%',
        height: hp(65),
    },
    iconStyle: {
        flex: 1.5,
        alignItems: 'center'
    }
});

export { CustomInput };