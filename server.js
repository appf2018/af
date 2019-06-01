'use strict';
const express = require('express');
const mongoose = require('mongoose');

//need to install these two modules  (npm install body-parser cors)
const bodyParser = require('body-parser');
const cors = require('cors');

//bring routes files
const courseRoute = require('./routes/course.route');
const subjectRoute = require('./routes/subject.route');

mongoose.connect('mongodb://127.0.0.1:27017/js-sample', function (err) {
    if (err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

const app = express();

//these 3 app.use methods newly added here
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.static('dist'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});


//routes defind here
app.use('/courses', courseRoute);
app.use('/subjects',subjectRoute);

app.listen(3000, function (err) {
    if (err)
    {
        console.error(err);
        return;
    }
    console.log('Listening on port 3000');
});