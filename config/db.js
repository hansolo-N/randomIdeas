const mongoose = require('mongoose')

 const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
}

mongoose.set('strictQuery',true)

module.exports = connectDB;