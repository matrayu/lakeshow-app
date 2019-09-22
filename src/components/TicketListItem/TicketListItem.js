import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './TicketListItem.css'

let moment = require("moment");

class TicketListItem extends Component {
    render() {
        const { ticket } = this.props
        const date = moment(ticket.local_date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");
        return (
            <Link to={`/ticket/${ticket.id}`} className='TicketListItem'>
                <div className='game__container'>
                    <img src={ticket.away_logo} alt={ticket.away_team}></img>
                    <div className='game__info'>
                        <p className='game__title'>{`${ticket.away_team} vs ${ticket.home_team}`}</p>
                        <div className='game__meta'>
                            <p>{date}</p>
                            <p>{ticket.seat.length} Tickets</p>
                            <p>${ticket.list_price_ea}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default TicketListItem;