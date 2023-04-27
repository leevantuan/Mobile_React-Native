import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import saleData from '../../Data/SaleData';
import { useSelector, useDispatch } from 'react-redux';

export default function Home(props) {


    const ProductSelector = useSelector((state) => state.product)

    const ProductNew = ProductSelector.filter(e => e.newItem === true)
    const Dispatch = useDispatch();

    // const todoProduct = ProductSelector.name.includes("T")

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={{
                        width: "100%",
                        height: 200,
                    }}
                    source={require("../../../assets/Product/Banner1.png")} />
                <Image
                    style={{
                        position: "absolute",
                        top: 76,
                        left: 10
                    }}
                    source={require("../../../assets/Product/logo.png")} />

                <TouchableOpacity
                    style={styles.search}
                    onPress={() =>
                        props.navigation.navigate('Search')
                    }
                >
                    <TextInput style={styles.inputSearch} placeholder='Search ...' editable={false} selectTextOnFocus={false} />
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            top: 4,
                            left: 3,
                        }}
                        onPress={() =>
                            props.navigation.navigate('Search')
                        }
                    >
                        <Ionicons name="search" size={24} color="#a0a0a0" />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={false} style={{ marginBottom: 200 }}>

                <View style={{ backgroundColor: "#fff", paddingBottom: 20 }}>
                    <View
                        style={{
                            padding: 10,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        <Text
                            style={{
                                color: "#404040",
                                fontSize: 24,
                            }}
                        >Shock Sale... <Text style={{ color: "red", fontWeight: "bold" }} >In Today!</Text></Text>
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate('Shock Sale In Today!')
                            }
                        >
                            <AntDesign
                                name="rightcircle"
                                size={24} color="gray"
                                style={{ marginTop: 8 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal contentContainerStyle={{ minWidth: 600, height: 220 }}>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }} >

                            {saleData.map((e) => {
                                return (
                                    <View style={styles.product} key={e.id}>
                                        <Text
                                            style={styles.SaleItem}
                                        >Sale 50%</Text>
                                        <Image
                                            style={{
                                                marginTop: 10,
                                                width: 80,
                                                height: 130,
                                                alignSelf: "center"
                                            }}
                                            source={e.img} />
                                        <View
                                            style={{
                                                marginLeft: 10,
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Ionicons name="time-outline" size={20} color="gray" />
                                            <Text style={{ marginTop: 1, color: "gray" }} >20 min</Text>
                                        </View>
                                        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }} >{e.name}</Text>

                                        <View style={{ display: "flex", flexDirection: "row" }}>
                                            <Text style={{ marginLeft: 10, color: "red", fontWeight: "bold" }} >{e.newPrice}<Text style={{ color: "black" }}> đ</Text></Text>
                                            <Text
                                                style={{ color: "gray", textDecorationLine: "line-through", paddingLeft: 10 }}
                                            >{e.price}đ</Text>
                                        </View>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>
                </View>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: "#fff"
                    }}
                >
                    <Text
                        style={{
                            paddingLeft: 20,
                            paddingBottom: 10,
                            fontSize: 24,
                            backgroundColor: "#fff"
                        }}
                    >All New Product!</Text>
                    <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate('All New Product!')
                        }
                    >
                        <AntDesign name="rightcircle" size={24} color="gray" style={{ marginTop: 8, marginRight: 10 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal contentContainerStyle={{ minWidth: 600, height: 220, backgroundColor: "#ff3333" }} >

                    {ProductNew.map(e => {
                        return (
                            <TouchableOpacity
                                key={e.id}
                                style={styles.newItem}
                                onPress={() => props.navigation.navigate('Description', { productId: e.id })}
                            >
                                <Text
                                    style={{
                                        position: "absolute",
                                        width: 40,
                                        height: 30,
                                        backgroundColor: "yellow",
                                        zIndex: 2,
                                        padding: 4,
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: "red",
                                        borderBottomWidth: 1,
                                    }}

                                >New</Text>
                                <Image
                                    style={{
                                        alignSelf: "center",
                                        width: 120,
                                        height: 120
                                    }}
                                    source={e.img} />
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: 10,
                                        marginTop: 5
                                    }}
                                >
                                    <Ionicons name="star" size={16} color="#CCCC00" />
                                    <Ionicons name="star" size={16} color="#CCCC00" />
                                    <Ionicons name="star" size={16} color="#CCCC00" />
                                    <Ionicons name="star" size={16} color="#CCCC00" />
                                    <Ionicons name="star" size={16} color="#CCCC00" />
                                    <Text style={{ marginLeft: 5 }}>{e.start}K</Text>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        fontWeight: "bold"
                                    }}
                                >{e.name}</Text>

                            </TouchableOpacity>
                        )
                    })}



                </ScrollView>

            </ScrollView>
        </View >
    )
}
const styles = StyleSheet.create({
    product: {
        position: "relative",
        width: 170,
        height: 220,
        borderRadius: 10,
        backgroundColor: "#f2f2f2",
        marginLeft: 15,
        marginRight: 15
    },
    header: {
        position: "relative",
        width: 400,
        height: 200,
    },
    search: {
        position: "absolute",
        bottom: 20,
        left: 30,
        width: 150,
        borderRadius: 3,
        padding: 4,
        paddingLeft: 30,
        backgroundColor: "#fff",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
    },
    newItem: {
        position: "relative",
        width: 170,
        height: 180,
        borderRadius: 5,
        backgroundColor: "#fff",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    SaleItem: {
        position: "absolute",
        top: 0,
        left: -10,
        width: 60,
        height: 20,
        borderRadius: 5,
        backgroundColor: "#ff3333",
        color: "white",
    }

})