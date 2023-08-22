const express = require('express')
const Idea = require('../models/Idea');
const router = express.Router();

module.exports = router




//get all ideas
router.get('/',async (req,res)=>{
    try{
        const ideas = await Idea.find()
        res.json({success:true,data:ideas})
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false,error:"something went wrong"})
    }
})

//get specific idea
router.get('/:id',async (req,res)=>{

    try{
        const idea = await Idea.findById(req.params.id)
        res.json({sucess:true,data:idea})
     }
     catch(error){
        console.log(error)
        res.status(500).json({sucess:false,error:"something went wrong"})
     }
})

//add an idea
router.post('/',async (req,res)=>{
    const idea = new Idea({
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
    })
     try{
        const savedIdea = await idea.save();
        res.json({sucess:true,data:savedIdea})
     }
     catch(error){
        console.log(error)
        res.status(500).json({sucess:false,error:"something went wrong"})
     }
    
    
})


//modify idea
router.put('/:id',async (req,res)=>{

    try {

        //match usernames
        const idea = await Idea.findById(req.params.id)
        if(idea.username === req.body.username){
            const updatedIdea = await Idea.findByIdAndUpdate(
                req.params.id,
                {
                    $set:{
                        text: req.body.text,
                        tag: req.body.tag,
    
                    }
                },
                {new:true}
                
                )
    
            return res.json({sucess:true,data:updatedIdea})
        }

        //username does not match
        res.status(403).json({sucess:false,error:"you are not authorized to update this resource"})
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({sucess:false,error:"something went wrong"})
    }
})

router.delete('/:id',async (req,res)=>{


    try {
        const idea = await Idea.findById(req.params.id)

        //match usernames
        if(idea.username === req.body.username){
            const deletedIdea = await Idea.findByIdAndDelete(req.params.id)
            return res.json({sucess:true,data:deletedIdea})
        }
    
        //usernames do not match
        res.status(403).json({sucess:false,error:"you are not authorized to delete this resource"})
    } catch (error) 
    {
        console.log(error)
        res.status(500).json({sucess:false,error:"something went wrong"})
    }
    

    if(!idea){
        return res.status(404).json({sucess:false,error:"resource not found"})
    }


    
})