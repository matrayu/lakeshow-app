import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TicketContext from "../../contexts/TicketContext";
import './TicketListItem.css'

let moment = require("moment");


export default class TicketListItem extends Component {
    static contextType = TicketContext;

    render() {
        const { ticket } = this.props
        const date = moment(ticket.local_date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");
        return (
            <Link to={`/ticket/${ticket.id}`} className='TicketListItem'>
                <div className='game__container'>
                    <img src={ticket.away_logo} alt={ticket.away_team}></img>
                    <div className='game__info'>
                        <p className='game__title'>{`${ticket.away_team} vs ${ticket.home_team}`}</p>
                        <p id='ticket_price'>{ticket.list_price_ea} <span id='each'>ea</span></p>
                        <div className='game__meta'>
                            <p id='game_date'>{date}</p>
                            <p>{ticket.seat.length} Tickets</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
