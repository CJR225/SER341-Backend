var express = require('express');
const professor = require('../models/professor');
const student = require('../models/student');
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


userRouter.route('/student/login')
.post(function(req,res){

});

userRouter.route('/professor/login')
.post(function(req,res){

});

userRouter.route('/student/:studentId/createAccount')
.post(function(req,res){
    student.findById(req.params.studentId,function(err,student){
        if (err)
        console.log(err);
    res.send(student)
    });
});

userRouter.route('/professor/professorId/createAccount')
.post(function(req,res){
    professor.findById(req.params.professorId,function(err,professor){
        if (err)
        console.log(err);
    res.send(professor)
    });

});

userRouter.route('/student/:studentId/logout')
.post(function(req,res){

});

userRouter.route('/professor/:professorId/logout')
.post(function(req,res){

});

userRouter.route('/student/:studentId/courses')
.get(function(req,res){
    student.findById(req.params.studentId,function(err,courses){
        if (err)
        console.log(err);
    res.send(courses)
    });
});

userRouter.route('/professor/:professorId/courses')
.get(function(req,res){
    professor.findById(req.params.professorId,function(err,courses){
        if (err)
        console.log(err);
    res.send(courses)
    });
})
.post(function(req,res){
    professor.findById(req.params.professorId,function(err,courses){
        if (err)
        console.log(err);
    res.send(req.body.courses)
    });

});

userRouter.route('/student/:studentId/courses/:courseId/assignments')
.get(function(req,res){
    student.findById(req.params.studentId, req.params.courseId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(assignments)
        });
});

userRouter.route('/professor/:professorId/courses/:courseId/assignments')
.get(function(req,res){
    professor.findById(req.params.professorId, req.params.courseId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(assignments)
        });

});

userRouter.route('/student/:studentId/courses/:courseId/assignments/:assignmentId')
.get(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(assignments)
        });

});

userRouter.route('/professor/:professorId/courses/:courseId/assignments/:assignmentId')
.get(function(req,res){
    professor.findById(req.params.professorId, req.params.courseId, req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(assignments)
        })
})
.post(function(req,res){
    professor.findById(req.params.professorId, req.params.courseId, req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(req.body.assignments)
        })

});


userRouter.route('/student/:studentId/courses/:courseId/assignments/:assignmentId/file')
.put(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(req.body.assignments)
        })
})
.get(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(file)
        });


});


userRouter.route('/professor/:professorId/courses/:courseId/assignments/:assignmentId/file')
.put(function(req,res){
    professor.findById(req.params.professorId, req.params.courseId, req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(req.body.assignments)
        })
})
.get(function(req,res){
    professor.findById(req.params.professorId, req.params.courseId, req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(file)
        });

})

userRouter.route('/student/:studentId/courses/:courseId')
.post(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, function(err,courses){
        if (err)
        console.log(err);
        });
});

userRouter.route('/student/:studentId/courses/:courseId/submissions')
.get(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, function(err,submissions){
        if (err)
        console.log(err);
    res.send(submissions)
        });

})

module.exports = userRouter;