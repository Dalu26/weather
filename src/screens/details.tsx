import React, { useState } from 'react';
import { 
    View, 
    ScrollView, 
    StatusBar, 
    StyleSheet, 
    SafeAreaView,
    Platform,
    ImageBackground,
    Pressable, 
    UIManager,
    LayoutAnimation,
    TouchableOpacity
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { MyText } from '../utils/common/index';
import { wp, hp, fontSz } from '../utils/config';
import BackgroundImg from '../assets/svgs/home/background.png';
import SunIcon from '../assets/svgs/home/sun.svg';
import ArrowIcon from '../assets/svgs/home/arrow_left.svg';
import GStyles from '../assets/styles/GeneralStyles';

interface DetailProps {
  navigation?: NavigationProp,
  route?: NavigationProp
}

const Details: React.FC<DetailProps> = ({ navigation, route }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tab = ['Today', 'Hourly', 'Daily'];

  const changeSelectedTab = (index: number) => {
    setSelectedTab(index)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }


  const { textPoppinsBold } = GStyles;

  const ListItem = ({title, value}) => {
    return (
      <View style={listItemStyles.container}>
        <MyText style={listItemStyles.title}>{title}</MyText>
        <MyText>{value}</MyText>
      </View>
    );
  };

    return(
        <SafeAreaView style={styles.container}>
          <ScrollView style={{flex: 1}}>
            <StatusBar 
              translucent={true} 
              barStyle='light-content' 
              backgroundColor="rgba(0,0,0,0)" 
            />
            <ImageBackground source={BackgroundImg} style={styles.topView}>
              <TouchableOpacity style={{paddingLeft: wp(20)}} onPress={() => navigation.goBack()}>
                  <ArrowIcon />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottomView}>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <MyText style={[{ fontSize: fontSz(74)}, textPoppinsBold]}>
                    24°C
                  </MyText>
                  <MyText style={[{fontSize: fontSz(24)}, textPoppinsBold]}>
                    Hyderabad
                  </MyText>
                  <MyText>20 Apr Wed 20°C/29°C</MyText>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <SunIcon />
                  <MyText style={[{fontSize: fontSz(24)}, textPoppinsBold]}>
                    Clear sky
                  </MyText>
                </View>
              </View>
              <View style={styles.listWrp}>
                <ListItem title="Pressure" value="800hcpa" />
                <ListItem title="Precipitation" value="2.0 mm" />
                <ListItem title="Humidity" value="56 %" />
                <ListItem title="Air Quality" value="34" />
                <ListItem title="Wind" value="4 km/h" />
                <ListItem title="Visibility" value="11 km" />
              </View>
              <View style={styles.tabView}>
                <View style={styles.tabContainer}>
                  {tab.map((el, index) => (
                    <Pressable
                      style={[
                        styles.tab,
                        {
                          backgroundColor:
                            index === selectedTab ? '#431098' : 'transparent',
                          borderWidth: index === selectedTab ? 1 : 0,
                        },
                      ]}
                      key={index}
                      onPress={() => changeSelectedTab(index)}>
                      <MyText
                        style={[
                          styles.tabText,                      
                        ]}>
                        {el}
                      </MyText>
                    </Pressable>
                  ))}
                </View>
                <View
                style={{
                  marginBottom: hp(5),
                  marginTop: hp(15),
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <MyText>Now</MyText>
                <SunIcon width={wp(27)} height={hp(27)} />
                <MyText>Clear</MyText>
                <MyText>24°C</MyText>
              </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(27, 15, 54, 1)',
    paddingTop: hp(40),
  },
  topView: {
    height: hp(350),
  },
  bottomView: {
    flex: 1,
    marginTop: -15,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#431098',
  },
  tabContainer: {
    height: 30,
    borderRadius: 50,
    flexDirection: 'row',
    borderColor: '#431098',
    borderWidth: 2,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(50),
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },
  tabText: {
    fontSize: hp(16),
    color: '#fff',
  },
  listWrp: {
      marginVertical: hp(20),
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between', 
  },
  tabView: {
    backgroundColor: '#622FB5', 
    paddingTop: hp(20), 
    paddingBottom: hp(10), 
    paddingHorizontal: wp(20), 
    borderRadius: hp(20),
    height: hp(118),
  }
})

const listItemStyles = StyleSheet.create({
  container: {
    marginHorizontal: wp(11),
    marginBottom: hp(20),
    width: '20%'
  },
  title: {
    color: '#9F7ADD',
    fontSize: hp(12),
  },
  value: {
    fontSize: hp(18),
  },
});

export default Details