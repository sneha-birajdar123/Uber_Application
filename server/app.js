import express from "express"
import config from "config"

import { body, validationResult } from "express-validator"

import "./utils/dbConnect.js"

// import customerRouter from "./controllers/customer/index.js"
import publicRouter from "./controllers/public/index.js"

const app = express()
const PORT = config.get("PORT")
app.use(express.json())

app.get("/", (req, res) => {
    try {
        res.status(200).json({ msg: "Hello World" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})


var validationSchemaForRegister = [
    body("email").isEmail(),
    body("username").isLength({ min: 1 }),
    body("password").isLength({ min: 6 },
        { max: 12 }).withMessage("custom error msg").isLength({ max: 12 }).withMessage("max 12 chars only"),
]
app.post("/", validationSchemaForRegister, (req, res) => {
    try {
        const error = validationResult(req)
        res.json({ "data": req.body })
    } catch (error) {
        return res.status(500).json({ msg: error })
    }

})

app.use("/api/public", publicRouter)

// app.use("/api/customer", customerRouter)

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})