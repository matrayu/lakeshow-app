import React, { Component } from 'react';
import './LoginForm.css'

class LoginForm extends Component {
    render() {
        return (
            <form className='LoginForm' /* onSubmit={this.handleSubmitJwtAuth} */>
                {/* <div role='alert'>
                {error && <p className='red'>{error}</p>}
                </div> */}
                <div className="form entries">
                    <label htmlFor="username"></label>
                    <input
                        className="form-control"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        /* value={state.username} */
                        /* onChange={this.handleChange} */
                    />

                    <label htmlFor="password"></label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        /* value={state.password}
                        onChange={this.handleChange} */
                    />
                </div>
                <div className='forgot-pw'>
                    <a href='/password-reset'>Forgot Password?</a>
                </div>
                <div className='form__btns'>
                    <button className="btn btn-success btn-block">Login</button>
                    <button className="btn btn-success btn-block" /* onClick={this.handleDemoLogin} */>Demo Login</button>
                </div>
                
            </form>
        )
    }
}

export default LoginForm;