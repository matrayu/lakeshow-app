import React, { Component } from 'react';
import Seats from '../../components/Seats/Seats';

import './SeatsPage.css'

export default class SeatsPage extends Component {
    render() {
        return (
            <section className='SeatsPage'>
                <div className='SeatsPage main_text'>
                    <h2>Seats Gallery</h2>
                    <p>All pictures shown are of the actual section, seats, and view from the seats.</p>
                </div>
                <Seats />
            </section>
        )
    }
}