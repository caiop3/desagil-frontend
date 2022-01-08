import React from 'react';

import { View, Text } from 'react-native';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default function Main() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}
