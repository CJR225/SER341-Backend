
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
	courseCode : { 
			type : String,
			required: true,
			},
	courseTitle : {
			type : String,
			required : true
	}
});

var Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;