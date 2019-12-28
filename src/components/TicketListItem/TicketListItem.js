import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TicketContext from "../../contexts/TicketContext";
import './TicketListItem.css'

let moment = require("moment");


export default class TicketListItem extends Component {
    static contextType = TicketContext;

    render() {
        const listing = this.props.ticket
        const date = moment(listing.event.dates.localDate, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");
        return (
            <Link to={`/ticket/${listing.id}`} className='TicketListItem'>
                <div className='game__container'>
                    <div id='game_comtainer_logo'> 
                        <div className='UpcomingGames image' id='ticketlist_game_image' style={{ backgroundImage: `url(${listing.images.awayLogo})`}}></div>
                    </div>
                    <div className='game__info'>
                        <p className='game__title'>{`${listing.event.teams.away}`} <br/> at {`${listing.event.teams.home}`}</p>
                        <p id='ticket_price'>{listing.prices.listPriceEa} <span id='each'>ea</span></p>
                        <br/>
                        {!listing.event.note
                            ? ''
                            : <div className='game_note'>** {listing.event.note} **</div>
                        }
                        <br/>
                        <p id='game_date'>{date}</p>
                        <div className='game__meta'>
                            <p>{listing.qty} Tickets</p>
                            <div className='game__seat_date'>
                                <div>
                                    <p>Section {listing.seatInfo.section}</p>
                                    <p>Row {listing.seatInfo.row}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
