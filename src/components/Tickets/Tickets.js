import React, {Component} from 'react';


import './Tickets.css'

class Tickets extends Component {
    render() {
        return(
            <div className='Tickets'>
                <div className='game__container'>
                    <div className='game__image'></div>
                    <div className='game__info'>
                        <p className='game__title'>Lakers vs Houston Rockets</p>
                        <div className='game__meta'>
                            <p>2 Tickets</p>
                            <p>$150.00</p>
                        </div>
                    </div>
                </div>

                <div className='game__container'>
                    <div className='game__image'></div>
                    <div className='game__info'>
                        <p className='game__title'>Lakers vs Utah Jazz</p>
                        <div className='game__meta'>
                            <p>2 Tickets</p>
                            <p>$250.00</p>
                        </div>
                    </div>
                </div>

                <div className='game__container'>
                    <div className='game__image'></div>
                    <div className='game__info'>
                        <p className='game__title'>Lakers vs Memphis Grizzles</p>
                        <div className='game__meta'>
                            <p>2 Tickets</p>
                            <p>$350.00</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tickets;