import React, { Component } from 'react'
import { connect } from 'react-redux';

import { register } from '../actions';
import '../css/bootstrap.min.css';
import '../css/form.css';
class Register extends Component {
    state = {
      credentials: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    }
  }

  handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
}

    handleSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.credentials)
        this.props.history.push("/login")
    }
    render() {
        return (
          <div className="container">
            <h1>Sign up for Pintereach</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="firstname" className="col-sm-2 col-form-label">
                  First Name:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    value={this.state.credentials.first_name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lastname" className=" col-sm-2 col-form-label">
                  Last Name:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    value={this.state.credentials.last_name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className=" col-sm-2 col-form-label">
                  Email:    
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">
                  Username:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                  Password:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            <button type="submit" className="btn btn-dark btn-sign">
              Sign Up
            </button>
            </form>
          </div>
        );
    }
}


export default connect(null, { register })(Register);