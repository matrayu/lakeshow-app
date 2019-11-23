import React, {Component} from 'react';
import SeatImages from '../SeatImages/SeatImages'
import SeatImageList from './SeatImageList'
import './Seats2.css'



class Seats extends Component {
    renderImages() {
        let keyValue = 0
        let images = SeatImageList
        return (
            images.map(image => {
                keyValue++ 
                return (
                    <SeatImages 
                        key={keyValue} 
                        image={`Lakers/${image.publicId}`}
                        urlSuffix={image.urlSuffix} 
                    />
                ) 
            })
        )
    }

    render() {
        return(
            <div className='Seats'>
                <div className="flex-img">
                    <div className="seat-images">
                        {this.renderImages()}
                    </div>
                    
                </div>
            </div>
        )
    }
}



export default Seats;