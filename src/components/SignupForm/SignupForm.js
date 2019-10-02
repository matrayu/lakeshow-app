import React, { Component } from 'react';
import TicketListContext from '../../contexts/TicketListContext'
import AuthApiService from '../../services/auth-api-service'
import HelpersService from '../../services/helpers-service'

import './SignupForm.css'

export default class SignupForm extends Component {
    static defaultProps = {
        onSignUpSuccess: () => {}
    }
    
    static contextType = TicketListContext

    state = {
        username: '',
        password: '',
        confirmPassword: '',
        passwordMatch: false,
        first_name: '',
        last_name: '',
        isValid: false,
        errorUsername: null,
        errorPass: null,
        errorConfirmPass: null,
        errorEmail: null,
        errorFirstName: null,
        errorLastName: null,
        errorGender: null,
        email: '',
        dob: '',
        gender: '',
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
        
        if (name === 'username') {
            this.setState({ 
                errorUsername: HelpersService.checkUsername(value).error })
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
                        if (name === 'first_name') {
                            this.setState({ errorFirstName: HelpersService.checkFirstName(value).error })
                        }
                        else {
                            if (name === 'last_name') {
                                this.setState({ errorLastName: HelpersService.checkLastName(value).error })
                            }
                        }
                    }    
                }
            }
        }
    }
        
    handleSubmit = event => {
        //let { errorPass, errorConfirmPass, errorFullName, errorEmail, errorUsername } = this.state
        event.preventDefault()
        if (this.state.gender === '') {
            this.setState({ errorGender: 'Please specify a gender' })
            return
        }
        /* if (errorConfirmPass === null & errorPass === null & errorFullName === null & errorEmail === null & errorUsername === null) {
            this.setState({ isValid: true })
        }
        if (!this.state.isValid) {
            return
        } */


        const { email, username, password, first_name, last_name, dob, gender } = this.state
        this.setState({ error: null })
        AuthApiService.postUser({
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email,
            dob: dob,
            gender: gender,

        })
        .then(user => {
            this.setState({
                username: '',
                password: '',
                confirmPassword: '',
                passwordMatch: false,
                first_name: '',
                last_name: '',
                dob_name: '',
                gender: '',
                email: '',
                isValid: false,
                errorUsername: null,
                errorPass: null,
                errorConfirmPass: null,
                errorEmail: null,
                errorFirstName: null,
                errorLastName: null,
            })
            this.context.setLogin()
            this.context.clearError()
            this.props.onSignUpSuccess()
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
                    <label htmlFor="first_name"></label>
                    <input
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        type="text"
                        placeholder="First Name"
                        value={props.first_name}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='error'>{this.state.errorFirstName}</div>

                    <label htmlFor="first_name"></label>
                    <input
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        type="text"
                        placeholder="Last Name"
                        value={props.last_name}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='error'>{this.state.errorLastName}</div>

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
                    <div className='error'>{this.state.errorUsername}</div>
        
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
                    <div className='birthdate'>
                        <label id='birthdate' htmlFor="dob">Birth Date</label>
                        <input
                            className="form-control"
                            id="dob"
                            name="dob"
                            type="date"
                            value={props.dob}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    

                    <label htmlFor="gender"></label>
                    <div className='gender_grp'>
                        <input
                            className="form-control"
                            id="male"
                            name="gender"
                            type="radio"
                            value='male'
                            onChange={this.handleChange}
                            />
                            <p>Male</p>

                        <input
                            className="form-control"
                            id="female"
                            name="gender"
                            type="radio"
                            value='female'
                            onChange={this.handleChange}/>
                            <p>Female</p>

                        <input
                            className="form-control"
                            id="other"
                            name="gender"
                            type="radio"
                            value='other'
                            onChange={this.handleChange}/>
                            <p>Other</p>
                        
                        <input
                            className="form-control"
                            id="ratherNotSay"
                            name="gender"
                            type="radio"
                            value='ratherNotSay'
                            onChange={this.handleChange}/>
                            <p>Rather not say</p>
                    </div>
                    <div className='error'>{this.state.errorGender}</div>
                    <div className='error'>{this.state.error}</div>  
                </div>
                <div className='form__btns register__btn'>
                    <button className="btn btn-success btn-block">Register</button>
                </div>
            </form>
        );
    }

}

