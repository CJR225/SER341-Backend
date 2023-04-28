import React, { Component } from 'react';
class CoursePageBody extends Component {
    render() { 
        const { assignments } = this.props;
        return ( <tbody>
            {assignments.map((assignment, index) => (
              <td key={index}>
                <div class="row mt-4" >
        <div class="col-9 p-3" id="assignments" style={{marginLeft: "35px",width: '25rem',}}>
          <a class="fw-bolder" href="../indexes/AssignmentViewStudent.html" style={{color: 'black'}}><u>{assignment.title} {assignment.name}
             </u></a>
          <div>
            <text class="fw-bold">{assignment.title} {assignment.name}</text>
            <text class="fw-semibold" style={{color: 'red'}}>{assignment.date}</text>
          </div>
          {assignment.description}
        </div>
        </div>
      </td>
            ))}
          </tbody> 
          );
    }
}
 
export default CoursePageBody;