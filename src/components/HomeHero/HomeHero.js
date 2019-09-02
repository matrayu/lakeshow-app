import React, { Component } from 'react';

import './HomeHero.css'

class HomeHero extends Component {
    render() {
        return (
            <section className='HomeHero'>
                <div className='HomeHero bg_image' />
                <div className='HomeHero container'>
                    <div className='HomeHero bg_text_block'>
                        <div className='HomeHero text__grouping'>
                            <h1>Lakeshow Tickets</h1>
                            <p>Season Tickets Direct To You</p>
                        </div>
                    </div>
                    <div className='HomeHero btn'>
                        <button><a href='/tickets'>Find Tickets</a></button>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeHero;