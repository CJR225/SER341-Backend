import "./SignInSignUpStyle.css";
import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./form";
class SignIn extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };
  render() {
    return (
      <body>
        <div class="background">
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

          <main class="pt-2">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div class="card text-white" styles="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">
                      <div class="mb-md-5 mt-md-2">
                        <h2 class="fw-bold mb-2 pb-2">
                          Welcome to Auto Grader
                        </h2>

                        <p class="pb-4">Please Sign In!</p>

                        <div class="form-outline form-white mb-4">
                          <form styles="{{}}" onSubmit={this.handleSubmit}>
                            {this.renderInput("username", "Username")}
                            {this.renderInput(
                              "password",
                              "Password",
                              "password"
                            )}
                          </form>

                          <div className="mt-5">{this.renderButton("Sign In")}</div>
                        </div>

                        <div>
                          <p class="mb-0">
                            Don't have an account?{" "}
                            <a
                              href="../indexes/SignUp.html"
                              class="text-white-50"
                            >
                              Sign Up
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer>
            <div class="text-center fixed-bottom pb-3">
              Chris Rocco - Emily Balboni - Amber Kusma &copy; Quinnipiac 2022
            </div>
          </footer>
        </div>
      </body>
    );
  }
}

export default SignIn;
