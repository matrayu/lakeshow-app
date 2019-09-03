import React, {Component} from 'react';

import './Ticket.css'

class Ticket extends Component {
    render() {
        return(
            <div className='Ticket'>
                <div className='Ticket image'></div>
                <div className='Ticket data'>
                    <div className='Ticket data__main_text'>
                        <p>Lakers vs Houston Rockets</p>
                        <div className='Ticket data__meta_text'>
                            <p>Tuesday Noverber 12, 2019</p>
                            <p>7:30PM Tip-Off</p>
                        </div>
                    </div>
                    <div className='Ticket data__pricing'>
                        <div className='Ticket data__our_price'>
                            <p>$150</p>
                            <p>No Fees</p>
                            <p>No Taxes</p>
                        </div>
                        <div className='Ticket data__comp_price'>
                            <p>$250</p>
                            <p>Stubhub</p>
                        </div>
                    </div>
                    <div className='Ticket data__quantity'>
                        <p>Quantity</p>
                        <select>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </div>
                    <div className='Ticket data__add_to_cart'>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket;