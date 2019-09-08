import React, { Component } from 'react'
import './MainHeader.css';

export default class MainHeader extends Component {
    render() {
        return(
            <header className='MainHeader'>
                <a href='/'>
                    <div className='site_identity'>
                        <div className='lakeshow_logo'>
                            <img src='https://raw.githubusercontent.com/matrayu/lakeshow-app/static_version/src/images/LakeshowLogo.png?token=AKXPMWGA4GKXGRMBNSPW7LK5OSHFY' alt='Lakeshow Tickets Logo' width="150" height="150"></img>
                        </div>
                        <h1></h1>
                    </div>
                </a>
                <nav className='MainHeader nav_options'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/tickets">Tickets</a></li>
                        <li><a href="/seats">Seats</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

