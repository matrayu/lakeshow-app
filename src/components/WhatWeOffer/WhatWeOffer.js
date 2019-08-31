import React, { Component } from 'react';
import './WhatWeOffer.css'

class WhatWeOffer extends Component {
    render() {
        return (
            <section className='WhatWeOffer'>
                    <div className='WhatWeOffer left__container'>
                        <div id='WhatWeOffer_bk_img'></div>
                        <div className='WhatWeOffer title__bg'>
                            <div className='WhatWeOffer text_grp'>
                                <h1>What We Offer</h1>
                            </div>
                        </div>
                    </div>
                    <div className='right__container'>
                        <div className='offers__container'>
                            <div className='offer__grp'>
                                <div className='offer image'></div>
                                <div className='offer text_grp'>
                                    <h2>Ah-Mazing Seats</h2>
                                    <p>Deserunt sunt exercitation sunt .</p>
                                </div>
                            </div>
                            <div className='offer__grp'>
                                <div className='offer image'></div>
                                <div className='offer text_grp'>
                                    <h2>Direct No-Hassle Pricing</h2>
                                    <p>Deserunt sunt exercitation sunt do in enim veniam .</p>
                                </div>
                            </div>
                            <div className='offer__grp'>
                                <div className='offer image'></div>
                                <div className='offer text_grp'>
                                    <h2>Additional Discounts</h2>
                                    <p>Deserunt sunt exercitation sunt do in enim veniam .</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </section>
        )
    }
}

export default WhatWeOffer;