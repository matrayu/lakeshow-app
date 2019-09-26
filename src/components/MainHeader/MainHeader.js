import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import TicketContext from '../../contexts/TicketContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './MainHeader.css';

export default class MainHeader extends Component {
    static contextType = TicketContext

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
                        <li>{TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}</li>
                        <li>
                            <Link id='cart' to='/cart'>
                                {this.context.cart.length === 0 
                                    ? <FontAwesomeIcon icon={faShoppingCart} size='lg' color='#552583'/>
                                    : <FontAwesomeIcon icon={faCartPlus} size='lg' color='#552583' />
                                }
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

