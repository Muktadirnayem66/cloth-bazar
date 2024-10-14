

//placing order in cod method

import orderModel from "../models/orderModel.js"
import { userModel } from "../models/userModel.js"

const placeOrderCOD = async(req, res)=>{
    try {
        const {userId, items, amount, address} = req.body
       
        
        const orderData = {
            userId,
            items, 
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()

        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}})
        res.json({success:true, message:"Order placed"})
        
    } catch (err) {
        console.log(err);
        res.json({success:false, message:err.message})
        
    }

}

//place order in stripe method

const placeOrderStripe = async(req, res)=>{

}

//place order in razorpay method

const placeOrderRazorpay = async(req, res)=>{

}

//all order for admin panel
const allOrders = async(req, res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true, orders})
    } catch (err) {
        console.log(err);
        res.json({success:false, message:err.message})
    }

}


//all orders for user frontend
const userOrders = async(req, res)=>{
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true, orders})
        
    } catch (error) {
        console.log(err);
        res.json({success:false, message:err.message})
    }

}

//update order status from admin panel
const updateStatus = async(req, res)=>{

}


export { placeOrderCOD, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus}