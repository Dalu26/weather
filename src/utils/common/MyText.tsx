import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../colors';
import { fontSz } from '../config';

interface MyTextProps {
    onPress?: Function;
    style?: any;
    selectable?: Boolean;
    numberOfLines?: Number
    opacity?: String
}

export const MyText: React.FC<MyTextProps>= (props) => {
    const { 
        children, 
        style, 
        selectable, 
        numberOfLines, 
        onPress, 
        opacity 
    } = props
    const { textStyles } = styles;
    return (
        <Text
            numberOfLines={numberOfLines} 
            onPress={onPress} 
            selectable={selectable} 
            style={[textStyles, style, {opacity: opacity}]}>
            {children}
        </Text>
      )
}

const styles = StyleSheet.create({
    textStyles: {
      fontFamily: 'Poppins-Regular',
      fontSize: fontSz(15),
      color: colors.white,
    },
  });