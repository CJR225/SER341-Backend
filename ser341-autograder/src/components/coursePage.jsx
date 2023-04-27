import "./style-course-view.css";
import React, { Component } from 'react';
class CoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          courses: getAssignments(),
          query: "",
        };
        this.handleSearch = this.handleSearch.bind(this);
    
        handleSearch = (event) => {
            this.setState({ query: event.target.value });
          };
        
      }
    state = {  }
    render() { 
        return ( <body>
          
            <div id="menu">
              <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
              <div class="menu-inner">
                <ul class="menu-list">
                  <li class="menu-item">
                    <a href="../indexes/SignIn.html">Logout</a>
                  </li>
                  <li class="menu-item">
                    <a href="../indexes/courses-view-student.html">Courses</a>
                  </li>
                </ul>
              </div>
            </div>
          
          
            <header>
              <div class="container-fluid pt-4 pb-3">
                <div class="row-cols-auto">
                  <div class="col">
                    <h3>CSC 215 - Algorthim Design and Analysis</h3>
                  </div>
                </div>
              </div>
            </header>
          
          
            <main>
              <div class="container-fluid pt-5">
                <h4>Assignments</h4>
                <div class="row mt-4">
                  
                

                </div>
                </div>
            </main>
          </body> );
    }
}
 
export default CoursePage;