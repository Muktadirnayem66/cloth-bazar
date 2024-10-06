import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate()
  

  const addToCart = async (productId, size) => {
    if (!size) {
      toast.error("Must be select product size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[productId]) {
      if (cartData[productId][size]) {
        cartData[productId][size] += 1;
      } else {
        cartData[productId][size] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][size] = 1;
    }
    setCartItems(cartData);
    toast.success("Successfully item added to cart");
  };

  const getCartCount = () => {
    let cartCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            cartCount += cartItems[items][item];
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    return cartCount;
  };

  const updateQuantity = async (productId, size, quantity)=>{
    let cartData = structuredClone(cartItems)
      cartData[productId][size] = quantity
      setCartItems(cartData)
  }

  const getCartAmount = ()=>{
    let totalAmount = 0
    for(const items in cartItems){
      const itemInfo = products.find((item)=>item._id === items)
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (err) {
          console.log(err);
          
        }
      }
    }
    return totalAmount

  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ShopContextProvider;
