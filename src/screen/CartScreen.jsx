import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import CartCard from '../components/CartCard'
import { CartContext } from '../context/CartContext'

const CartScreen = () => {
    const { carts } = useContext(CartContext);

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isCart={true} />
            </View>

            <FlatList
                data={carts}
                ListHeaderComponent={<></>}
                renderItem={CartCard}
                ListFooterComponent={
                    <>
                        <View style={styles.priceContainer}>
                            <View style={styles.priceAndTitle}>
                                <Text style={styles.text}>Total:</Text>
                                <Text style={styles.text}>$119.7</Text>
                            </View>
                            <View style={styles.priceAndTitle}>
                                <Text style={styles.text}>Shipping:</Text>
                                <Text style={styles.text}>$0.0</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.priceAndTitle}>
                            <Text style={styles.text}>Grand Total:</Text>
                            <Text style={[styles.text, { color: "black", fontWeight: "600" }]}>$119.7</Text>
                        </View>
                    </>
                }
                showsVerticalScrollIndicator= {false}
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            />


            <TouchableOpacity style={styles.checkoutContainer}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    headerContainer: {
        marginBottom: 20,
    },
    priceContainer: {
        marginTop: 40,
    },
    priceAndTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    text: {
        color: "#757575",
        fontSize: 18,
    },
    divider: {
        borderWidth: 1,
        borderColor: "#C0C0C0",
        marginVertical: 10,
    },
    checkoutContainer: {
        backgroundColor: "#E72769",
        width: "100%",
        borderRadius: 20,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "600",
        color: "#FFFFFF",
        textAlign: "center",
        padding: 10,
    }
})