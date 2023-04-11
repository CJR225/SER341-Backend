
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
        type : Integer,
        required: true
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref:'Courses'
    }],
    submissions: [{
        type: Schema.Types.ObjectId,
        ref:'Submissions'
    }]

});

var Students = mongoose.model('Students', studentSchema);

module.exports = Students;