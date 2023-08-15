const express = require('express');
const { listen } = require('express/lib/application');

const port = 5000;

const app = express();



app.get('/',(req,res)=>{
    res.json({message:"welcome to random ideas api"})
})

const ideaRouter = require("./routes/ideas")

app.use("api/ideas",ideaRouter)




app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})

