import React from 'react';

import { View, ImageBackground } from 'react-native';

import { Text, Searchbar, Title } from 'react-native-paper'; 

import styles from '../styles/Busca.json';

export default function Main(props) {
    return (
        <View style={styles.container}>
            <Searchbar style={styles.search} />
            <Title style={styles.title}>Categorias</Title>
            <View style={styles.deck}>
                <ImageBackground style={styles.card}>
                    <Text>Bebidas</Text>    
                </ImageBackground>
                <ImageBackground style={styles.card}>
                    <Text>Bebidas</Text>    
                </ImageBackground>                
                <ImageBackground style={styles.card}>
                    <Text>Bebidas</Text>    
                </ImageBackground> 
                <ImageBackground style={styles.card}>
                    <Text>Bebidas</Text>    
                </ImageBackground> 
            </View>
        </View>
    );
}