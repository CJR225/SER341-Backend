var mongoose = require("mongoose");
const Courses = require("../models/courses");
const Submissions = require("../models/submissions");
var passportLocalMongoose = require("passport-local-mongoose");

var Schema = mongoose.Schema;

var studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  studentId: {
    type: Number,
    required: true,
  },
  courses: {
    type: [String],
    required: false,
  },
  submissions: {
    type: [String],
  },
});

var Students = mongoose.model("Student", studentSchema);

student.plugin(passportLocalMongoose); //adds the user hash and salt fileds to store the user name, the hashed password and salted value

module.exports = Students;
