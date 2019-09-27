import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TicketContext from "../../contexts/TicketContext";
import './UpcomingGame.css'

let moment = require("moment");


export default class UpcomingGame extends Component {
    static contextType = TicketContext;

    render() {
        const { ticket } = this.props
        const date = moment(ticket.local_date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");
        return (
            <Link to={`/ticket/${ticket.id}`} className='UpcomingGames grp'>
                <div className='UpcomingGames image' id='upcoming_game_image' style={{ backgroundImage: `url(${ticket.away_logo})`}}></div>
                <div className='UpcomingGames text__grp'>
                    <h2 id='upcoming_game'>{`${ticket.away_team} vs ${ticket.home_team}`}</h2>
                    <p>{date}</p>
                    <p>Staples Center</p>
                    <p>7:30p Tip-Off</p>
                </div>
            </Link>
        )
    }
}