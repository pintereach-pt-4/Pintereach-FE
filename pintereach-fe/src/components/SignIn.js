import React from 'react';

import '../css/bootstrap.min.css';
import '../css/form.css';


class SignIn extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials);
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
        return (
          <div className="container">
            <h1 id="signinHeader">Login Form</h1>
            <form onSubmit={this.login}>
              <div className="form-group row">
                <label for="username" className="col-sm-2 col-form-label">
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
                <label for="password" className="col-sm-2 col-form-label">Password:  </label>
                <div className="col-sm-6">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-dark btn-sign">
                Sign In
              </button>
            </form>
          </div>
        );
    }
}

export default SignIn;