import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'

export default function ListImc({ items }) {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listImc} 
            data={items}
            ListHeaderComponent={() => (
                <View style={styles.listImcHeader}>
                    <Text style={styles.listImcHeaderText}>Hist&oacute;rico de IMC</Text>
                </View>
            )}
            renderItem={({ item }) => (
                <Text style={styles.listImcLabel}>IMC foi de: &nbsp;
                    <Text style={styles.listImcValue}>{item.imc}</Text>
                </Text>
                )
            }
            keyExtractor={(item) => item.id}
        />
    );   
}