import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { enableScreens } from 'react-native-screens';
import SplashScreen from '../screens/splashscreen';
import Login from '../screens/login';
import Tabs from './TabNavigation';
import Details from '../screens/details';

enableScreens()

const RootStack = createStackNavigator()

function AppNavigator() {
    return (
        <RootStack.Navigator 
            intialRouteName={"Splash"}
            screenOptions={{headerShown: false}} 
            options={{gestureEnabled: true}}>
                <RootStack.Screen 
                    name="Splash" 
                    component={SplashScreen} 
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} 
                />
                <RootStack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} 
                />
                <RootStack.Screen 
                    name="Details" 
                    component={Details} 
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} 
                />
                <RootStack.Screen 
                    name="Tabs" 
                    component={Tabs} 
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} 
                />
        </RootStack.Navigator>
    )
}

export default function App() {
    return (
      <NavigationContainer theme={DarkTheme}>
        <AppNavigator />
      </NavigationContainer>
    );
}