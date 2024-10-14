import { useEffect } from "react";
import { useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'
import { backendUrl } from "../App";

const Orders = ({token}) => {

    const [orders, setOrders] =  useState([])
    
    const fetchAllOrders = async()=>{
        try {
            if(!token){
                return null
            }

            const response = await axios.post(backendUrl + "/api/orders/list", {}, {headers:{token}})
            if(response.data.success){
                setOrders(response.data.orders)
            }else{
                toast.error(response.data.message)
            }
            
        } catch (err) {
            toast.error(err.message)
        }

    }

    useEffect(()=>{
        fetchAllOrders()
    },[token])

    return (
        <div>
            
        </div>
    );
};

export default Orders;