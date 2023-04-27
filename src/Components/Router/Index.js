import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Home from '../User/Home';
import Menu from '../User/Menu';
import Cart from '../User/Cart';
import Favorite from '../User/Favorite';
import Search from '../User/Search';
import Sale from '../User/Sale';
import New from '../User/New';
import Description from '../User/Description';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator >
            <Stack.Screen name="HomeScreen" component={Home}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Shock Sale In Today!" component={Sale} />
            <Stack.Screen name="All New Product!" component={New} />
            <Stack.Screen name="Description" component={Description} />
        </Stack.Navigator>
    );
}
export default function Index() {
    const CartProduct = useSelector(state => state.cart)
    const FavoriteProduct = useSelector(state => state.favorite)

    const quantity = CartProduct.map(e => e.quantity)

    let totals = CartProduct.length;
    // if (CartProduct.length > 0) {
    //     for (let i = 0; i < CartProduct.length; i++) {
    //         let total = quantity[i]

    //         totals = totals + total
    //     }
    // }

    let totalsFv = FavoriteProduct.length;

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Menu') {
                            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
                        }
                        // else if (route.name === 'Cart') {
                        //     iconName = focused ? 'cart' : 'cart-outline';
                        // }
                        // else if (route.name === 'Favorite') {
                        //     iconName = focused ? 'heart' : 'heart-outline';
                        // }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Menu" component={Menu} />
                <Tab.Screen name="Cart" component={Cart}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            iconName = focused
                                ? 'cart'
                                : 'cart-outline';
                            return (
                                <View>
                                    <Text
                                        style={{
                                            zIndex: 99,
                                            marginTop: 10,
                                            position: "absolute",
                                            top: -20,
                                            left: 20,
                                            fontSize: 12,
                                            width: 20,
                                            height: 20,
                                            backgroundColor: "red",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            lineHeight: 20,
                                            borderRadius: 10,
                                            borderWidth: 1,
                                            borderColor: "#fff",
                                        }}
                                    >{totals}</Text>
                                    <Ionicons name={iconName} size={size} color={color} />
                                </View>
                            );
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    }}

                />
                <Tab.Screen name="Favorite" component={Favorite}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            iconName = focused
                                ? 'heart'
                                : 'heart-outline';
                            return (
                                <View>
                                    <Text
                                        style={{
                                            zIndex: 99,
                                            marginTop: 10,
                                            position: "absolute",
                                            top: -20,
                                            left: 20,
                                            fontSize: 12,
                                            width: 20,
                                            height: 20,
                                            backgroundColor: "red",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            lineHeight: 20,
                                            borderRadius: 10,
                                            borderWidth: 1,
                                            borderColor: "#fff",
                                        }}
                                    >{totalsFv}</Text>
                                    <Ionicons name={iconName} size={size} color={color} />
                                </View>
                            );
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}