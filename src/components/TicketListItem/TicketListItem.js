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
        console.log(ticket)
        return (
            <Link to={`/ticket/${ticket.id}`} className='TicketListItem'>
                <div className='game__container'>
                    <div id='game_comtainer_logo'> 
                        <div className='UpcomingGames image' id='ticketlist_game_image' style={{ backgroundImage: `url(${ticket.away_logo})`}}></div>
                    </div>
                    <div className='game__info'>
                        <p className='game__title'>{`${ticket.away_team}`} <br/> at {`${ticket.home_team}`}</p>
                        <p id='ticket_price'>{ticket.list_price_ea} <span id='each'>ea</span></p>
                        <br/>
                        {!ticket.game_note
                            ? ''
                            : <div className='game_note'>** {ticket.game_note} **</div>
                        }
                        <br/>
                        <p id='game_date'>{date}</p>
                        <div className='game__meta'>
                            <p>{ticket.seat.length} Tickets</p>
                            <div className='game__seat_date'>
                                <div>
                                    <p>Section {ticket.section}</p>
                                    <p>Row {ticket.seat_row}</p>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>
                </div>
            </Link>
        )
    }
}
