
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Professors = require('../models/professor');
const Students = require('../models/student');


var courseSchema = new Schema({
	courseId : { 
			type : String,
			required: true,
			},
	courseTitle : {
			type : String,
			required : true
	},
	professor: {
        type: Schema.Types.ObjectId,
        ref:'Professors'
    },
	students: [{
        type: Schema.Types.ObjectId,
        ref:'Students'
    }],
	assignments: [{
        type: Schema.Types.ObjectId,
        ref:'Assignments'
    }]
});

var Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;