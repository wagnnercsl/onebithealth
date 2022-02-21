import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'

export default function ListImc({ items }) {
    console.log(items)
    return (
        <FlatList
            style={styles.listImc} 
            data={items}
            renderItem={({ id, imc }) => (
                <View key={id}>
                    <Text style={styles.listImcLabel}>IMC foi de:</Text>
                    <Text style={styles.listImcValue}>{imc}</Text>
                </View>
                )
            }
            keyExtractor={(item) => item.id}
        />
    );   
}