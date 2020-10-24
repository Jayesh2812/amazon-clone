export const initialState={
    basket: [],
    user:null
}

function reducer(state, action){
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
            
        case 'ADD_TO_BASKET':
            // Logic
            // Find the item
            // if already present in basket increment count variable of that item
            // else add it to the basket
            console.log(action.item.id)
            const productIndex = state.basket.findIndex(basketItem => basketItem.id === action.item.id)
            if(productIndex === -1){
                    return{
                    ...state,
                    basket :[...state.basket, action.item]
                }
            }
            else{
                let newBasket = state.basket
                newBasket[productIndex].count ++
                return{
                    ...state,
                    basket: newBasket
                }
            }
        case 'REMOVE_FROM_BASKET':
            const id = action.id
            // console.log(id) 
            // Clone basket
            let newBasket = state.basket
            const index = state.basket.findIndex( basketItem => basketItem.id === action.id)

            if (index >= 0){
                newBasket.splice(index,1)
            }
            else{
                console.error("Not found")
            }
            return {...state, basket:newBasket};

        case "INCREASE_PRODUCT_COUNT":
            // Increase the count of specified product_id
            const productCountIndex = state.basket.findIndex( basketItem => basketItem.id === action.id)
            state.basket[productCountIndex].count++
            return{
                ...state
            }
        case "DECREASE_PRODUCT_COUNT":
            // Increase the count of specified product_id
            const dproductCountIndex = state.basket.findIndex( basketItem => basketItem.id === action.id)
            state.basket[dproductCountIndex].count--
            return{
                ...state
            }

        default:
            return {...state};
    }
}
export default reducer

