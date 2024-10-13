
import express from 'express'
import adminAuth from '../middleware/adminAuth'
import { allOrders, placeOrderCOD, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderController'
import authUser from '../middleware/auth'

const orderRouter = express.Router()


//admin features
orderRouter.post("/list", adminAuth, allOrders )
orderRouter.post("/status", adminAuth, updateStatus)

//payment features
orderRouter.post("/place", authUser, placeOrderCOD )
orderRouter.post("/stripe", authUser, placeOrderStripe)
orderRouter.post("/razorpay", authUser, placeOrderRazorpay)


//user fetures
orderRouter.post("/userorders", authUser, userOrders)

export default orderRouter

