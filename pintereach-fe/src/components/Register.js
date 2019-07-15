import React, { Component } from 'react'

import '../css/bootstrap.min.css';
import '../css/form.css';
class Register extends Component {
    state = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    }

    handleChange = e => {
        this.setState({ value: e.target.value})
    }
    render() {
        return (
          <div className="container">
            <h1>Sign up for Pintereach</h1>
            <form>
              <div className="form-group row">
                <label for="firstname" className="col-sm-2 col-form-label">
                  First Name:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={this.state.firstname}
                    onchange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="lastname" className=" col-sm-2 col-form-label">
                  Last Name:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={this.state.lastname}
                    onchange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="email" className=" col-sm-2 col-form-label">
                  Email:    
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onchange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="username" className="col-sm-2 col-form-label">
                  Username:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onchange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="password" className="col-sm-2 col-form-label">
                  Password:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onchange={this.handleChange}
                  />
                </div>
              </div>
            </form>
            <button type="submit" className="btn btn-dark btn-sign">
              Sign Up
            </button>
          </div>
        );
    }
}


export default Register