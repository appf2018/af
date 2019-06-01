const express = require('express');
const router = express.Router();
//import subject model here
let Subject = require('../models/subject.model');

// get subjects 
router.get('/',(req,res,next)=>{
    Subject.find((err,result)=>{
        if(err){
            res.status(404).json({
                err
            })
        }else{
            res.status(200).json(result);
        }
    })
});

//post subjects
router.post('/add',(req,res,next)=>{
    let subject = new Subject({
        name:req.body.name,
        amount:req.body.amount,
        description:req.body.description
    });
    subject.save((err,subject)=>{
        if(err){
            res.status(404).json(err);
        }else{
            res.status(201).json(subject)
        }
    })
});

module.exports = router;