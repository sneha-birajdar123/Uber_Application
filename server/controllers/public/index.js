import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import customerModel from "../../models/Customer/Customer.js"
import driverModel from "../../models/Driver/Driver.js"
import rideModel from "../../models/Ride/Ride.js"

const router = express.Router()

router.post("/register", async(req, res) => {
    try {

        let customerData = req.body
        let customerEmail = customerData.email
        let checkDuplicates = await customerModel.findOne({email: customerEmail})
        if(checkDuplicates){
            return res.status(400).json({msg: "Customer already exists"})
        }

        let hashPassword = await bcrypt.hash(customerData.password, 10)
        customerData.password = hashPassword

        await customerModel.create(customerData)
        res.status(200).json({msg: "customer registered"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.post("/login", async(req, res) => {
    try {
        let customerData = req.body
        let customerEmail = customerData.email
        let checkCustomer = await customerModel.findOne({email: customerEmail})
        if(!checkCustomer){
            return res.status(400).json({msg: "This customer doesnot exists"})
        }
        let hashPassword = checkCustomer.password
        let checkPassword = await bcrypt.compare(customerData.password, hashPassword)
        if(!checkPassword){
            return res.status(400).json({msg: "Invalid password"})
        }
        res.status(200).json({msg: "Customer logged in successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

export default router