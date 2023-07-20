import mongoose from "mongoose"

const mongoDBConnect = async ()=>{

    try {

        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connection start...`.bgCyan.black);
    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }
}

export default mongoDBConnect;