import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import OrderScreen from './src/screen/OrderScreen';
import AccountScreen from './src/screen/AccountScreen';
import CartScreen from './src/screen/CartScreen';
import CategoryScreen from './src/screen/CategoryScreen';
import { CartContext, CartProvider } from './src/context/CartContext';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='HOME' component={HomeScreen} />
      <Stack.Screen name='PRODUCT_DETAILS' component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "#e72769",
            tabBarInactiveTintColor: "#272525",
          }}
        >
          <Tab.Screen name='Home' component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <Entypo
                  name={"home"} size={size} color={color}
                />;
              }
            }}
          />
          <Tab.Screen name='Order' component={OrderScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <FontAwesome name={"reorder"} size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen name='Categories' component={CategoryScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name={"grid-outline"} size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen name='Cart' component={CartScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                const { carts } = React.useContext(CartContext);
                return (
                  <View style={{ position: "relative"}}>
                    <MaterialCommunityIcons name={"cart"} size={size} color={color} />
                    <View style={{
                      height: 14,
                      width: 14,
                      borderRadius: 7,
                      backgroundColor: color,
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: -10,
                      right: -5,
                    }}>
                      <Text style={{ 
                        fontSize: 10, 
                        color: "#FFFFFF",
                        fontWeight: "500"
                      }}>{carts?.length}</Text>
                    </View>
                  </View>
                );
              },
            }}
          />

          <Tab.Screen name='User' component={AccountScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <FontAwesome6 name={"user"} size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}