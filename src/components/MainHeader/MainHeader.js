import React, { Component } from 'react'
import './MainHeader.css';

export default class MainHeader extends Component {
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
                        <li><a href="/tickets">Tickets</a></li>
                        <li><a href="/seats">Seats</a></li>
                        <li><a href="/FAQ">FAQ</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

