import React, { Component } from 'react';
import Seats from '../../components/Seats/Seats2';

import './SeatsPage.css'

export default class SeatsPage extends Component {
    render() {
        return (
            <section className='SeatsPage'>
                <div className='SeatsPage main_text'>
                    <h1 className='page_headings'>SEAT & SECTION</h1>
                    <p className='subheading'>All photos are taken of from Section 114, are of the seats, and of the view!</p>
                    <br/>
                </div>
                <Seats />
            </section>
        )
    }
}