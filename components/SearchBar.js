import React, { useState } from 'react';
import { View, TextInput, Dimensions, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({ fetchWeatherData }) {

    const [cityName,  setCityName] = useState('');

    return (
        <View style={styles.SearchBar}>
            <TextInput
            placeholder='Entrer le nom de votre ville'
            value={cityName}
            onChangeText={(text) => setCityName(text)} 
            />
            <EvilIcons name="search" size={40} color="black" onPress={() => fetchWeatherData(cityName)} />
        </View>
    )
}

const styles =  StyleSheet.create({
    SearchBar: {
        marginTop: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 20,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray'
    }
})
