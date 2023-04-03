
const mongoose = require('mongoose');
const assert = require('assert');
    
const users = require('./models/users');
const assignments = require('./models/assignments');
const courses = require('./models/courses');
const submissions = require('./models/submissions');


// Connection URL
const url = "mongodb+srv://eebalboni:j3Am4vgTXuRUufCf@cluster0.shlik9e.mongodb.net/autoGrader?retryWrites=true&w=majority";

// Connect using mongoose
mongoose.connect(url,
    { useNewUrlParser: true },
     {useFindAndModify: false});

//open a connection and get a db handler
const db = mongoose.connection;

//error handling
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',  ()=> {
    // we're connected!
    console.log("Connected correctly to server");

    //adding data to db 
   users.create({ firstName: "Bob", lastName: "Bobert", userName: "Mr.Bob", password: "bobsecret", typeOfUser:"Student"},
    (err, users) => {
        if(err) console.error(err);
        console.log("" + users);
    })
    users.create({ firstName: "Bob2", lastName: "Bobert", userName: "Mr.Bob", password: "bobsecret", typeOfUser:"Student"},
    (err, users) => {
        if(err) console.error(err);
        console.log("" + users);
    })
    users.create({ firstName: "Bob", lastName: "Bobert", userName: "Mr.Bob", password: "bobsecret", typeOfUser:"Professor"},
    (err, users) => {
        if(err) console.error(err);
        console.log("" + users);
    })
    users.create({ firstName: "Bob2", lastName: "Bobert", userName: "Mr.Bob", password: "bobsecret", typeOfUser:"Professor"},
    (err, users) => {
        if(err) console.error(err);
        console.log("" + users);
    }) 
    assignments.create({title: "assignment1" , description: "blahblahblah", dueDate: "06/08/2023", studentSubmission:"none.txt", solutionFile: "solution.txt"},
    (err, assignments) => {
        if(err) console.error(err);
        console.log("" + assignments);
    })
    assignments.create({title: "assignment2" , description: "blahblahblah", dueDate: "06/08/2023", studentSubmission:"none.txt", solutionFile: "solution.txt"},
    (err, assignments) => {
        if(err) console.error(err);
        console.log("" + assignments);
    })
    assignments.create({title: "assignment3" , description: "blahblahblah", dueDate: "06/08/2023", studentSubmission:"none.txt", solutionFile: "solution.txt"},
    (err, assignments) => {
        if(err) console.error(err);
        console.log("" + assignments);
    }) 
    courses.create({courseCode:"1234",courseTitle:"CSC225"},
    (err, courses) => {
        if(err) console.error(err);
        console.log("" + courses);
    });
    courses.create({courseCode:"5678",courseTitle:"CSC235"},
    (err, courses) => {
        if(err) console.error(err);
        console.log("" + courses);
    });
    courses.create({courseCode:"91011",courseTitle:"CSC245"},
    (err, courses) => {
        if(err) console.error(err);
        console.log("" + courses);
    });
    submissions.create({username:"ee", assignment:"assignment1",grade:"A"},
    (err, submissions) => {
        if(err) console.error(err);
        console.log("" + submissions);
    });
    submissions.create({username:"eec", assignment:"assignment2",grade:"A"},
    (err, submissions) => {
        if(err) console.error(err);
        console.log("" + submissions);
    });
    submissions.create({username:"eef", assignment:"assignment3",grade:"A"},
    (err, submissions) => {
        if(err) console.error(err);
        console.log("" + submissions);
    }); 
}
);			
