import React, { Component } from 'react'
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm'
import './ForgotPasswordPage.css'


export default class ForgotPasswordPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleSuccess = () => {
        const { history } = this.props
        const destination = '/forgot_password/reset'
        history.push(destination)
    }

    handleRenderRequestForm = () => {
        return <ForgotPasswordForm onUserFoundSuccess={this.handleSuccess}/>
    }

    handleRenderRequestSubmitted = () => {
        return (
            <div className='email_instuctions'>If your email was found, instructions on how to reset your password have been emailed to you.</div>
        )
    }

    render() {
        return (
        <div className='ForgotPasswordPage'>
            <div className='ForgotPasswordPage form_container'>
                <h2>Forgot Password</h2>
                {this.props.location.pathname === "/forgot_password/reset"
                        ? this.handleRenderRequestSubmitted()
                        : this.handleRenderRequestForm()
                }
            </div>
            <div className='form__footer'>
                <p>Not a member yet? <span><a href="/signup">Sign Up</a></span></p>
            </div>
        </div>
        )
    }
}