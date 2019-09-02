import React, { Component } from 'react';
import './HomeFooter.css'

class HomeFooter extends Component {
    render() {
        return (
            <section className='HomeFooter'>
                <div className='HomeFooter bg_img'></div>
                <div className='get_tickets container'>
                    <h1>Get The Game You Want</h1>
                    <button><a href='/tickets'>Find Tickets</a></button>
                    <button><a href='/login'>Log In</a></button>
                </div>
            </section>
        )
    }
}

export default HomeFooter;