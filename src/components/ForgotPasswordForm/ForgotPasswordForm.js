import React, { Component } from 'react';
import HelpersService from '../../services/helpers-service'
import ResetPasswordServices from '../../services/reset-password-service'

import './ForgotPasswordForm.css'

export default class ForgotPasswordForm extends Component {
    static defaultProps = {
        onUserFoundSuccess: () => {}
    }
    
    state = {
        email: '',
        isValid: false,
        error: '',
        errorEmail: null,
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
        
        if (name === 'email') {
            this.setState({ error: HelpersService.checkEmail(value).error })
        }
    }
        
    handleSubmit = event => {
        event.preventDefault()

        const { email } = this.state
        this.setState({ error: null })

        ResetPasswordServices.confirmUserAccount({
            email: email,
        })
        .then(user => {
            this.setState({
                email: '',
                isValid: false,
                error: null,
                errorEmail: null,
            })
            this.props.onUserFoundSuccess()
        })
        .catch(res => {
            console.error(res.error)
            this.setState({ 
                isValid: false,
                error: res.error
            })
            //this.props.onUserFoundSuccess()
        })
    }

    render() {
        let props = this.props
        return (
            <form className="form-group" onSubmit={this.handleSubmit}>
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
        );
    }

}

