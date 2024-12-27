import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    vehicleDetails: {
        licensePlate: String,
        model: String,
        color: String
    },
    location: {
        latitude: { type: Number, required: true },
        longitude: {
          type: Number,
          required: true,
        },
    },
    ratings: {
        average: Number,
        count: Number
    },
    rideHistory: {
        createdAt: Date,
        updatedAt: Date
    }
})

const driverModel = mongoose.model("driver", driverSchema, "driver")
export default driverModel