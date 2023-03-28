
const mongoose = require('mongoose'),
    assert = require('assert');
    
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
}
);			
