import React, { useCallback, useEffect, useState } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet, RefreshControl, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Cart(props) {

    const [ship, setShip] = useState(false)
    const [order, setOrder] = useState(false)
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [table, setTable] = useState("")

    const HandleShip = () => {
        setShip(true)
        setOrder(false)
    }
    const HandleOrder = () => {
        setShip(false)
        setOrder(true)
    }

    const CartProduct = useSelector(state => state.cart)

    const Dispatch = useDispatch()

    const price = CartProduct.map(e => e.price)
    const quantity = CartProduct.map(e => e.quantity)


    let total = 0;
    if (CartProduct.length > 0) {
        for (let i = 0; i < CartProduct.length; i++) {
            let prices = price[i] * quantity[i]

            total = total + prices
        }
    }

    let fullTotal = total + 50000

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 200);
    }, []);


    // const HandelTang = (e) => {
    //     useEffect((e) => {
    //         console.log(e)
    //     }, [e])
    // }

    if (CartProduct.length > 0) {
        return (

            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Text
                    style={{
                        marginTop: 80,
                        marginLeft: 20,
                        fontSize: 24,
                        fontWeight: "bold",
                        letterSpacing: 2
                    }}
                >My order</Text>

                {CartProduct.map((e) => {
                    return (

                        <TouchableOpacity
                            key={e.id}
                            style={{
                                marginTop: 20,
                                marginLeft: 20
                            }}
                            onPress={() => props.navigation.navigate('Description', { productId: e.id })}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#fff",
                                    width: 350,
                                    shadowColor: "#000000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.21,
                                    shadowRadius: 7.68,
                                    elevation: 10,
                                }}
                            >
                                <Image
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: 20,
                                    }}
                                    source={e.img} />
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: "bold",
                                            marginTop: 10,
                                        }}
                                    >{e.name}</Text>
                                    <Text
                                        style={{
                                            color: "gray"
                                        }}
                                    >{e.category}</Text>
                                    <Text
                                        style={{
                                            color: "red",
                                            fontWeight: "bold"
                                        }}
                                    >{e.price} <Text style={{ color: "black" }}>đ</Text></Text>

                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row"
                                        }}
                                    >
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row"
                                            }}
                                        >
                                            <TouchableOpacity
                                                style={styles.btnQuantity}
                                                onPress={() => {
                                                    if (e.quantity <= 1) {
                                                        Dispatch(
                                                            {
                                                                type: "ADD_CART",
                                                                payload: e.id
                                                            }
                                                        )
                                                    } else {

                                                        e.quantity = e.quantity - 1
                                                    }
                                                }
                                                }

                                            >
                                                <Text style={{ alignSelf: "center", lineHeight: 20, fontSize: 20 }}>-</Text>
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: 8, marginRight: 8, marginTop: 2 }} >{e.quantity}</Text>
                                            <TouchableOpacity
                                                style={styles.btnQuantity}
                                                onPress={() => {
                                                    e.quantity = e.quantity + 1
                                                }
                                                }
                                            // onPress={HandelTang(e.quantity)}
                                            >
                                                <Text style={{ alignSelf: "center", lineHeight: 20, fontSize: 20 }}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity
                                            style={styles.btnRemove}
                                            onPress={() => {
                                                e.order = false
                                                Dispatch(
                                                    {
                                                        type: "ADD_CART",
                                                        payload: e.id
                                                    }
                                                )
                                            }}

                                        >
                                            <Text style={{ alignSelf: "center", lineHeight: 35, fontSize: 20 }}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>

                        </TouchableOpacity>
                    )
                })}
                <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 20 }}>Total: {total} vnđ</Text>
                <View style={{ width: "100%", height: 200, marginTop: 30 }}>
                    <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: "bold", color: "#ff3333", letterSpacing: 1 }}>Your Orders</Text>
                    <TouchableOpacity
                        style={[styles.payOrder, ship ? styles.active : null]}
                        onPress={HandleShip}
                    >
                        <FontAwesome5 name="shipping-fast" size={28} color="#ff3333" style={{ marginTop: 10, marginLeft: 20 }} />
                        <Text style={{ maxWidth: 250, marginLeft: 20, marginTop: 5 }}>Online orders from afar are subject to additional shipping charges.</Text>
                    </TouchableOpacity>

                    {
                        ship ? <View>
                            <Text
                                style={{
                                    marginTop: 10,
                                    marginLeft: 25
                                }}
                            >Order Info: {total} vnđ</Text>
                            <Text
                                style={{
                                    marginTop: 5,
                                    marginLeft: 25
                                }}
                            >Ship: 50000 vnđ</Text>
                            <Text
                                style={{
                                    marginTop: 5,
                                    marginLeft: 25
                                }}
                            >Total: {fullTotal} vnđ</Text>
                            <View style={{ marginLeft: 25 }}>
                                <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "bold" }} >Address: <Text style={{ color: "gray" }}>"In the area at Biên Hòa"</Text></Text>
                                <TextInput
                                    placeholder='Enter address'
                                    style={{ borderWidth: 1, width: 300, padding: 5 }}
                                    onChangeText={e => setAddress(e)}
                                    defaultValue={address}
                                />
                            </View>
                            <View style={{ marginLeft: 25 }}>
                                <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "bold" }} >Phone Number: </Text>
                                <TextInput
                                    placeholder='Enter phone number'
                                    style={{ borderWidth: 1, width: 300, padding: 5 }}
                                    onChangeText={e => setPhone(e)}
                                    defaultValue={phone}
                                />
                            </View>
                        </View> : null
                    }

                    <TouchableOpacity
                        style={[styles.payOrder, order ? styles.active : null]}
                        onPress={(HandleOrder)}
                    >
                        <Ionicons name="alarm-outline" size={32} color="#ff3333" style={{ marginTop: 10, marginLeft: 20 }} />
                        <Text style={{ maxWidth: 250, marginLeft: 20, marginTop: 15 }}>Please choose your table.</Text>
                    </TouchableOpacity>

                    {
                        order ? <View>
                            <Text
                                style={{
                                    marginTop: 10,
                                    marginLeft: 25
                                }}
                            >Order Info: {total} vnđ</Text>
                            <Text
                                style={{
                                    marginTop: 5,
                                    marginLeft: 25
                                }}
                            >Total: {total} vnđ</Text>
                            <View style={{ marginTop: 10, marginLeft: 25, display: "flex", flexDirection: "row" }}>
                                <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "bold" }} >Table: </Text>
                                <TextInput
                                    placeholder='Enter a table'
                                    style={{ borderWidth: 1, width: 150, padding: 5 }}
                                    onChangeText={e => setTable(e)}
                                    defaultValue={table}
                                />
                            </View>
                        </View> : null
                    }

                    <TouchableOpacity
                        style={{ width: 250, height: 50, backgroundColor: "green", borderRadius: 10, alignSelf: "center", marginTop: 30 }}
                        onPress={() => {
                            if (ship === true) {
                                if (address === "") {
                                    alert("Enter address Please! ")
                                } else if (phone === "") {
                                    alert("Enter phone number Please!")
                                } else {
                                    alert('Success Order!')
                                    Dispatch(
                                        {
                                            type: "REMOVE_ALL",
                                        }
                                    )
                                }

                            } else if (order === true) {
                                if (table === "") {
                                    alert("Choose a table Please!")
                                } else {
                                    alert('Success Order!')
                                    Dispatch(
                                        {
                                            type: "REMOVE_ALL",
                                        }
                                    )
                                }

                            } else {
                                alert("Chọn phương thức thanh toán")
                            }
                        }}
                    >
                        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 24, lineHeight: 50, letterSpacing: 2, color: "white" }}>ORDER</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ marginBottom: 300 }}></View>
            </ScrollView>
        )

    } else {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="md-cart-outline" size={100} color="gray" />
                <Text style={{ fontSize: 28, color: "gray" }}>Go to Menu</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    btnQuantity: {
        width: 20,
        height: 20,
        borderWidth: 1,
        alignSelf: "center",
        borderColor: "gray",
        borderRadius: 2,
        backgroundColor: "#ccff99"
    },
    btnRemove: {
        width: 40,
        height: 40,
        alignSelf: "center",
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: "#e0e0e0",
        position: "absolute",
        left: 170
    },
    payOrder: {
        width: 350,
        height: 50,
        backgroundColor: "#e0e0e0",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 10,
        display: "flex",
        flexDirection: "row"
    },
    active: {
        backgroundColor: "#ffff33"
    }
})
