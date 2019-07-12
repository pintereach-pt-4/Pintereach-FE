import React from 'react';


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
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}

export default SignIn;