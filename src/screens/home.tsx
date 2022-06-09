import React, { useEffect, useState } from 'react';
import { 
    View, 
    ScrollView, 
    StatusBar, 
    StyleSheet, 
    SafeAreaView,
    PermissionsAndroid,
    ToastAndroid,
    Alert,
    Platform,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import queryString from 'query-string';
import Geolocation from 'react-native-geolocation-service';
import { NavigationProp } from '@react-navigation/native';
import { MyText } from '../utils/common/index';
import { wp, hp, apikey, fields, fontSz, baseURL } from '../utils/config';
import GStyles from '../assets/styles/GeneralStyles';
import BackgroundImg from '../assets/svgs/home/backgroundImg.png';
import ArrowRight from '../assets/svgs/home/arrow-right.svg';
import Avatar from '../assets/svgs/home/avatar.svg';
import Drawer from '../assets/svgs/home/drawer.svg';
import ArrowDown from '../assets/svgs/home/arrow-down.svg';
import CloudOne from '../assets/svgs/home/cloud-1.svg';
import CloudTwo from '../assets/svgs/home/cloud-2.svg';
import CloudThree from '../assets/svgs/home/cloud-3.svg';
import CloudFour from '../assets/svgs/home/cloud-4.svg';
import Chennai from '../assets/svgs/home/chennai.png';
import Jaipur from '../assets/svgs/home/jaipur.png';

interface HomeProps {
  navigation?: NavigationProp
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [forceLocation, setForceLocation] = useState(true);
  const [highAccuracy, setHighAccuracy] = useState(true);
  const [locationDialog, setLocationDialog] = useState(true);
  const [useLocationManager, setUseLocationManager] = useState(false);
  const [locale, setLocale] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState([])

  const timezone = 'Africa/Lagos';
  const now = moment.utc();
  const startTime = moment.utc(now).add(0, "minutes").toISOString();
  const endTime = moment.utc(now).add(1, "days").toISOString();
  const timesteps = ["current", "1h", "1d"];
  const units = "imperial";


  useEffect(() => {
     getData()
  }, [weatherInfo])

  const getData = async () => {
    await getLocation().then(async () => {
      await getWeather()
    })
  }

  const getWeather = async () => {
    const latitude = locale?.coords?.latitude;
    const longitude = locale?.coords?.longitude;
    const location = [latitude, longitude];

    const getTimelineParameters =  queryString.stringify({
      apikey,
      location,
      fields,
      units,
      timesteps,
      startTime,
      endTime,
      timezone,
    }, {arrayFormat: "comma"})

    await fetch(baseURL + "?" + getTimelineParameters, {method: "GET", compress: true})
    .then((result) => result.json())
    .then((response) => {
      const weather = response?.data?.timelines
      console.log(weather)
      setWeatherInfo(weather)
    })
    .catch((error) => console.error("error: " + error))
  }

  const hasLocationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocale(position);
        console.log(position, 'location');
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocale(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
      },
    );
  };

  const WeatherCard = ({icon, value}) => {
    return (
      <View style={listItemStyles.container}>
        <View>{icon}</View>
        <MyText>{value}</MyText>
      </View>
    );
  };

  const { textPoppinsBold, textF12, textF14, textF16, textF20, flexRow } = GStyles;

    return(
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={{flex: 1}}>
          <StatusBar 
              translucent={true} 
              barStyle='light-content' 
              backgroundColor="rgba(27, 15, 54, 1)" 
            />
            <ImageBackground source={BackgroundImg} style={styles.topView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Avatar />
                <Drawer />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <MyText style={[styles.h1, textPoppinsBold]}>Hyderabad</MyText>
                  <MyText style={styles.p}>20 Apr Wed 20°C/29°C</MyText>
                </View>
                <View>
                  <MyText style={[styles.h1, textPoppinsBold]}>24°C</MyText>
                  <MyText style={styles.p}>Clear sky</MyText>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MyText style={[textF12]}>Swipe down for details</MyText>
                <ArrowDown height={hp(10)} width={wp(20)} />
              </View>
            </ImageBackground>
            <View style={styles.bottomView}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Details')} 
                  activeOpacity={0.8} 
                  style={{flex: 1, marginRight: wp(16)}}>
                  <ImageBackground source={Jaipur} style={styles.card}>
                    <MyText style={[textF20, textPoppinsBold]}>Jaipur 30°C</MyText>
                  </ImageBackground> 
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate('Details')} 
                  activeOpacity={0.8} 
                  style={{flex: 1}}>
                  <ImageBackground source={Chennai} style={styles.card}>
                    <MyText style={[textF20, textPoppinsBold]}>Chennai 22°C</MyText>
                  </ImageBackground>
                </TouchableOpacity>             
              </View>
              <MyText style={{fontSize: fontSz(20)}}>Today</MyText>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: hp(10),
                  alignItems: 'center'
                }}>
                <WeatherCard icon={<CloudOne />} value="24°C" />
                <WeatherCard icon={<CloudTwo />} value="24°C" />
                <WeatherCard icon={<CloudThree/>} value="24°C" />
                <WeatherCard icon={<CloudFour />} value="24°C" />
                <ArrowRight height={hp(20)} width={wp(10)} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(27, 15, 54, 1)',
//     paddingTop: hp(40),
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(27, 15, 54, 1)',
    paddingTop: hp(30)
  },
  topView: {
    height: hp(350),
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1
  },
  bottomView: {
    flex: 1,
    paddingHorizontal: wp(20),
    paddingVertical: hp(25),
    backgroundColor: '#431098',
    marginTop: hp(-20),
    flexDirection: 'column'
  },
  h1: {
    fontSize: hp(28),
    color: '#fff',
  },
  p: {
    fontSize: hp(13),
    color: '#fff',
  },
  card: {
    height: hp(217),
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: hp(25),
    paddingHorizontal: wp(22),
    paddingVertical: hp(22),
    marginBottom: hp(25)
  }
});

const listItemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#622FB5',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    borderRadius: 16,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  value: {
    fontSize: hp(20),
  },
});


export default Home