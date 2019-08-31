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
                            <h1>Who We Are</h1>
                            <p id='who_we_are_p'>Eu mollit amet pariatur ad. Adipisicing ut nisi nulla consectetur ipsum. Do pariatur duis eiusmod eu irure reprehenderit mollit aliquip enim. Consectetur officia velit ex duis sit excepteur excepteur.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhoWeAre;