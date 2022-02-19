import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';

export default function ResultImc({ result, message }) {
    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{message}</Text>
            <Text style={styles.numberImc}>{result}</Text>
        </View>
    );   
}