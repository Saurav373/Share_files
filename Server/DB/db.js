import mongoose from "mongoose";


const connectToMongoDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('connected to MongoDB Successfully ');
}
export { connectToMongoDB };