import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// COD Option
const placeOrder = async (req,res) => {

    try {

        const { userId, items, amount ,address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)

        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({ success : true , message : "Order Placed" })


    } catch (error) {
        console.log(error)
        res.json({ success : false , message : error.message })
        
    }

}

// Stripe Option
const placeOrderStripe = async (req,res) => {

}

// RazorPay Option
const placeOrderRazorPay = async (req,res) => {

}


// All order data 
const allOrders = async (req,res) => {

    try {
         
        const orders =  await orderModel.find({})

        res.json({success:true,orders})
         
    } catch (error) {
        console.log(error)
        res.json({ success : false , message : error.message })
    }

}


// User order data 
const userOrders = async (req,res) => {

    try {
        
        const { userId } = req.body

        const orders = await orderModel.find({ userId })

        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({ success : false , message : error.message })
    }

}


// update order status
const updateStatus = async (req,res) => {

    try {
        
        const { orderId , status } = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})

        res.json({success : true , message : 'Status Updated'})


    } catch (error) {
        console.log(error)
        res.json({ success : false , message : error.message })
    }

}


export {placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus}