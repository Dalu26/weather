import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { fontSz } from '../../utils/config';

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  flexRow: {
    display: 'flex', 
    flexDirection: 'row',
  },
  centerContentStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  lowerCase: {
    textTransform: 'lowercase',
  },
  textWhite: {
      color: colors.white,
  },
  textBlack: {
    color: colors.black,
  },
  textGrey: {
    color: colors.grey,
  },
  textItalic: {
    fontStyle: 'italic',
  },
  textOffWhite: {
    color: colors.offwhite,
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  textPoppins: {
    fontFamily: 'Poppins-Regular',
  },
  textPoppinsItalic: {
    fontFamily: 'Poppins-Italic',
  },
  textPoppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
  textPoppinsMediumItalic: {
    fontFamily: 'Poppins-MediumItalic',
  },
  textPoppinsBold: {
    fontFamily: 'Poppins-Bold',
  },
  textPoppinsBoldItalic: {
    fontFamily: 'Poppins-BoldItalic',
  },
  backgroundBlue: {
    // backgroundColor: colors.blue
  },
  textF8: {
    fontSize: fontSz(8)
  },
  textF10: {
    fontSize: fontSz(10)
  },
  textF12: {
    fontSize: fontSz(12)
  },
  textF14: {
    fontSize: fontSz(14)
  },
  textF16: {
    fontSize: fontSz(16)
  },
  textF18: {
    fontSize: fontSz(18)
  },
  textF20: {
    fontSize: fontSz(20)
  },
  textF22: {
    fontSize: fontSz(22)
  },
  textF24: {
    fontSize: fontSz(24)
  },
  textF28: {
      fontSize: fontSz(28)
  },
  textF30: {
    fontSize: fontSz(30)
  },
  textF32: {
      fontSize: fontSz(32)
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62, 
  },
});

export default styles;