import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import PropTypes from "prop-types";

export const ShopContext = createContext()

 const ShopContextProvider = ({children})=>{
    const currency = "$"
    const delivery_fee = 10
    const value = {
        products,currency,delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

ShopContextProvider.propTypes = {
    children:PropTypes.node
}


export default ShopContextProvider