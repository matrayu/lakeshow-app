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
                    //gravity="auto"
                    urlSuffix={urlSuffix}
                >
                    {/* <Transformation overlay={{fontFamily: "Arial", fontSize: 45, text: `${image}`}} gravity="south" y="10" background="gray" radius="10" opacity="75" color="white" /> */}
                    <Transformation fetchFormat="auto" />
                    <Transformation quality="auto" />
                </Image>
                
            </React.Fragment>
        )
    }
}