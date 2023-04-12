
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    assignmentId : {
        type: Number
    },
	title : { 
		type : String,
		required: false,
	},
	description : {
		type : String,
		required : false
	},
    dueDate : {
        type: Date,
        required: false
    },
    studentSubmission : {
        type: String,
        required: false
    },
    solutionFile : {
        type : String,
        required: false
    },
    course: {
        type: Schema.Types.ObjectId,
        ref:'Courses'
    },
    submissions: [{
        type: Schema.Types.ObjectId,
        ref:'Submissions'
    }]
});

var Assignments = mongoose.model('Assignments', assignmentSchema);

module.exports = Assignments;