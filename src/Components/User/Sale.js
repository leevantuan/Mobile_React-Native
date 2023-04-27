import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import saleData from '../../Data/SaleData';
import { useSelector } from 'react-redux';

export default function Sale(props) {


    const ProductSelector = useSelector((state) => state.product)

    const ProductNew = ProductSelector.filter(e => e.newItem === true)

    return (
        <View style={styles.container}>

            <ScrollView horizontal={false} style={{ marginBottom: 0 }}>

                <View style={{ backgroundColor: "#fff", paddingBottom: 20 }}>
                    <View
                        style={{
                            padding: 10,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>

                    </View>
                    <View>

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
                </View>

                {/* New item */}

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
        alignSelf: "center",
        marginBottom: 50,
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