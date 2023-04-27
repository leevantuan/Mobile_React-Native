import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';


export default function Description(props) {
    const { productId } = props.route.params;

    const ProductSelector = useSelector((state) => state.product)

    const Product = ProductSelector.find(e => e.id === productId)

    const Dispatch = useDispatch()

    return (
        <View>
            <View>
                <View
                    style={{
                        marginTop: 10,
                        width: 100,
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "flex-end",
                        marginRight: 20
                    }}
                >

                    {
                        Product.favorite ?
                            <TouchableOpacity
                                onPress={() => {
                                    Product.favorite = false
                                    Dispatch(
                                        {
                                            type: "ADD_FAVORITE",
                                            payload: Product.id
                                        }
                                    )
                                    props.navigation.goBack('Menu')
                                }}
                            >
                                <Ionicons name="heart" size={34} color="red" />
                            </TouchableOpacity>
                            : <TouchableOpacity
                                onPress={() => {
                                    Product.favorite = true
                                    Dispatch(
                                        {
                                            type: "ADD_FAVORITE",
                                            payload: Product.id
                                        }
                                    )
                                    props.navigation.goBack('Menu')
                                }}
                            >
                                <Ionicons name="heart-outline" size={34} color="black" />
                            </TouchableOpacity>
                    }
                    {/* <TouchableOpacity
                        onPress={() => Dispatch(
                            {
                                type: "ADD_FAVORITE",
                                payload: Product.id
                            }
                        )}
                    >
                        <Ionicons name="heart" size={34} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Dispatch(
                            {
                                type: "ADD_FAVORITE",
                                payload: Product.id
                            }
                        )}
                    >
                        <Ionicons name="heart-outline" size={34} color="black" />
                    </TouchableOpacity> */}
                    <Text style={{ fontWeight: "bold", fontSize: 24, marginLeft: 5 }}>12.7K</Text>
                </View>
                <View
                    style={styles.img}
                >
                    <Image
                        style={{
                            height: 250,
                            width: 250,
                            alignSelf: "center",
                            borderRadius: 20,
                        }}
                        source={Product.img} />
                </View>

                <View
                    style={{
                        marginLeft: 20,
                        marginTop: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: "bold",
                            marginLeft: 20,
                            letterSpacing: 2
                        }}
                    >{Product.name}</Text>
                    <Text
                        style={{
                            color: "gray",
                            marginLeft: 20,
                            fontSize: 20,
                            fontWeight: "bold"
                        }}
                    >Giá:  <Text style={{ color: "red" }} >{Product.price}</Text>
                        <Text style={{ color: "gray", marginLeft: 10 }}> vnđ</Text>
                    </Text>

                    {
                        Product.order ?
                            <TouchableOpacity
                                onPress={() => {
                                    Product.order = false
                                    Dispatch(
                                        {
                                            type: "ADD_CART",
                                            payload: Product.id
                                        }
                                    )
                                    props.navigation.goBack('Menu')
                                }}
                                style={{ marginTop: 100, width: 260, height: 50, backgroundColor: "red", alignSelf: "center", borderRadius: 5 }}>
                                <Text style={{ color: "#fff", textAlign: 'center', fontSize: 24, fontWeight: "bold", lineHeight: 50 }}>Cancel</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity
                                style={styles.btnCart}
                                onPress={() => {
                                    Product.order = true
                                    Dispatch(
                                        {
                                            type: "ADD_CART",
                                            payload: Product.id
                                        }
                                    )
                                    props.navigation.goBack('Menu')
                                }}
                            >
                                <Text style={{ color: "#fff", textAlign: 'center', fontSize: 24, fontWeight: "bold" }}>Add to cart</Text>
                            </TouchableOpacity>
                    }
                    {/* <TouchableOpacity
                        style={styles.btnCart}
                        onPress={() => {
                            Dispatch(
                                {
                                    type: "ADD_CART",
                                    payload: Product.id
                                }
                            )
                            props.navigation.goBack()
                        }}
                    >
                        <Text style={{ color: "#fff", textAlign: 'center', fontSize: 24, fontWeight: "bold" }}>Add to cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 260, height: 50, backgroundColor: "red", alignSelf: "center", borderRadius: 5 }}>
                        <Text style={{ color: "#fff", textAlign: 'center', fontSize: 24, fontWeight: "bold", lineHeight: 50 }}>Cancel</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    active: {
        backgroundColor: "yellow"
    },
    btnCart: {
        width: 260,
        borderRadius: 5,
        backgroundColor: "#00cc00",
        paddingTop: 12,
        paddingBottom: 12,
        alignSelf: "center",
        marginTop: 100,
    },
    btnCart2: {
        width: 360,
        borderRadius: 5,
        backgroundColor: "red",
        paddingTop: 52,
        paddingBottom: 12,
        alignSelf: "center",
        marginTop: 150,
    },
    img: {
        height: 260,
        width: 260,
        marginTop: 5,
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
    }
})