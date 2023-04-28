var express = require("express");
var router = express.Router();
const Student = require("../models/student");
const professor = require("../models/professor");
const assignments = require("../models/assignments");
const courses = require("../models/courses");
const submissions = require("../models/submissions");

// 3- register a new user on end poitn register, info is sent as a json object
router.post("/createAccount", async function (req, res) {
  Student.register(
    new Student({ username: req.body.username }),
    req.body.password,
    function (err, student) {
      if (err) return res.status(500).json({ err: err });
      if (req.body.firstName) {
        student.firstName = req.body.firstName;
      }
      if (req.body.lastName) {
        student.lastName = req.body.lastName;
      }
      passport.authenticate("local")(req, res, function () {
        var token = Verify.getToken(student);

        return res
          .status(200)
          .header("x-access-token", token)
          .header("access-control-expose-headers", "x-access-token")
          .json({ status: "Registration Successful !" });
      });
    }
  );
});
// 4- user login
router.post("/login", (req, res, next) => {
  //req.body will have username and password

  passport.authenticate("local", function (err, student, info) {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!student) {
      console.log("no user");
      return res.status(401).json({ err: info });
    }
    req.logIn(student, function (err) {
      if (err) return res.status(500).json({ err: "Could not log in user" });

      console.log("User in users: ", student);
      Student.findOne({ username: student.username }, function (err, dbUser) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        console.log("DB user:", dbUser);
        var token = Verify.getToken(dbUser);
        res.status(200);
        res.send(token);
        //res.header("Auth", token);
      });
    });
  })(req, res, next);
});

/* //creating an account for student --done
router.route('/student/createAccount')
.post(function(req,res){
    console.log(req.body);
    student.create(req.body,function(err,student){
        if (err)
        console.log(err);
    res.send(student)
    });
}); */
//creating an account for professor --done
router.route("/professor/createAccount").post(function (req, res) {
  console.log(req.body);
  professor.create(req.body, function (err, professor) {
    if (err) console.log(err);
    res.send(professor);
  });
});

router
  .route("/professor/:professorId/courses")
  //creating a course -- done
  .post(function (req, res) {
    courses.create(req.body, function (err, course) {
      if (err) console.log(err);
      res.send(course);
    });
  });
router
  .route("/professor/:professorId/courses/:courseId")
  //updating a course
  .put(function (req, res) {
    courses.findByIdAndUpdate(
      req.params.courseId,
      req.body,
      function (err, course) {
        if (err) console.log(err);
        res.send("updated course");
      }
    );
  })
  .get(function (req, res) {
    //getting a course
    courses.findById(req.params.courseId, function (err, course) {
      if (err) console.log(err);
      res.send(course);
    });
  })
  .delete(function (req, res) {
    //deleting a course
    courses.findByIdAndDelete(req.params.courseId, function (err) {
      if (err) console.log(err);
      res.send("deleted");
    });
  });

router
  .route("/professor/:professorId/courses/:courseId/assignments")
  //creating a assignment --done
  .post(function (req, res) {
    assignments.create(req.body, function (err, assignment) {
      if (err) console.log(err);
      res.send(assignment);
    });
  });

router
  .route("/professor/:professorId/courses/:courseId/assignments/:assignmentId")
  //retrieving assignment
  .get(function (req, res) {
    assignments.findById(req.params.assignmentId, function (err, assignment) {
      if (err) console.log(err);
      res.send(assignment);
    });
  })
  //updating assignment
  .put(function (req, res) {
    assignments.findByIdAndUpdate(
      req.params.assignmentId,
      req.body,
      function (err, assignments) {
        if (err) console.log(err);
        res.send("updated assignment");
      }
    );
  })
  //deleting assignment
  .delete(function (req, res) {
    assignments.findByIdAndDelete(
      req.params.assignmentId,
      function (err, assignments) {
        if (err) console.log(err);
        res.send("deleted assignment");
      }
    );
  });

router
  .route("/professor/:professorId/courses/:courseId/submissions")
  //creating a submission
  .post(function (req, res) {
    submissions.create(req.body, function (err, submission) {
      if (err) console.log(err);
      res.send(submission);
    });
  });
//updating a submission --done
router
  .route("/professor/:professorId/courses/:courseId/submissions/:submissionId")
  .put(function (req, res) {
    submissions.findByIdAndUpdate(
      req.params.submissionId,
      req.body,
      function (err, submission) {
        if (err) console.log(err);
        res.send(submission);
      }
    );
  })
  //retrieving a submision --done
  .get(function (req, res) {
    submissions.findById(req.params.submissionId, function (err, submission) {
      if (err) console.log(err);
      res.send(submission);
    });
  })
  //deleting a submission --done
  .delete(function (req, res) {
    submissions.findByIdAndDelete(
      req.params.submissionId,
      req.body,
      function (err) {
        if (err) console.log(err);
        res.send("Deleted");
      }
    );
  });

router
  .route("/student/:studentId")
  //updating student
  .put(function (req, res) {
    console.log(req.body);
    student.findByIdAndUpdate(req.params.studentId, req.body, function (err) {
      if (err) console.log(err);
      res.send("updated student");
    });
  })
  //retrieving student
  .get(function (req, res) {
    console.log(req.body);
    student.findById(req.params.studentId, function (err, student) {
      if (err) console.log(err);
      res.send(student);
    });
  })
  //deleting a student
  .delete(function (req, res) {
    console.log(req.body);
    student.findByIdAndDelete(req.params.studentId, req.body, function (err) {
      if (err) console.log(err);
      res.send("deleted student");
    });
  });

router
  .route("/professor/:professorId")
  //updating professor
  .put(function (req, res) {
    console.log(req.body);
    professor.findByIdAndUpdate(
      req.params.professorId,
      req.body,
      function (err) {
        if (err) console.log(err);
        res.send("updated professor");
      }
    );
  })
  //retrieving professor
  .get(function (req, res) {
    console.log(req.body);
    professor.findById(req.params.professorId, function (err, professor) {
      if (err) console.log(err);
      res.send(professor);
    });
  })
  //deleting a professor
  .delete(function (req, res) {
    console.log(req.body);
    professor.findByIdAndDelete(
      req.params.professorId,
      req.body,
      function (err) {
        if (err) console.log(err);
        res.send("deleted professor");
      }
    );
  });

router
  .route("/student/:studentId/courses/:courseId/assignments/:assignmentId")
  //finding assignment by id --done
  .get(function (req, res) {
    assignments.findById(req.params.assignmentId, function (err, assignments) {
      if (err) console.log(err);
      res.send(assignments);
    });
  });

//getting courses for specific user
router.route("/student/:studentId/courses").get(function (req, res) {
  student.findByIdAndUpdate(
    req.params.studentId,
    req.body,
    function (err, courses) {
      if (err) console.log(err);
      res.send(courses);
    }
  );
});
router.route("/professor/:professorId/courses").get(function (req, res) {
  courses.findById(req.params.professorId, function (err, courses) {
    if (err) console.log(err);
    res.send(courses);
  });
});

//adding a course to a student entry
router.route("/student/:studentId/courses/:courseId").put(function (req, res) {
  //we have to add student to course
  courses.findByIdAndUpdate(req.params.courseId, req.body, function (err) {
    //we have to add course to student
    //student.findByIdAndUpdate(req.params.courseId)
    if (err) console.log(err);
  });
});

//bottom of page
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.route("/user").get((req, res, next) => {
  res.send("hello");
});

/* LOG IN ROUTES 
router.route('/student/login')
.post(function(req,res){
});

router.route('/professor/login')
.post(function(req,res){
}); */

/* LOG OUT ROUTES
router.route('/student/:studentId/logout')
.post(function(req,res){
});
router.route('/professor/:professorId/logout')
.post(function(req,res){
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

//student submitted work file 
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

//submitted solution file professor 
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

router.route('/student/:studentId/courses/:courseId/submissions')
.get(function(req,res){
    student.findById(req.params.studentId, req.params.courseId, function(err,submissions){
        if (err)
        console.log(err);
    res.send(submissions)
        });

}); */

module.exports = router;
