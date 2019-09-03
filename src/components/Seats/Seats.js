import React, {Component} from 'react';

import './Seats.css'

class Seats extends Component {
    render() {
        return(
            <div className='Seats'>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" rel="noopener noreferrer" href='https://via.placeholder.com/600'>
                            <img src='https://via.placeholder.com/600' alt="Seat 1" width="600" height="400"></img>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" rel="noopener noreferrer" href="https://via.placeholder.com/600">
                            <img src="https://via.placeholder.com/600" alt="Seat 2" width="600" height="400"></img>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" rel="noopener noreferrer" href="https://via.placeholder.com/600">
                            <img src="https://via.placeholder.com/600" alt="Seat 3" width="600" height="400"></img>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" rel="noopener noreferrer" href="https://via.placeholder.com/600">
                            <img src="https://via.placeholder.com/600" alt="Seat 4" width="600" height="400"></img>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>
        )
    }
}

export default Seats;