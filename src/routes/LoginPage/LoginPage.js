import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css';

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        //const destination = (location.state || {}).from || '/tickets'
        //history.push(destination)
        history.goBack()
    }

    render() {
        const { location, history } = this.props
        console.log(location)
        console.log(history)
        return (
        <div className='LoginPage'>
            <div className='LoginPage form_container'>
                <h2>LogIn</h2>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
            </div>
            <div className='form__footer'>
                <p>Not a member yet? <span><a href="/signup">Sign Up</a></span></p>
            </div>
        </div>
        )
    }
}