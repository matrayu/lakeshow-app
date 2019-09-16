import React, { Component } from 'react';
import TicketListContext from '../../contexts/TicketListContext'
import AuthApiService from '../../services/auth-api-service'

import './LoginForm.css'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    static contextType = TicketListContext

    state = {
        username: '',
        password: '',
        error: null
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target
        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
        .then(res => {
            return AuthApiService.getUserData(res.user_id)
        })
        .then(res => {
            this.context.setUserData(res.userData)
            this.context.setLogin()
            username.value = ''
            password.value = ''
            this.props.onLoginSuccess()
        })
        .catch(res => {
            console.error(res.error)
            this.setState({ error: res.error })
        })
    }

    handleChange = ev => {
        const target = ev.target;
        const value = target.value
        const name = target.name
        this.setState({ [name]: value })
    }

    handleDemoLogin = () => {
        const username = 'kobe24'
        const password = 'Tester12#'
        this.setState({
            username: username,
            password: password,
            error: null
        })
    }

    render() {
        const state = this.state
        const { error } = this.state
        return (
            <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
                <div role='alert'>
                {error && <p className='red'>{error}</p>}
                </div>
                <div className="form entries">
                    <label htmlFor="username"></label>
                    <input
                        className="form-control"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={state.username}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password"></label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='forgot-pw'>
                    <a href='/password-reset'>Forgot Password?</a>
                </div>
                <div className='form__btns'>
                    <button className="btn btn-success btn-block">Login</button>
                    <button className="btn btn-success btn-block" onClick={this.handleDemoLogin}>Demo Login</button>
                </div>
                
            </form>
        )
    }
}