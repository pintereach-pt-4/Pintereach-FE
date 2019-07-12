import React, { Component } from 'react'

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
            <div>

                <form>
                <input 
                type='text' 
                name='firstname' 
                value={this.state.firstname}
                onchange={this.handleChange}
                 />
                 <input 
                type='text' 
                name='lastname' 
                value={this.state.lastname}
                onchange={this.handleChange}
                 />
                 <input 
                type='text' 
                name='email' 
                value={this.state.email}
                onchange={this.handleChange}
                 />
                <input 
                type='text' 
                name='username' 
                value={this.state.username}
                onchange={this.handleChange}
                 />
                 <input 
                type='text' 
                name='password' 
                value={this.state.password}
                onchange={this.handleChange}
                 />
                 </form>
                 <button></button>
            </div>
        )
    }
}


export default Register