import React, { Component } from 'react';
import {Image} from 'cloudinary-react';
import './HomeFooter.css'

class HomeFooter extends Component {
    render() {
        return (
            <section className='HomeFooter'>
                <div className='HomeFooter bg_img'>
                    <Image
                        cloudName="matrayu"
                        publicId="v1572151479/Lakers/2018-1004_221255_lakerswin_yamtq2.png"
                        drp="auto"
                        height="600"
                        responsive 
                        crop="fill"
                        gravity="auto"
                        title="Lakers Court Staples Center"
                        alt="Lakers Court Staples Center"
                        className="HomeFooter-background"
                    />
                </div>
                <div className='get_tickets container'>
                    <h1>Get The Game You Want</h1>
                    <button><a href='/tickets'>Find Tickets</a></button>
                    <button><a href='/login'>Log In</a></button>
                </div>
            </section>
        )
    }
}

export default HomeFooter;