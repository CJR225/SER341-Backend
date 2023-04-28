import "./style-course-view.css";
import React, { Component } from "react";
import { getAssignments } from "../services/assignmentService";
import CoursePageBody from "./coursepageBody";
import SideBar from "./sideBar";

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: getAssignments(),
      query: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (event) => {
    this.setState({ query: event.target.value });
  };
  render() {
    return (
      <body style={{ backgroundColor: "#26394e", minHeight: "100" }}>
        <SideBar />

        <header>
          <div class="container pt-4 pb-3">
            <div class="row-cols-auto">
              <div class="col">
                <h3>CSC 215 - Algorthim Design and Analysis</h3>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div class="container pt-5" >
            <h4 style={{marginLeft: "35px"}}>Assignments</h4>

            <React.Fragment>
              <div>
                <CoursePageBody assignments={this.state.assignments} />
              </div>
            </React.Fragment>
          </div>
        </main>
      </body>
    );
  }
}

export default CoursePage;
