import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinWink } from '@fortawesome/free-solid-svg-icons';

import './FaqPage.css';

export default class FaqPage extends Component {
    render() {
        return (
        <div className='FaqPage'>
            <div className='FaqPage_container'>
                <h1 className='page_headings'>Frequently Asked Questions</h1>
            </div>
            <div className='FaqPage questions'>
                <h4>Do you charge any fees?</h4>
                <p>Nope. Never.</p>

                <h4>Are the tickets legit?</h4>
                <p>Fair question. Yes! Don't believe us - call me!  310-439-9904</p>

                <h4>Are there refunds?</h4>
                <p>If the tickets haven't been transferred (emailed) to you yet, sure!</p>

                <h4>Do you have other seats besides your own season seats?</h4>
                <p>Sometime! If you look around the ticket section, you might find some hidden gems...</p>

                <h4>Should I just buy on Stubhub or Ticketmaster?</h4>
                <p>Sure.. if you like paying more. Same tickets here, just lower prices!</p>

                <h4>Can I purchase the entire season or a partial season?</h4>
                <p>I don't see why not. If we have the tickets available, we're open to discussing.</p>

                <h4>Do you have parking passes?</h4>
                <p>Nope... but I can tell you where to find free parking around STAPLES Center
                    <FontAwesomeIcon icon={faGrinWink} size='lg' color='#552583' className='faGrinWink'/>
                </p>

                <h4>How will I receive the tickets?</h4>
                <p>Tickets are sent via email. They are sent using Ticketmasters processing service.</p>

                <h4>What if I want physical tickets?</h4>
                <p>No problem! We're local to Los Angeles and you are more then welcome to come pick up. Otherwise, we can always arrange to ship them to you.</p>

                <h4>More Questions?</h4>
                <p>Email Us! <a href = "mailto: info@lakeshowtix.com" target="_blank" rel="noopener noreferrer">info@lakeshowtix.com</a></p>
            </div>
        </div>
        )
    }
}