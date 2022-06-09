import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const hp = (val: number) => {
    const num = val / 8.44;
    return heightPercentageToDP(num);
};
  
export const wp = (val: number) => {
    const num = val / 3.88;
    return widthPercentageToDP(num);
};

export const fontSz = (val: number) => RFPercentage(val / 7.6);
