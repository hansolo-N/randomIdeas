const express = require('express');

require("dotenv").config();

const port = process.env.PORT

const connectDB = require('./config/db')


connectDB()

const app = express();

//body-parser middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//home
app.get('/',(req,res)=>{
    res.json({message:"welcome to random ideas api"})
})

const ideaRouter = require("./routes/ideas")

app.use("/api/ideas",ideaRouter)




app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})

