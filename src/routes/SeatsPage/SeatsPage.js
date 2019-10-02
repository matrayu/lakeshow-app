import React, { Component } from 'react';
import Seats from '../../components/Seats/Seats';

import './SeatsPage.css'

export default class SeatsPage extends Component {
    render() {
        return (
            <section className='SeatsPage'>
                <div className='SeatsPage main_text'>
                    <h1 className='page_headings'>Seat Photos</h1>
                    <p id='subheading'>These are all pictures taken of the section, of the seats, and of the view! You can get some great selfies from here.</p>
                </div>
                <Seats />
            </section>
        )
    }
}