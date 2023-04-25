import "./SignInSignUp.css"
import React, { Component } from 'react';


class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <body>

          
            <div className="background">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          
          
              <main className="pt-5">
          
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div className="card  text-white" styles="border-radius: 1rem;">
                        <div className="card-body p-5 pb-3 text-center">
          
                          <div className="mb-md-2 mt-md-2">
          
                            <h2 className="fw-bold mb-2 pb-2">Welcome to Auto Grader</h2>
          
                            <p className="pb-4">Please fill in the following to Sign Up!</p>
          
                            <div className="form-outline form-white mb-4">
                              <div className="input">
                                <input type="username" id="typeUsername" className="form-control form-control-lg"
                                  placeholder="Username" />
                                <label className="form-label pt-2" for="typeUsername">Username</label>
                              </div>
          
                              <div className="form-outline form-white ">
                                <input type="email" id="typeEmail" className="form-control form-control-lg" placeholder="Email" />
                                <label className="form-label pt-2" for="typeEmail">Email</label>
                              </div>
          
                              <div className="form-outline form-white mb-4">
                                <input type="password" id="typePassword" className="form-control form-control-lg"
                                  placeholder="Password" />
                                <label className="form-label pt-2" for="typePassword">Password</label>
                              </div>
          
                              <div className="optionbox mb-5 rounded" name="users">
          
                                <select id="options">
                                  <option value="selectUser"> Please select </option>
                                  <option value="student">Student</option>
                                  <option value="professor">Professor</option>
                                </select>
          
                              </div>
                              <div>
                                <button className="btn btn-outline-light btn-lg px-5" type="submit" onclick="sub()">Sign Up</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </main>
          
        
          
              <footer>
                <div className="text-center fixed-bottom pb-3">
                  Chris Rocco - Emily Balboni - Amber Kusma
                  &copy; Quinnipiac 2022
                </div>
              </footer>
          
            </div>
          </body>
           );
    }
}
 
export default SignUp;