import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TicketContext from "../../contexts/TicketContext";
import './UpcomingGame.css'

let moment = require("moment");


export default class UpcomingGame extends Component {
    static contextType = TicketContext;

    render() {
        const { ticket } = this.props
        const date = moment(ticket.event.dates.localDate, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");
        const tipOff = moment(ticket.event.dates.localTime, "HH:mm:ss").format("hh:mm A")
        return (
            <Link to={`/ticket/${ticket.id}`} className='UpcomingGames grp'>
                <div className='image_logo_container'>
                    <div className='UpcomingGames image' id='upcoming_game_image' style={{ backgroundImage: `url(${ticket.images.awayLogo})`}}></div>
                </div>
                <div className='UpcomingGames text__grp'>
                    <h2 id='upcoming_game'>{`${ticket.event.teams.away} vs ${ticket.event.teams.home}`}</h2>
                    <p>{date}</p>
                    <p>{ticket.venue}</p>
                    <p>{`${tipOff} Tip-Off`}</p>
                </div>
            </Link>
        )
    }
}