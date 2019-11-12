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
                        {/* <img src="https://res.cloudinary.com/matrayu/image/upload/c_fill,g_custom,h_765,w_1300,x_2274,y_534/v1572136845/Lakers/LakeshowTix2020-44_w32nji.png"></img>
                    <img src="https://res.cloudinary.com/matrayu/image/upload/c_fill,g_auto,h_873,w_900/v1572136868/Lakers/LakeshowTix2020-40_tqv8zd.png"></img>
                    <img src="https://res.cloudinary.com/matrayu/image/upload/c_fill,g_auto,h_1011,q_auto:good,w_900/v1572136899/Lakers/LakeshowTix2020-27_fytm0m.png"></img>
                    <img src="https://res.cloudinary.com/matrayu/image/upload/c_fill,f_auto,g_auto,h_820,q_auto:good,w_900/v1572136891/Lakers/LakeshowTix2020-32_eylvml.png"></img> */}
                    </div>
                    
                </div>
            </div>
        )
    }
}



export default Seats;