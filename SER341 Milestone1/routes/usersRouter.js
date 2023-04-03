var express = require('express');
const users = require('../models/users');
const assignments = require('../models/assignments');
const courses = require('../models/courses');
const submissions = require('../models/submissions');

var userRouter = express.Router();

//initialize

//user router 
userRouter.route('/users')
.get((req,res,next)=>{ 
  res.send('hello');
});

userRouter.route('/')
.get((req,res,next)=>{ //chained into route(), no semi-colon after the all implementation
    // 2- implement get  to return all recipes  
     users.find({},(err,user)=>
  {
      if(err) throw err;
      res.json(user);
  }
  )
});

userRouter.route('/:id')
.get(function(req,res){
    //let id = users._id;
    //finding user by id
    users.findById(req.params.id,function(err,user){
        if (err)
        console.log(err);
    res.send(user)
    });
});

module.exports = userRouter;