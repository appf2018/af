const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subjectSchema = new Schema({
    name:String,
    amount:Number,
    description:String
});

//first parameter is database name 
//second one is just pass the above subject schema
module.exports = mongoose.model('subjects', subjectSchema);