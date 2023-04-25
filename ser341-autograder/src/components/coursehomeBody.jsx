import React, { Component } from "react";
import logo from "./SER340img.png";

class CourseHomeBody extends Component {
  render() {
    const { courses } = this.props;
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
                  <strong> course {courses.course}</strong>
                </p>
                <p className="card-text fw-bold fs-5">
                  {courses.name} course name
                </p>
                <text>{courses.instructor} instructor</text>
              </div>
            </div>
          </td>
        ))}
      </body>
    );
  }
}

export default CourseHomeBody;
