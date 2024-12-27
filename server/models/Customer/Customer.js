import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      location: {
        latitude: { type: Number, required: true },
        longitude: {
          type: Number,
          required: true,
        },
      },
      paymentMethods: [
        {
          cardType: {
            type: String,
          },
          cardNumber: { type: String },
          expiryDate: { type: String },
        },
      ],
      rideHistory: [{ type: String }],
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      updatedAt: {
        type: Date,
        default: Date.now(),
      },
    });

const customerModel = mongoose.model("customers", customerSchema, "customers")
export default customerModel