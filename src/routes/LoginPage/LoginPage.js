import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css';

export default class LoginPage extends Component {
    render() {
        return (
        <div className='LoginPage'>
            <header className='form__header'>
                <a href='/'>Lakeshow Tickets</a>
            </header>
            <div className='LoginPage form_container'>
                <h2>LogIn</h2>
                <LoginForm />
            </div>
            <div className='form__footer'>
                <p>Not a member yet? <span><a href="/signup">Sign Up</a></span></p>
            </div>
        </div>
        )
    }
}