import React, { Component } from 'react';
import './UpcomingGames.css'

class UpcomingGames extends Component {
    render() {
        return (
            <section className='UpcomingGames'>
                <div className='UpcomingGames left__container'>
                    <div className='UpcomingGames container'>
                        <div className='UpcomingGames grp'>
                            <div className='UpcomingGames image'></div>
                            <div className='UpcomingGames text__grp'>
                                <h2>Lakers vs Hawks</h2>
                                <p>12/8/2019</p>
                                <p>Staples Center</p>
                                <p>7:30p Tip-Off</p>
                            </div>
                        </div>
                        <div className='UpcomingGames grp'>
                            <div className='UpcomingGames image'></div>
                            <div className='UpcomingGames text__grp'>
                                <h2>Lakers vs Utah</h2>
                                <p>12/15/2019</p>
                                <p>Staples Center</p>
                                <p>7:30p Tip-Off</p>
                            </div>
                        </div>
                        <div className='UpcomingGames grp'>
                            <div className='UpcomingGames image'></div>
                            <div className='UpcomingGames text__grp'>
                                <h2>Lakers vs Warriors</h2>
                                <p>12/21/2019</p>
                                <p>Staples Center</p>
                                <p>7:30p Tip-Off</p>
                            </div>
                        </div>
                    </div>
                    <div className='image__bottom'></div>
                </div>
                <div className='UpcomingGames right__container'>
                    <div id='UpcomingGames_bk_img'></div>
                    <div className='UpcomingGames title__bg'>
                        <h1 className='splash_title'>Upcoming Games</h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default UpcomingGames;