const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSchema = new Schema({
    name: String,
    code: String,
    passMark:Number,
    lecturer:String,
    //In here we need to have multiple subjectes per course(subject array)
    //link between subject model 
    subject:[{
        type:Schema.Types.ObjectId,
        ref:'subjects'
    }]

});

//first parameter is database name 
//second one is just pass the above course schema
module.exports = mongoose.model('course', courseSchema);