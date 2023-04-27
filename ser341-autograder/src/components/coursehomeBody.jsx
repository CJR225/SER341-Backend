import React, { Component } from "react";
import logo from "./SER340img.png";

class CourseHomeBody extends Component {
  render() {
    const { courses } = this.props;
    console.log(courses);
    return (
      
      <body>
        {courses.map((course, index) => (
          <td key={index}>
            <div
              className="card shadow-lg"
              style={{ width: "25rem", marginLeft: "30px" }}
            >
              <img
                src={logo}
                alt="Logo"
                className="bd-placeholder-img card-img-top"
              />
              <div className="card-body">
                <p className="card-text fw-bold fs-5">
                  <strong>{course.course}</strong>
                </p>
                <p className="card-text fw-bold fs-5">
                  {course.name}
                </p>
                <text>{course.instructor}</text>
              </div>
            </div>
          </td>
        ))}
      </body>
    );
  }
}

export default CourseHomeBody;
