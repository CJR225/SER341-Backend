
const { Double } = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var submissionSchema = new Schema({
	username : { 
			type : String,
			required: true,
			},
	assignment : {
			type : String,
			required : true
	},
    grade : { 
        type : String,
        required: true,
        }
});

var Submissions = mongoose.model('Submissions', submissionSchema);

module.exports = Submissions;