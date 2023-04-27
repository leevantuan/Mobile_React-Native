import data from "../../Data/Data";

const initState = {
    product: data,
    search: "",
    category: "All",
    cart: [],
    favorite: [],
    quantity: 1

}

const rootReducer = (state = initState, action) => {
    if (action.type === "ADD_CART") {

        const index = state.cart.findIndex((e) => e.id === action.payload)

        if (index >= 0) {

            const update = [...state.cart]

            update.splice(index, 1)

            return (
                { ...state, cart: update }
            )

        } else {
            const product = state.product.find((e) => e.id === action.payload)
            let update = [...state.cart]


            update = update.concat(product)

            return { ...state, cart: update }
        }

    }

    if (action.type === "ADD_FAVORITE") {

        const index = state.favorite.findIndex((e) => e.id === action.payload)

        if (index >= 0) {
            const update = [...state.favorite]

            update.splice(index, 1)

            return { ...state, favorite: update }
        } else {
            const product = state.product.find((e) => e.id === action.payload)
            let update = [...state.favorite]

            update = update.concat(product)
            return { ...state, favorite: update }
        }
    }
    if (action.type === "REMOVE_ALL") {

        const update = []

        return { ...state, cart: update }
    }


    return state
}

export default rootReducer;