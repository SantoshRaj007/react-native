import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
import ProdcutCart from '../components/ProdcutCart';
import data from '../data/data.json';

const categories = ['All', 'Trending Now', 'New', 'Mens', 'Womens']

const HomeScreen = () => {
    const [products,setProducts] = useState(data.products);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleLiked = (item) => {
        const newProducts = products.map((prod) => {
            if (prod.id === item.id) {
                return {
                    ...prod,
                    isLiked: true,
                };
            }
            return prod;
        });
        setProducts(newProducts);
    };

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <Header />
            <Text style={styles.heading}>Match Your Style</Text>
            {/* Input Container */}
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Fontisto name={"search"} size={26} color={"#C0C0C0"} />
                </View>
                <TextInput style={styles.textInput} placeholder='Search' />
            </View>

            {/* Product List */}

            <FlatList
                numColumns={2}
                ListHeaderComponent={
                    <>
                        {/* Category Section */}
                        <FlatList
                            data={categories}
                            renderItem={({ item }) => <Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
                            keyExtractor={(item) => item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
                }
                data={products}
                renderItem={({item, index}) => (
                    <ProdcutCart item={item} 
                        handleLiked={handleLiked} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 200,
                }}
            />

        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 28,
        color: "#000000",
        marginTop: 25,
        fontWeight: 400,
        lineHeight: 42,
        fontFamily: "Poppins",
        marginBottom: 10,
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        height: 48,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 20,
    },
    iconContainer: {
        marginHorizontal: 15,
    },
    textInput: {
        flex: 1,
    }
})