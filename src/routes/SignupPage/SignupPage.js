import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './SignupPage.css';

export default class SignupPage extends Component {
    render() {
        return (
            <div className='SignupPage'>
                <header className='form__header'>
                    <a href='/'>Lakeshow Tickets</a>
                </header>
                <div className='SignupPage form_container'>
                    <h2>Sign Up</h2>
                    <SignupForm />
                </div>
                <div className='form__footer'>
                    <p>Already have an account? <span><a href="/login">Log In</a></span></p>
                </div>
            </div>
        )
    }
}