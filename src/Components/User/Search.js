import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import data from '../../Data/Data';
import { useSelector, useDispatch } from 'react-redux';

export default function Search(props) {

    const [search, setSearch] = useState('')

    const ProductSelector = useSelector((state) => state.product)

    const Dispatch = useDispatch();

    let filteredData = ProductSelector.filter(e => e.name.includes(search))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={{
                        width: "100%",
                        height: 100,
                    }}
                    source={require("../../../assets/Product/Banner1.png")} />
                <Image
                    style={{
                        position: "absolute",
                        top: 26,
                        left: 15
                    }}
                    source={require("../../../assets/Product/logo.png")} />

                <View style={styles.search}>
                    <TextInput
                        style={styles.inputSearch}
                        placeholder='Search ...'
                        onChangeText={newText => setSearch(newText)}
                        defaultValue={search} />
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            top: 4,
                            left: 3,
                        }}
                        onPress={() =>
                            props.navigation.navigate('New')
                        }
                    >
                        <Ionicons name="search" size={24} color="#a0a0a0" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView horizontal={false} style={{ marginBottom: 100 }}>
                {/* the menu */}
                <View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                marginLeft: 20,
                                marginTop: 10,
                                fontSize: 24
                            }}
                        >The Menu</Text>
                        <TouchableOpacity>
                            <Ionicons
                                style={{
                                    marginTop: 15,
                                    marginRight: 5
                                }}
                                name="ellipsis-vertical-sharp"
                                size={24}
                                color="black" />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            minHeight: 200,
                            marginBottom: 10
                        }}
                    >
                        {filteredData.map((e) => {
                            return (
                                <View
                                    key={e.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        width: 400,
                                        height: 120,
                                    }}
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
                                        <TouchableOpacity
                                            style={{
                                                marginLeft: 100,
                                                width: 100,
                                                borderRadius: 5,
                                                paddingLeft: 10,
                                                backgroundColor: "red",
                                                paddingTop: 4,
                                                paddingBottom: 4
                                            }}
                                            onPress={() => Dispatch(
                                                {
                                                    type: "ADD_CART",
                                                    payload: e.id
                                                }
                                            )}
                                        >
                                            <Text style={{ color: "#fff" }}>Add to cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                        {/* item menu */}




                    </View>
                </View>
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
    },
    header: {
        position: "relative",
        width: 400,
        height: 100,
    },
    search: {
        position: "absolute",
        bottom: 50,
        left: 40,
        width: 320,
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

})