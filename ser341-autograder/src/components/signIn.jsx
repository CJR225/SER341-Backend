import React, { Component } from "react";
class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
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

          <main className="pt-5">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card text-white" styles="border-radius: 1rem;">
                    <div className="card-body p-5 text-center">
                      <div className="mb-md-5 mt-md-2">
                        <h2 className="fw-bold mb-2 pb-2">
                          Welcome to Auto Grader
                        </h2>

                        <p className="pb-4">Please Sign In!</p>

                        <div className="form-outline form-white mb-4">
                          <div className="input">
                            <input
                              type="username"
                              id="typeUsername"
                              className="form-control form-control-lg"
                              placeholder="Username"
                            />
                            <label className="form-label pt-2" for="typeUsername">
                              Username
                            </label>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <input
                              type="password"
                              id="typePassword"
                              className="form-control form-control-lg"
                              placeholder="Password"
                            />
                            <label className="form-label pt-2" for="typePassword">
                              Password
                            </label>
                          </div>

                          <p className="small mb-2 pb-lg-2">
                            <a className="text-white-50" href="#!">
                              Forgot password?
                            </a>
                          </p>

                          <button
                            className="btn btn-outline-light btn-lg px-5"
                            type="submit"
                            onclick="check()"
                          >
                            Login
                          </button>
                        </div>

                        <div>
                          <p className="mb-0">
                            Don't have an account?{" "}
                            <a
                              href="../indexes/SignUp.html"
                              className="text-white-50"
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
            <div className="text-center fixed-bottom pb-3">
              Chris Rocco - Emily Balboni - Amber Kusma
              {"\n"}
              &copy; Quinnipiac 2022
            </div>
          </footer>
        </div>
      </body>
    );
  }
}

export default SignIn;
