import React, { Component } from 'react'
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm'
import './ResetPasswordPage.css'


export default class ResetPasswordPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleSuccess = () => {
        const { history } = this.props
        const destination = '/login'
        history.push(destination)
    }

    handleRenderResetForm = () => {
        return (
            <div>
                <ResetPasswordForm onUserFoundSuccess={this.handleSuccess} tempCreds={this.props.location.pathname.substr(16)}/>
            </div>
        ) 
    }

    handleInvalidCreds = () => {
        return (
            <div className='invalid_creds'>
                There seems to be a mismatch with the credentials or the temp link provided has expired.<br/>
                Please try resetting your password again.
            </div>
        )
    }

    render() {
        return (
        <div className='ResetPasswordPage'>
            <div className='ResetPasswordPage form_container'>
                <h2>Reset Password</h2>
                {this.props.location.pathname === "/reset_password/invalid"
                        ? this.handleInvalidCreds()
                        : this.handleRenderResetForm()
                }
            </div>
            <div className='form__footer'>
                <p>Not a member yet? <span><a href="/signup">Sign Up</a></span></p>
            </div>
        </div>
        )
    }
}