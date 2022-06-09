import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../screens/home';
import Settings from '../screens/settings';
import Search from '../screens/search';
import Compass from '../screens/compass';
import TabBar from './TabBarComponent';

const Tab = createMaterialTopTabNavigator();

interface MyTabProps {

}

const MyTab: React.FC<MyTabProps> = () => {
    return(
      <Tab.Navigator 
        tabBar={props => <TabBar {...props} />} 
        screenOptions={{
            lazy: true, 
            swipeEnabled: false,
            headerShown: false, 
        }}
        tabBarPosition="bottom">
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
                }} 
            />
            <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
                }} 
            />
            <Tab.Screen 
                name="Compass" 
                component={Compass} 
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
                }} 
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
                }} 
            />
      </Tab.Navigator>
    );
}  
export default MyTab;