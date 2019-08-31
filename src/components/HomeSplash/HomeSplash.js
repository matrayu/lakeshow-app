import React, { Component } from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre'
//import { Link } from 'react-router-dom';

import './HomeSplash.css'

class HomeSplash extends Component {
    render() {
        return (
            <main className='HomeSplash' role='main'>
                <section className='home_main'>
                    <div className='home_main bg_image' />
                    <div className='home_main container'>
                        <div className='home_main bg_text_block'>
                            <div className='home_main text__grouping'>
                                <h1 className='site__name'>Lakeshow Tickets</h1>
                                <p>Season Tickets Direct To You</p>
                            </div>
                        </div>
                        <div className='home_main btn'>
                        <button>Find Tickets</button>
                        </div>
                    </div>
                </section>
                <WhoWeAre />
                {/* <section className='who_we_are__page'>
                    <div className='left__container'>
                        <div className='image__top'></div>
                        <div className='image__bottom'></div>
                    </div>
                    <div className='right__container'>
                        <div className='title__background'>
                            <h1>Who We Are</h1>
                        </div>
                        <div className='paragraph_container'>
                            <p>Eu mollit amet pariatur ad. Adipisicing ut nisi nulla consectetur ipsum. Do pariatur duis eiusmod eu irure reprehenderit mollit aliquip enim. Consectetur officia velit ex duis sit excepteur excepteur.</p>
                        </div>
                    </div>
                </section> */}

                <section className='offers__page'>
                    <div className='left__container'>
                        <div className='title__background'>
                            <h1>What We Offer</h1>
                        </div>
                    </div>
                    <div className='right__container'>
                        <div className='offers__container'>
                            <div className='offering'>
                                <div className='offering__image'></div>
                                <div className='offering__text__container'>
                                    <h2>Ah-Mazing Seats</h2>
                                    <p>Deserunt sunt exercitation sunt do in enim veniam nulla ipsum esse ea deserunt dolore. Et sunt eu eu ipsum commodo laboris laboris consequat est occaecat mollit sit ut in. Aliqua reprehenderit ad incididunt aliqua. Mollit minim Lorem nisi ut ex veniam ut laborum duis officia non. Voluptate pariatur cupidatat aliqua irure tempor amet consequat proident dolore dolore ad in magna anim. Est anim laborum reprehenderit proident officia tempor esse duis laborum incididunt.</p>
                                </div>
                            </div>
                            <div className='offering'>
                                <div className='offering__image'></div>
                                <div className='offering__text__container'>
                                    <h2>Direct No-Hassle Pricing</h2>
                                    <p>Deserunt sunt exercitation sunt do in enim veniam nulla ipsum esse ea deserunt dolore. Et sunt eu eu ipsum commodo laboris laboris consequat est occaecat mollit sit ut in. Aliqua reprehenderit ad incididunt aliqua. Mollit minim Lorem nisi ut ex veniam ut laborum duis officia non. Voluptate pariatur cupidatat aliqua irure tempor amet consequat proident dolore dolore ad in magna anim. Est anim laborum reprehenderit proident officia tempor esse duis laborum incididunt.</p>
                                </div>
                            </div>
                            <div className='offering'>
                                <div className='offering__image'></div>
                                <div className='offering__text__container'>
                                    <h2>Additional Discounts</h2>
                                    <p>Deserunt sunt exercitation sunt do in enim veniam nulla ipsum esse ea deserunt dolore. Et sunt eu eu ipsum commodo laboris laboris consequat est occaecat mollit sit ut in. Aliqua reprehenderit ad incididunt aliqua. Mollit minim Lorem nisi ut ex veniam ut laborum duis officia non. Voluptate pariatur cupidatat aliqua irure tempor amet consequat proident dolore dolore ad in magna anim. Est anim laborum reprehenderit proident officia tempor esse duis laborum incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section className='upcoming_games'>
                    <div className='left__container'>
                        <div className='games__container'>
                            <div className='game__grouping'>
                                <div className='game image'></div>
                                <div className='game text__group'>
                                    <h2>Lakers vs Hawks</h2>
                                    <p>12/8/2019</p>
                                    <p>Staples Center</p>
                                    <p>7:30p Tip-Off</p>
                                </div>
                            </div>
                            <div className='game__grouping'>
                                <div className='game image'></div>
                                <div className='game text__group'>
                                    <h2>Lakers vs Utah</h2>
                                    <p>12/15/2019</p>
                                    <p>Staples Center</p>
                                    <p>7:30p Tip-Off</p>
                                </div>
                            </div>
                            <div className='game__grouping'>
                                <div className='game image'></div>
                                <div className='game text__group'>
                                    <h2>Lakers vs Warriors</h2>
                                    <p>12/21/2019</p>
                                    <p>Staples Center</p>
                                    <p>7:30p Tip-Off</p>
                                </div>
                            </div>
                        </div>
                        <div className='image__bottom'></div>
                    </div>
                    <div className='right__container'>
                        <div className='title__background'>
                            <h1>Upcoming Games</h1>
                        </div>
                    </div>
                </section>

                <section className='home_bottom'>
                    <div className='get_tickets_container'>
                        <h1>Get The Game You Want</h1>
                        <div className='button__group'>
                            <button>Find Tickets</button>
                            <button>Sign In</button>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default HomeSplash