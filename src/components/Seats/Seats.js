import React, {Component} from 'react';

import './Seats.css'

class Seats extends Component {
    render() {
        return(
            <div className='Seats'>

                <div className="responsive">
                    <div className="gallery">
                        <a target='_blank' rel="noopener noreferrer" href='https://photos.smugmug.com/Lakeshow-Tickets/i-kn6tRNt/0/d0fc4c63/XL/2018-1004_DSC7120-XL.jpg'>
                            <div className='seat1'></div>
                        </a>
                        <div className="desc">Plush, moveable, fold out seats. No one sitting behind you.</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target='_blank' rel="noopener noreferrer" href='https://photos.smugmug.com/Lakeshow-Tickets/i-GQ63NzK/0/bb20676f/X3/2018-1004_192007-X3.jpg'>
                            <div className='seat2'></div>
                        </a>
                        <div className="desc">Nothing but the game in front of you with all the leg room you want!</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target='_blank' rel="noopener noreferrer" href='https://photos.smugmug.com/Lakeshow-Tickets/i-rQPgrgs/0/34c0fd93/X2/2018-1004_193129-Pano-X2.jpg'>
                            <div className='seat3'></div>
                        </a>
                        <div className="desc">Stunning view of the court.</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target='_blank' rel="noopener noreferrer" href='https://photos.smugmug.com/Lakeshow-Tickets/i-t2jTzp8/0/045abd95/X3/2018-1004_DSC7294-X3.jpg'>
                            <div className='seat4'></div>
                        </a>
                        <div className="desc">Incredible sightline of the court and Lakers Bench.</div>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>
        )
    }
}

export default Seats;