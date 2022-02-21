import React from 'react'
import { View, Text } from 'react-native'
import ShareButton from '../ShareButton'
import styles from './styles'

export default function ResultImc({ result, message }) {
    return (
        <View style={styles.resultImc}>
            {result && <ShareButton result={result} /> }
            <Text style={styles.information}>{message}</Text>
            <Text style={styles.numberImc}>{result}</Text>
        </View>
    );   
}