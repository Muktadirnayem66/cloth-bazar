
import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import { allOrders, placeOrderCOD, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, verifyStripe } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js'

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

//verify stripe payment
orderRouter.post("/verifystripe", authUser, verifyStripe)

export default orderRouter

