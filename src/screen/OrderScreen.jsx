import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'

const OrderScreen = () => {
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
                <Text style={styles.heading}>Comming Soon</Text>
            </View>
        </LinearGradient>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 20,
    },
    heading: {
        fontSize: 28,
        color: "#000000",
        marginTop: 25,
        fontWeight: 600,
        lineHeight: 42,
        marginBottom: 10,
        textAlign: "center",
    },
})