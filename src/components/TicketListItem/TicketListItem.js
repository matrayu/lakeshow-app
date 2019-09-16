import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './TicketListItem.css'

class TicketListItem extends Component {
    render() {
        const { ticket } = this.props
        return (
            <Link to={`/ticket/${ticket.id}`} className='TicketListItem'>
                <div className='game__container'>
                    <img src={ticket.images} alt={ticket.name}></img>
                    <div className='game__info'>
                        <p className='game__title'>{ticket.name}</p>
                        <div className='game__meta'>
                            <p>{ticket.dates}</p>
                            <p>2 Tickets</p>
                            <p>${ticket.price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default TicketListItem;