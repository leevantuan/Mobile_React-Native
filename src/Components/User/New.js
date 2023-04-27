import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import saleData from '../../Data/SaleData';
import { useSelector, useDispatch } from 'react-redux';

export default function New(props) {


    const ProductSelector = useSelector((state) => state.product)

    const ProductNew = ProductSelector.filter(e => e.newItem === true)
    const Dispatch = useDispatch();

    // const todoProduct = ProductSelector.name.includes("T")

    return (
        <View style={styles.container}>

            <ScrollView horizontal={false} style={{ marginBottom: 0 }}>

                {/* New item */}
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
        </View >
    )
}
const styles = StyleSheet.create({
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
        marginBottom: 20,
        alignSelf: "center"
    },

})