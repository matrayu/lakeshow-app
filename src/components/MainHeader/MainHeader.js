import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import TicketListContext from '../../contexts/TicketListContext'
import './MainHeader.css';

export default class MainHeader extends Component {
    static contextType = TicketListContext

    state = {
        loggedIn: this.context.isLoggedIn
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        this.context.setLogin()
    }

    renderLogoutLink() {
        return <Link onClick={this.handleLogoutClick} to='/'>Logout</Link>
    }

    renderLoginLink() {
        return <Link id='login' to='/login'>Log in</Link>
    }

    render() {
        return(
            <header className='MainHeader'>
                <a href='/'>
                    <div className='site_identity'>
                        <div className='lakeshow_logo'></div>
                    </div>
                </a>
                <nav className='MainHeader nav_options'>
                    <ul>
                        <li><Link id='tickets' to='/tickets'>Tickets</Link></li>
                        <li><Link id='seats' to='/seats'>Seats</Link></li>
                        <li><Link id='faq' to='/FAQ'>FAQ</Link></li>
                        <li>{(this.state.loggedIn) ? this.renderLogoutLink() : this.renderLoginLink()}</li>
                        <li><Link id='cart' to='/cart'>Cart</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

