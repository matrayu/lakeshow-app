import React, { Component } from 'react';
import {Image} from 'cloudinary-react';
import './HomeHero.css'

class HomeHero extends Component {
    render() {
        return (
            <section className='HomeHero'>
                <div className='HomeHero bg_image'>
                    <Image
                        cloudName="matrayu"
                        publicId="v1573347557/Lakers/yh1ejtfyunjv2gqkokpf.png"
                        drp="auto"
                        height="600"
                        responsive 
                        crop="fill"
                        gravity="auto"
                        title="Lakers Court Staples Center"
                        alt="Lakers Court Staples Center"
                        className="HomeHero-background"
                    />
                </div>
                <div className='HomeHero container'>
                    <div className='HomeHero bg_text_block'>
                        <div className='HomeHero text__grouping'>
                            <Image
                                cloudName="matrayu"
                                publicId="v1572152066/Lakers/LakeshowLogov2_trans_crop_ml7esb.png"
                                width="auto:90" 
                                drp="auto"
                                responsive 
                                crop="scale"
                                title="Lakeshow Logo"
                                alt="Lakeshow Logo"
                            />
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