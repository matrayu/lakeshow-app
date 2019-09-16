import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'

import './SignupPage.css';

export default class SignupPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/tickets'
        history.push(destination)
    }
    
    render() {
        return (
            <div className='SignupPage'>
                <div className='SignupPage form_container'>
                    <h2>Sign Up</h2>
                    <SignupForm onSubmit={this.handleSubmit}/>
                </div>
                <div className='form__footer'>
                    <p>Already have an account? <span><a href="/login">Log In</a></span></p>
                </div>
            </div>
        )
    }
}