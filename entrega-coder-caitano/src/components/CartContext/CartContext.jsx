import React, { createContext, useState} from "react";

import { productos } from "../productos";

export const CartContext = createContext();

const cartList = []

export const CartProvider = ({children}) => {
    const [items, setItems] = useState(cartList)

    return (
        <CartContext.Provider value={[items, setItems,]}>
            {children}
        </CartContext.Provider>
    )
}
