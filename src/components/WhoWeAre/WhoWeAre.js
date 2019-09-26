import React, { Component } from 'react';
import './WhoWeAre.css'

class WhoWeAre extends Component {
    render() {
        return (
            <section className='WhoWeAre'>
                <div className='left__container images'>
                    <div id='who_we_are_image_top' />
                    <div id='who_we_are_image_bottom' />
                </div>
                <div className='right__container'>
                    <div className='WhoWeAre title__bg'>
                        <div className='WhoWeAre text_grp'>
                            <h1 className='splash_title'>Who We Are</h1>
                            <p id='who_we_are_p'>
                            First and foremost, we are Lakers fans! 
                            <br/><br/> 
                            We have been season ticket holders for years and while we love going to 
                            every game we can, it’s just not possible. So we’ve decided 
                            to create a portal and bring our season seats directly to you.
                            <br/><br/>
                            Without the middleman marketplace, we can offer our great seats at a deep discount. 
                            It also gives us an opportunity to build relationships with other Lakers fans! 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhoWeAre;