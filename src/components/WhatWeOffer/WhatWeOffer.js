import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import {Image} from 'cloudinary-react';
import { faTicketAlt, faChair, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './WhatWeOffer.css'


class WhatWeOffer extends Component {
    render() {
        return (
            <section className='WhatWeOffer'>
                    <div className='WhatWeOffer left__container'>
                        <div className='WhatWeOffer title__bg'>
                            <h1 className='splash_title'>What We Offer</h1>
                        </div>
                        <Image
                            cloudName="matrayu"
                            publicId="v1572136829/Lakers/LakeshowTix2020-2_irntio.png"
                            drp="auto"
                            width="2000"
                            height="600"
                            responsive
                            title="Lebron shoots a three pointer"
                            alt="Lebron shoots a three pointer"
                            className="offering-image"
                        />
                    </div>
                    <div className='WhatWeOffer right__container'>
                        <div className='offers__container'>
                            <Link to='/seats' className='offer__grp'>
                                <div className='offer image'>
                                    <FontAwesomeIcon icon={faTicketAlt} size='4x' color='white'/>
                                </div>
                                <div className='offer text_grp'>
                                    <h2>Ah-Mazing Location</h2>
                                    <p>Seats located in the lower bowl 100’s and across from the Lakers bench.</p>
                                    
                                </div>
                            </Link>
                            <Link to='/seats' className='offer__grp'>
                                <div className='offer image'>
                                    <FontAwesomeIcon icon={faChair} size='4x' color='white'/>
                                </div>
                                <div className='offer text_grp'>
                                    <h2>Ah-Mazing Seats</h2>
                                    <p>Plush, moveable, fold-out chairs with no one in front or behind you!</p>
                                </div>
                            </Link>
                            <Link to='/tickets'  className='offer__grp'>
                                <div className='offer image'>
                                    <FontAwesomeIcon icon={faHandshake} size='4x' color='white'/>
                                </div>
                                <div className='offer text_grp'>
                                    <h2>Ah-Mazing Prices</h2>
                                    <p>The prices you see on our site are the prices you pay. No fees, no taxes, no b.s.</p>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
            </section>
        )
    }
}

export default WhatWeOffer;