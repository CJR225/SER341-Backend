import "./SignInSignUpStyle.css";
import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./form";

class SignUp extends Form {
  state = {
    data: { username: "", email: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };
  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };
  render() {
    return (
      <body>
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

          <main>
            <div className="container py-4 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div
                    className="card  text-white"
                    styles="border-radius: 1rem;"
                  >
                    <div className="card-body p-5 pb-3 text-center">
                      <div className="mb-md-2 mt-md-2">
                        <h2 className="fw-bold mb-2 pb-2">
                          Welcome to Auto Grader
                        </h2>

                        <p className="pb-4">
                          Please fill in the following to Sign Up!
                        </p>

                        <div className="form-outline form-white mb-4">
                          <form styles="{{}}" onSubmit={this.handleSubmit}>
                            {this.renderInput("username", "Username")}
                            {this.renderInput("email", "Email")}
                            {this.renderInput(
                              "password",
                              "Password",
                              "password"
                            )}
                          </form>

                          <div
                            className="optionbox mb-4 rounded mt-3"
                            name="users"
                          >
                            <select id="options">
                              <option value="selectUser">
                                {" "}
                                Please select{" "}
                              </option>
                              <option value="student">Student</option>
                              <option value="professor">Professor</option>
                            </select>
                          </div>
                          <div>{this.renderButton("Sign Up")}</div>
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
              Chris Rocco - Emily Balboni - Amber Kusma &copy; Quinnipiac 2022
            </div>
          </footer>
        </div>
      </body>
    );
  }
}

export default SignUp;
