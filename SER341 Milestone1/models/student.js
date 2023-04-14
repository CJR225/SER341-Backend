
var mongoose = require('mongoose');
const Courses = require('../models/courses');
const Submissions = require('../models/submissions');


var Schema = mongoose.Schema;

var studentSchema = new Schema({
	firstName : { 
			type : String,
			required: true,
			},
	lastName : {
			type : String,
			required : true
	},
    userName : {
            type: String,
            required: true
    },
    password : {
        type: String,
        required: true
    },
    studentId : {
        type : Number,
        required: true
    },
    courses: {
        type: [String],
        required: false
    },
    submissions: {
        type: [String]
    }

});

var Students = mongoose.model('student', studentSchema);

module.exports = Students;