import React, { Component } from 'react';
import {Image} from 'cloudinary-react';
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
                        </p>
                    </div>
                </div>
                <div className='WhoWeAre right__container'>
                    <div className='WhoWeAre title__bg'>
                        <h1 className='splash_title'>Who We Are</h1>
                    </div>
                    <Image
                        cloudName="matrayu"
                        publicId="v1572151115/Lakers/IMG_20170719_164743_zlh006.jpg"
                        drp="auto"
                        width="2000"
                        height="600"
                        responsive
                        title="Lebron shoots a three pointer"
                        alt="Lebron shoots a three pointer"
                        className="WhoWeAre-image"
                    />
                </div>
            </section>
        )
    }
}

export default WhoWeAre;
