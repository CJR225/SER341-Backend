import React, { Component } from "react";
import logo from "./SER340img.png";

class CourseHomeBody extends Component {
  render() {
    const { courses } = this.props;
    return (
      
      <tbody>
        {courses.map((course, index) => (
          <td key={index}>
            <div
              className="card shadow-lg border-0"
              style={{marginLeft: "35px",width: '25rem',}}
            >
              <img
                src={logo}
                alt="Logo"
                className="bd-placeholder-img card-img-top"
                style={{borderRadius: 0}}
              />
              <div className="card-body">
                <p className="card-text fw-bold fs-6">
                  <strong>{course.course}</strong>
                </p>
                <p className="card-text fw-bold fs-6">
                  {course.name}
                </p>
                <text style={{fontSize: 15}}>{course.instructor}</text>
              </div>
            </div>
          </td>
        ))}
      </tbody>
    );
  }
}

export default CourseHomeBody;
