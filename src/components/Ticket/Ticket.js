import React, {Component} from 'react';

import './Ticket.css'

class Ticket extends Component {
    render() {
        return(
            <div className='Ticket'>
                <div className='Ticket__image'></div>
                <div className='Ticket__data'>
                    <div className='Ticket__data__container main_text flex fd_col'>
                        <h2 className='f1'>Lakers vs Houston Rockets</h2>
                        <div className='Ticket__data__meta_text flex f1 fd_row'>
                            <p className='f2'>Tuesday Noverber 12, 2019</p>
                            <p className='f2'>7:30PM Tip-Off</p>
                        </div>
                    </div>
                    <div className='Ticket__data__container pricing flex fd_row'>
                        <div className='pricing_container flex fd_row f1'>
                            <p>$150</p>
                            <div className='fd_col'>
                                <p>No Fees</p>
                                <p>No Taxes</p>
                            </div>
                        </div>
                        <div className='pricing_container flex fd_row f1'>
                            <p>$250</p>
                            <p>Stubhub</p>
                        </div>
                    </div>
                    <div className='Ticket__data__container quantity flex fd_row'>
                        <div className='section3 f4'>
                            <p>Quantity</p>
                            <select>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className='Ticket__data__container add_to_cart'>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket;