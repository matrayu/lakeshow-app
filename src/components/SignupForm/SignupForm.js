import React, { Component } from 'react';
import TicketListContext from '../../contexts/TicketListContext'
import AuthApiService from '../../services/auth-api-service'
import HelpersService from '../../services/helpers-service'

import './SignupForm.css'

export default class SignupForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    static contextType = TicketListContext

    state = {
        username: '',
        password: '',
        confirmPassword: '',
        passwordMatch: false,
        full_name: '',
        isValid: false,
        errorName: null,
        errorPass: null,
        errorConfirmPass: null,
        errorEmail: null,
        errorFullName: null,
        email: '',
    }

    handleChange = event => {
        const {name, value} = event.target
        console.log(name)
        this.setState({ [name]: value })
        if (name === 'username') {
            this.setState({ 
                errorName: HelpersService.checkUsername(value).error })
        } else {
            if (name === 'email') {
                this.setState({ errorEmail: HelpersService.checkEmail(value).error })
            } else {
                if (name === 'password') {
                    this.setState({ errorPass: HelpersService.checkPassword(value).error })
                } else {
                    if (name === 'confirmPassword') {
                        this.setState({ errorConfirmPass: HelpersService.checkConfirmPassword(this.state.password, value).error })
                    }
                    else {
                        if (name === 'full_name') {
                            this.setState({ errorFullName: HelpersService.checkName(value).error })
                        }
                    }    
                }
            }
        }   
    }
        
    handleSubmit = event => {
        let { errorPass, errorConfirmPass, errorFullName, errorEmail, errorName } = this.state
        event.preventDefault()
        if (errorConfirmPass === null & errorPass === null & errorFullName === null & errorEmail === null & errorName === null) {
            this.setState({ isValid: true })
        }
        if (!this.state.isValid) {
            return
        }


        const { email, username, password, full_name } = this.state
        this.setState({ error: null })
        AuthApiService.postUser({
            username: username,
            password: password,
            full_name: full_name,
            email: email

        })
        .then(user => {
            this.setState({
                username: '',
                password: '',
                confirmPassword: '',
                passwordMatch: false,
                full_name: '',
                isValid: false,
                errorName: null,
                errorPass: null,
                errorConfirmPass: null,
                errorEmail: null,
                errorFullName: null,
                email: '',
            })
        })
        .catch(res => {
            console.error(res.error)
            this.setState({ 
                isValid: false,
                error: res.error 
            })
        })
    }

    render() {
        let props = this.props
        return (
            <form className="form-group" onSubmit={this.handleSubmit}>
                <div className="form entries">
                    <label htmlFor="full_name"></label>
                    <input
                        className="form-control"
                        id="full_name"
                        name="full_name"
                        type="text"
                        placeholder="Full Name"
                        value={props.full_name}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='error'>{this.state.errorFullName}</div>

                    <label htmlFor="username"></label>
                    <input
                        className="form-control"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={props.username}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='error'>{this.state.errorName}</div>
        
                    <label htmlFor="email"></label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        value={props.email}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='error'>{this.state.errorEmail}</div>
        
                    <label htmlFor="password"></label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={props.password}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='error'>{this.state.errorPass}</div> 
        
                    <label htmlFor="confirmPassword"></label>
                    <input
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        value={props.confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='error'>{this.state.errorConfirmPass}</div> 
                </div>
                <div className='form__btns register__btn'>
                    <button className="btn btn-success btn-block">Register</button>
                </div>
            </form>
        );
    }
}