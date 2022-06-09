import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { MyText } from '../utils/common/index';
import { wp, hp } from '../utils/config';


const Search: React.FC<{}> = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar 
                translucent={true} 
                barStyle='light-content' 
                backgroundColor="rgba(0,0,0,0)" 
            />
            <MyText>Search Screen</MyText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(35),
        backgroundColor: 'rgba(27, 15, 54, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Search