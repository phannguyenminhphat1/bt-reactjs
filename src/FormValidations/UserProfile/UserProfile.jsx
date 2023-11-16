import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  };
  handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    let newValues = { ...this.state.values, [name]: value };
    let newErr = { ...this.state.errors };
    if (value.trim() === "") {
      newErr[name] = name + " không được rỗng !";
    } else {
      newErr[name] = "";
    }
    this.setState({
      values: newValues,
      errors: newErr,
    });
  };

  render() {
    return (
      <div
        className="container-fluid form__content"
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <form className="userForm bg-white">
          <h1 className="text-center">USER PROFILE</h1>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  name="firstName"
                  value={this.state.values.firstName}
                  onChange={this.handleOnChangeInput}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>First Name</label>
                <span className="text-danger">
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  name="lastName"
                  value={this.state.values.lastName}
                  onChange={this.handleOnChangeInput}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Last Name</label>
                <span className="text-danger">
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  name="username"
                  value={this.state.values.username}
                  onChange={this.handleOnChangeInput}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Username</label>
                <span className="text-danger">
                  {this.state.errors.username}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  value={this.state.values.email}
                  name="email"
                  onChange={this.handleOnChangeInput}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
                <span className="text-danger">{this.state.errors.email}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  name="password"
                  value={this.state.values.password}
                  onChange={this.handleOnChangeInput}
                />

                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Password</label>
                <span className="text-danger">
                  {this.state.errors.password}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  name="confirmPassword"
                  value={this.state.values.confirmPassword}
                  onChange={this.handleOnChangeInput}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Confirm Password</label>
                <span className="text-danger">
                  {this.state.errors.confirmPassword}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-dark w-100 btn-submit">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
