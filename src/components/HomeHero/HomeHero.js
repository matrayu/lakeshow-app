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
                            <img className='home_logo'src="https://res.cloudinary.com/matrayu/image/upload/v1572152066/Lakers/LakeshowLogov2_trans_crop_ml7esb.png" alt="View of the seats before tipoff" loading="lazy"></img>
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