import mongoose from "mongoose";

const rideSchema = mongoose.Schema({
    pickupLocation: {          
        latitude: Number,
        longitude: Number,
        address: String,
      },
      dropoffLocation: {         
        longitude: Number,
        address: String,
      },
      fare: {              
      status: String,            
      createdAt: Date,
      updatedAt: Date,
    }    
})

const rideModel = mongoose.model("rides", rideSchema, "rides")
export default rideModel