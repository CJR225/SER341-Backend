import "./style-course-view.css";
import React, { Component } from "react";
import { getCourses } from "../services/courseService";
import CourseHomeBody from "./coursehomeBody";

class CourseHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: getCourses(),
      query: "",
    };
    this.handleSearch = this.handleSearch.bind(this);


    
  }

  
  handleSearch = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <body>
        <div id="menu">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="menu-inner">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="../indexes/SignIn.html">Logout</a>
              </li>
              <li className="menu-item">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#joincourseModal"
                  href="#"
                >
                  Join Course
                </a>
              </li>
            </ul>
          </div>
        </div>

        <header>
          <div className="container p-4">
            <div className="row-cols-auto">
              <div>
                <h3>Courses</h3>
              </div>
            </div>
          </div>
        </header>



        <React.Fragment>
          <div className="container mt-5">
            <CourseHomeBody courses={this.state.courses} />
          </div>
        </React.Fragment>
      </body>
    );
  }
}

export default CourseHome;
