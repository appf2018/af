const express = require('express');
const router = express.Router();

//need to bring models here
let Course = require('../models/course.model');
let Subject = require('../models/subject.model');


//get cousrse with subjects 
//populate is used to filter the fields in subjects
//first parameter field name in course schema
//second paramter is selected field to show 
router.get('/',(req,res,next)=>{
    Course.find({}).populate('subject','name amount description').exec((err,result)=>{
        if(err){
            res.status(404).json({
                err
            })
        }else{
            res.status(200).json(result);
        }
    })
});

router.get('/:id',(req,res,next)=>{
        Course.findById(req.params.id, (err, course) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json(course)
    })
});

//post cousre
router.post('/add', (req,res,next)=>{

    let course = new Course({
        name:req.body.name,
        passMark:req.body.passMark,
        code:req.body.code,
        lecturer:req.body.lecturer  
    });
    course.save((err,course)=>{
        if(err){
            res.status(404).json(err);
        }else{
            res.status(201).json({course});
        }
    })
});


// update the courses table subject filed with subject ids 
router.put('/subjects/add', function(req, res) {
    Subject.findOne({_id: req.body.subjectId}, function(err, subject) {
        if (err) 
        {
            res.status(500).send({error:"Could not add subject to Courses"});
        } else 
        {
            Course.update({_id:req.body.courseId}, {$addToSet:{subject: subject._id}}, function(err, courses) {
                if (err) 
                {
                    res.status(500).json({error:"Could not add subject to Courses"});
                } else 
                {
                    res.json(courses);
                }
            });
        }
    })
});

module.exports = router;