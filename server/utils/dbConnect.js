import config from "config"
import mongoose from "mongoose"

async function dbConnect() {
    try {
        let dbUrl = config.get("DB_URL")
        await mongoose.connect(dbUrl)
    } catch (error) {
        console.log(error);
    }
}
dbConnect()