import React, { Component } from 'react';
import ResetPasswordServices from '../../services/reset-password-service'
import HelpersService from '../../services/helpers-service'

import './ResetPasswordForm.css'

export default class ResetPasswordForm extends Component {
    static defaultProps = {
        onUserFoundSuccess: () => {}
    }
    
    state = {
        email: '',
        isValid: false,
        error: '',
        password: '',
        confirmPassword: '',
        passwordMatch: false,
        errorPass: null,
        errorConfirmPass: null,
        errorEmail: null,
        tempCreds: this.props.tempCreds,
        credsConfirmed: false
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
        
        if (name === 'email') {
            this.setState({ error: HelpersService.checkEmail(value).error })
        } else {
            if (name === 'password') {
                this.setState({ errorPass: HelpersService.checkPassword(value).error })
            } else {
                if (name === 'confirmPassword') {
                    this.setState({ errorConfirmPass: HelpersService.checkConfirmPassword(this.state.password, value).error })
                }
            }
        }
    }
        
    handleSubmitEmail = event => {
        event.preventDefault()

        const { email, tempCreds } = this.state
        this.setState({ error: null })

        ResetPasswordServices.confirmValidResetCreds({
            email: email,
            tempCreds: tempCreds
        })
        .then(res => {
            this.setState({ credsConfirmed: true })
        })
        .catch(res => {
            console.error(res.error)
            this.setState({ 
                isValid: false,
                error: res.error
            })
        })
    }

    handleSubmitNewPassword = event => {
        event.preventDefault()

        const { email, password, tempCreds } = this.state
        this.setState({ error: null })

        ResetPasswordServices.resetForgottenPassword({
            email: email,
            password: password,
            tempCreds: tempCreds
        })
        .then(res => {
            this.setState({
                email: '',
                isValid: false,
                error: '',
                password: '',
                confirmPassword: '',
                passwordMatch: false,
                errorPass: null,
                errorConfirmPass: null,
                errorEmail: null,
                tempCreds: '',
                credsConfirmed: false  
            })
            this.props.onUserFoundSuccess()
        })
        .catch(res => {
            console.error(res.error)
            this.setState({ 
                isValid: false,
                error: res.error
            })
        })
    }

    renderUnconfirmed = () => {
        let props = this.props
        return (
            <div>
                <div>Please enter your email address</div>
                <form className="form-group" onSubmit={this.handleSubmitEmail}>
                    <div className="form entries">
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
                        <div className='error'>{this.state.error}</div> 
                    </div>
                    <div className='form__btns register__btn'>
                        <button className="btn btn-success btn-block">Send</button>
                    </div>
                </form>
            </div>
        );
    }

    renderConfirmed = () => {
        let props = this.props
        return (
            <div>
                <div>Please enter your new password</div>
                <form className="form-group" onSubmit={this.handleSubmitNewPassword}>
                    <div className="form entries">
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
                        <div className='error'>{this.state.error}</div> 
                    </div>
                    <div className='form__btns register__btn'>
                        <button className="btn btn-success btn-block">Send</button>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.credsConfirmed === true
                    ? this.renderConfirmed()
                    : this.renderUnconfirmed()
                }
            </div>
        )
    }
}

