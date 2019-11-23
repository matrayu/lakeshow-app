import React, {Component} from 'react';
import {Image, Transformation} from 'cloudinary-react';

export default class SeatImages extends Component {    
    render() {
        const { image, urlSuffix } = this.props
        return (
            <React.Fragment>
                <Image
                    cloudName="matrayu" 
                    publicId={image}
                    width="auto"
                    //height="400"
                    drp="auto"
                    responsive 
                    crop="scale"
                    urlSuffix={urlSuffix}
                >
                    <Transformation fetchFormat="auto" />
                    <Transformation quality="auto" />
                </Image>
                
            </React.Fragment>
        )
    }
}