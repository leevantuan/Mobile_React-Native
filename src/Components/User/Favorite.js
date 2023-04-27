import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';


export default function Favorite(props) {
    const FavoriteProduct = useSelector(state => state.favorite)
    const Dispatch = useDispatch()

    if (FavoriteProduct.length > 0) {
        return (
            <ScrollView>
                <Text
                    style={{
                        marginTop: 80,
                        marginLeft: 20,
                        fontSize: 24,
                        fontWeight: "bold",
                        letterSpacing: 2
                    }}
                >My Favorite</Text>

                {FavoriteProduct.map((e) => {
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
                                            marginTop: 20,
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
                                            fontWeight: "bold",
                                            marginTop: 10,
                                            fontSize: 16
                                        }}
                                    >{e.price} <Text style={{ color: "black" }}>vnđ</Text></Text>

                                </View>
                                <TouchableOpacity
                                    style={styles.btnRemove}
                                    onPress={() => {
                                        e.favorite = false
                                        Dispatch(
                                            {
                                                type: "ADD_FAVORITE",
                                                payload: e.id
                                            }
                                        )
                                    }}
                                >
                                    {/* <Text style={{ alignSelf: "center", lineHeight: 35, fontSize: 20 }}>X</Text> */}
                                    <Ionicons name="heart" size={36} color="red" />
                                </TouchableOpacity>

                            </View>
                        </TouchableOpacity>
                    )
                })}


            </ScrollView>
        )
    } else {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="heart-dislike-outline" size={100} color="gray" />
                <Text style={{ fontSize: 28, color: "gray" }}>Go to Menu</Text>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    btnRemove: {
        width: 40,
        height: 40,
        alignSelf: "center",
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: "#fff",
        position: "absolute",
        left: 290,
        top: 60
    }
})
