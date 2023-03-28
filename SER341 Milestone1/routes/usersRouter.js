var express = require('express');
const users = require('../models/users');
const assignments = require('../models/assignments');
const courses = require('../models/courses');
const submissions = require('../models/submissions');

var userRouter = express();

//initialize

const port = 3000;
//user router 
userRouter.route('/')
.post((req,res,next)=>{ //chained into route(), no semi-colon after the all implementation
    // 2- implement get  to return all recipes  
     users.find({},(err,user)=>
  {
      if(err) throw err;
      res.json(user);
  }
  )
});

 //create the server
userRouter.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});  

module.exports = userRouter;