import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'

import styles from './styles'

export default function ShareButton({ result }) {

    const onShare = async () => {
        await Share.share({
            message: 'Meu IMC hoje é: ' + result
        })
    }

    return (
        <View style={styles.shareButtonContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                <Text style={styles.shareButtonText}>Compartilhar</Text>
            </TouchableOpacity>
        </View>
    );   
}