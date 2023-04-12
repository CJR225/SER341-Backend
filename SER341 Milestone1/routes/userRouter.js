var express = require('express');
var router = express.Router();
const student = require('../models/student');
const professor = require('../models/professor');
const assignments = require('../models/assignments');
const courses = require('../models/courses');
const submissions = require('../models/submissions');

router.route('/student/createAccount')
.post(function(req,res){
    console.log(req.body);
    student.create(req.body,function(err,student){
        if (err)
        console.log(err);
    res.send(student)
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/user')
.get((req,res,next)=>{
    res.send('hello');
});

/* router.route('/:id')
.get(function(req,res){
    //let id = users._id;
    //finding user by id
    users.findById(req.params.id,function(err,user){
        if (err)
        console.log(err);
    res.send(user)
    });
});


router.route('/student/login')
.post(function(req,res){

});

router.route('/professor/login')
.post(function(req,res){

}); */



/* router.route('/professor/professorId/createAccount')
.post(function(req,res){
    professor.findById(req.params.professorId,function(err,professor){
        if (err)
        console.log(err);
    res.send(professor)
    });

});

router.route('/student/:studentId/logout')
.post(function(req,res){

});

router.route('/professor/:professorId/logout')
.post(function(req,res){

});

router.route('/student/:studentId/courses')
.get(function(req,res){
    student.findById(req.params.studentId,function(err,courses){
        if (err)
        console.log(err);
    res.send(courses)
    });
});

router.route('/professor/:professorId/courses')
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

router.route('/student/:studentId/courses/:courseId/assignments')
.get(function(req,res){
    student.findById(req.params.studentId, req.params.courseId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(assignments)
        });
});

router.route('/professor/:professorId/courses/:courseId/assignments')
.get(function(req,res){
    professor.findById(req.params.professorId, req.params.courseId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(assignments)
        });

});

router.route('/student/:studentId/courses/:courseId/assignments/:assignmentId')
.get(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(assignments)
        });

});

router.route('/professor/:professorId/courses/:courseId/assignments/:assignmentId')
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


router.route('/student/:studentId/courses/:courseId/assignments/:assignmentId/file')
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


router.route('/professor/:professorId/courses/:courseId/assignments/:assignmentId/file')
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

router.route('/student/:studentId/courses/:courseId')
.post(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, function(err,courses){
        if (err)
        console.log(err);
        });
});

router.route('/student/:studentId/courses/:courseId/submissions')
.get(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, function(err,submissions){
        if (err)
        console.log(err);
    res.send(submissions)
        });

}); */

module.exports = router;
