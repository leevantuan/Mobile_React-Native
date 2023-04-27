import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

export default function Menu(props) {

    const [all, setAll] = useState(true)
    const [tra, setTra] = useState(false)
    const [ts, setTs] = useState(false)
    const [coffee, setCoffee] = useState(false)
    const [cart, setCart] = useState(false)


    const [filters, setFilters] = useState('')

    const Dispatch = useDispatch();
    const ProductSelector = useSelector((state) => state.product)

    const FilterProduct = ProductSelector.filter((item) => {
        return item.category === filters;
    }).map(({ id, name, category, price, sale, img, newItem }) => {
        return { id, name, category, price, sale, img, newItem };
    });

    const HandleAll = (e) => {
        setAll(true)
        setFilters('')

        setTra(false)
        setTs(false)
        setCoffee(false)
    }

    const HandleNuocEp = () => {
        setAll(false)
        setFilters('Trà')

        setTra(true)
        setTs(false)
        setCoffee(false)
    }
    const HandleTraSua = () => {
        setAll(false)
        setFilters('Trà Sữa')

        setTra(false)
        setTs(true)
        setCoffee(false)
    }
    const HandleCoffee = () => {
        setAll(false)
        setFilters('Coffee')

        setTra(false)
        setTs(false)
        setCoffee(true)
    }
    return (
        <ScrollView style={{ backgroundColor: "#ffff66", minHeight: 800 }}>
            <Text
                style={{
                    marginTop: 60,
                    marginLeft: 30,
                    fontSize: 24,
                    fontWeight: "bold"
                }}
            >The Menu</Text>
            <View
                style={{
                    marginTop: 100,
                    backgroundColor: "#fff",
                    minHeight: 800,
                    borderWidth: 5,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    position: "relative"
                }}
            >
                <Image
                    style={{
                        display: "flex",
                        alignSelf: "center",
                        justifyContent: "center",
                        width: 150,
                        height: 200,
                        position: "absolute",
                        top: -120
                    }}
                    source={require("../../../assets/Product/sale2.png")} />
                <View
                    style={{
                        position: "absolute",
                        top: 100,
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        style={[styles.btnFilter, all ? styles.active : null]}
                        onPress={HandleAll}
                    ><Text>All</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnFilter, tra ? styles.active : null]}
                        onPress={HandleNuocEp}
                    ><Text>Trà</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnFilter, ts ? styles.active : null]}
                        onPress={HandleTraSua}
                    ><Text>Trà Sữa</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnFilter, coffee ? styles.active : null]}
                        onPress={HandleCoffee}
                    ><Text>Coffee</Text></TouchableOpacity>
                </View>

                {
                    all ? <View
                        style={{
                            marginTop: 150,
                            marginBottom: 80
                        }}
                    >
                        {ProductSelector.map((e) => {
                            return (
                                <TouchableOpacity
                                    key={e.id}
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "row",
                                        width: 350,
                                        height: 120,
                                        marginLeft: 20,
                                        marginTop: 10,
                                        backgroundColor: "#fff",
                                        shadowColor: "#000000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 7,
                                        },
                                        shadowOpacity: 0.21,
                                        shadowRadius: 7.68,
                                        elevation: 10,
                                    }}
                                    onPress={() => props.navigation.navigate('Description', { productId: e.id })}
                                >
                                    <Image
                                        style={{
                                            height: 100,
                                            width: 100,
                                            marginTop: 20,
                                            marginLeft: 20,
                                            borderRadius: 20
                                        }}
                                        source={e.img} />
                                    <View
                                        style={{
                                            marginLeft: 20,
                                            marginTop: 20,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: "bold"
                                            }}
                                        >{e.name}</Text>
                                        <Text
                                            style={{
                                                color: "gray"
                                            }}
                                        >{e.category}</Text>
                                        <Text
                                            style={{
                                                color: "red"
                                            }}
                                        >{e.price} <Text style={{ color: "black", marginLeft: 10 }}>đ</Text></Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}

                    </View> : null
                }

                {
                    <View
                        style={{
                            marginTop: 150,
                            marginBottom: 80
                        }}
                    >
                        {FilterProduct.map((e) => {
                            return (
                                <TouchableOpacity
                                    key={e.id}
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "row",
                                        width: 350,
                                        height: 120,
                                        marginLeft: 20,
                                        marginTop: 10,
                                        backgroundColor: "#fff",
                                        shadowColor: "#000000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 7,
                                        },
                                        shadowOpacity: 0.21,
                                        shadowRadius: 7.68,
                                        elevation: 10,
                                    }}
                                    onPress={() => props.navigation.navigate('Description', { productId: e.id })}
                                >
                                    <Image
                                        style={{
                                            height: 100,
                                            width: 100,
                                            marginTop: 20,
                                            marginLeft: 20,
                                            borderRadius: 20
                                        }}
                                        source={e.img} />
                                    <View
                                        style={{
                                            marginLeft: 20,
                                            marginTop: 20,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: "bold"
                                            }}
                                        >{e.name}</Text>
                                        <Text
                                            style={{
                                                color: "gray"
                                            }}
                                        >{e.category}</Text>
                                        <Text
                                            style={{
                                                color: "red"
                                            }}
                                        >{e.price} <Text style={{ color: "black", marginLeft: 10 }}>đ</Text></Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}

                    </View>
                }


            </View>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    btnFilter: {
        borderWidth: 1,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 16,
        paddingRight: 16,
        marginLeft: 15,
        borderRadius: 5,
    },
    active: {
        backgroundColor: "yellow"
    },
    btnCart: {
        marginLeft: 100,
        width: 100,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: "red",
        paddingTop: 4,
        paddingBottom: 4
    },
    btnCart2: {
        marginLeft: 100,
        width: 100,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: "green",
        paddingTop: 4,
        paddingBottom: 4
    }
})