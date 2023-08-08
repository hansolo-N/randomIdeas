const express = require('express');
const { listen } = require('express/lib/application');

const port = 5000;

const app = express();

const ideas = [
    {
        id:1,
        text: "this is positive news letter",
        tag: "technology",
        username: "tonyStark",
        date: '2022-06-02'
    },
    {
        id:2,
        text: "this is stever rogers",
        tag: "gaming",
        username: "SteverRogers",
        date: '2023-07-03'
    },
    {
        id:3,
        text: "this is bruce banner",
        tag: "radiation",
        username: "BruceBanner001",
        date: '2023-08-08'
    }
]


app.get('/',(req,res)=>{
    res.json({message:"welcome to random ideas api"})
})

app.get('/api/ideas',(req,res)=>{
    res.json({sucess:true,data:ideas})
})


app.get('/api/ideas/:id',(req,res)=>{

    const idea = ideas.find((idea)=>idea.id === +req.params.id)

    if(!idea){
        return res.status(404).json({sucess:false,error:"resource not found"})
    }
    
    res.json({sucess:true,data:idea})
})




app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})

