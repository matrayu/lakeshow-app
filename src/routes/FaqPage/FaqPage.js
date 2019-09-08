import React, { Component } from 'react'

import './FaqPage.css';

export default class FaqPage extends Component {
    render() {
        return (
        <div className='FaqPage'>
            <div className='FaqPage_container'>
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className='FaqPage questions'>
                <h4>Do you charge any fees?</h4>
                <p>Anim ut cillum quis proident ea voluptate sint.</p>

                <h4>Are the tickets legit?</h4>
                <p>Anim ut cillum quis proident ea voluptate sint.</p>

                <h4>Are there refunds?</h4>
                <p>Anim ut cillum quis proident ea voluptate sint.</p>

                <h4>Do you have other seats?</h4>
                <p>Anim ut cillum quis proident ea voluptate sint.</p>

                <h4>Should I just buy on Stubhub or Ticketmaster?</h4>
                <p>Anim ut cillum quis proident ea voluptate sint.</p>

                <h4>Can I purchase the entire season?</h4>
                <p>Anim ut cillum quis proident ea voluptate sint.</p>

                <h4>Do you have parking passes?</h4>
                <p>Anim ut cillum quis proident ea voluptate sint.</p>

                <h4>How will I receive the tickets?</h4>
                <p>Anim ut cillum quis proident ea voluptate sint.</p>
            </div>
        </div>
        )
    }
}