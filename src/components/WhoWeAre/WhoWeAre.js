import React, { Component } from 'react';
import './WhoWeAre.css'

class WhoWeAre extends Component {
    render() {
        return (
            <section className='WhoWeAre'>
                <div className='WhoWeAre left__container'>
                    <div className='whoWeAreText_container'>
                        <p id='who_we_are_p'>
                            <span className="large-text"><b>First and foremost, we are Lakers fans!</b> </span>
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
                <div className='WhoWeAre right__container'>
                    <div className='WhoWeAre title__bg'>
                        <h1 className='splash_title'>Who We Are</h1>
                    </div>
                    <div id='WhoWeAre_bk_img'></div>
                </div>
            </section>
            /* <section className='WhoWeAre'>
                <div className='left__container images'>
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
                    <div id='who_we_are_image_top' />
                </div>
                <div className='right__container'>
                    <div id='whoWeAre_bk_image'></div>
                    <div className='WhoWeAre title__bg'>
                        <div className='WhoWeAre text_grp'>
                            <h1 className='splash_title'>Who We Are</h1>
                        </div>
                    </div>
                </div>
            </section> */
        )
    }
}

export default WhoWeAre;
