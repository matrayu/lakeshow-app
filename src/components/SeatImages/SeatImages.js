import React, {Component} from 'react';
import {Image} from 'cloudinary-react';

export default class SeatImages extends Component {    
    render() {
        const { image } = this.props
        return (
            <React.Fragment>
                <Image
                    cloudName="matrayu" 
                    publicId={image}
                    width="auto:10" 
                    drp="auto"
                    responsive 
                    crop="scale"
                />
            </React.Fragment>
        )
    }
}