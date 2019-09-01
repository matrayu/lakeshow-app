import React, { Component } from 'react';

import './SignupForm.css'

export default class SignupForm extends Component {
    render() {
        return (
            <form className="form-group">
                <div className="form entries">
                    <label htmlFor="username"></label>
                    <input
                        className="form-control"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        /* value={props.username}
                        onChange={props.handleChange} */
                        required
                    />
        
                    <label htmlFor="email"></label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        /* value={props.email}
                        onChange={props.handleChange} */
                    />
        
                    <label htmlFor="password"></label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        /* value={props.password}
                        onChange={props.handleChange} */
                    /> 
        
                    <label htmlFor="confirmPassword"></label>
                    <input
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        /* value={props.confirmPassword}
                        onChange={props.handleChange} */
                    />
                </div>
                <div className='form__btns register__btn'>
                    <button className="btn btn-success btn-block">Register</button>
                </div>
            </form>
        );
    }
}