
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
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
    typeOfUser : {
        type : String,
        required: true
    }
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;