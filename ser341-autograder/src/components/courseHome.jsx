import React, { Component } from "react";
import "./style-course-view.css";
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

        <main>
          <div className="container mb-5 mt-5" style={{marginRight: "20px"}}>
            <div className="row-cols-auto">
              <div className="col-3">
                <div className="input-group rounded-0">
                  <span
                    className="input-group-text rounded-0"
                    id="search-addon"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="search"
                    className="form-control rounded-0"
                    placeholder="Search your courses"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        <React.Fragment>
          <div className="container g-3">
            <CourseHomeBody courses={this.state.courses} />
          </div>
        </React.Fragment>
      </body>
    );
  }
}

export default CourseHome;
