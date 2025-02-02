import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ProdcutCart = ({ item, handleLiked}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {
        navigation.navigate("PRODUCT_DETAILS", {item});
    }} style={styles.container}>
        <Image source={{ uri: item.image}} style={styles.coverImage} />
        <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={()=> {handleLiked(item);}} style={styles.likeContainer}>
        {
            item?.isLiked ? (
                <AntDesign name={"heart"} size={20} color={"#E72769"} />
            ): (
                <AntDesign name={"hearto"} size={20} color={"#E72769"} />
            )
        }
            
        </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default ProdcutCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        position: "relative",
    },
    coverImage: {
        height: 256,
        width: "90%",
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: "#444444",
        fontWeight: 600,
    },
    price: {
        color: "#9C9C9C",
        fontSize: 18,
        fontWeight: 600,
    },
    content: {
        paddingLeft: 15,
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
        position: "absolute",
        top: 20,
        right: 20,
    }
})