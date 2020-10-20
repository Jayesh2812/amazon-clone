import React,{createContext, useContext, useReducer} from "react"

// This is Data Layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
);

export const useStateValue = () =>useContext(StateContext)

export const getBasketTotal = (basket) =>{
    return(
    basket.reduce((amount, item) => item.pricing + amount,0)
)}

export const getProductCount=(product_id) =>{
    return(
        0
    )
}