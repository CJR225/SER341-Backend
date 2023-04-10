
const { Double } = require('mongodb');
const Student = require('../models/student');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var submissionSchema = new Schema({
	student : { 
			type : Schema.Types.ObjectId,
			ref: 'Student',
			required: true,
			},
    grade : { 
        type : String,
        required: true,
        },
	assignment: {
		type: Schema.Types.ObjectId,
		ref:'Assignment'
		}
});

var Submissions = mongoose.model('Submissions', submissionSchema);

module.exports = Submissions;