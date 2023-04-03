var express = require('express');
var router = express.Router();
const users = require('../models/users');
const assignments = require('../models/assignments');
const courses = require('../models/courses');
const submissions = require('../models/submissions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
