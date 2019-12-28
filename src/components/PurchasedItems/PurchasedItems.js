import React, {Component} from 'react';
import TicketListContext from "../../contexts/TicketListContext";
import './PurchasedItems.css'

let moment = require("moment");

export default class PurchasedItem extends Component {
    static contextType = TicketListContext;

    render() {
        let total = null
        const { ticket } = this.props
        const date = moment(ticket.event.dates.localDate, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");
        let currency = ticket.prices.listPriceEa
        let number = Number(currency.replace(/[^0-9.-]+/g,""));
        total += number * ticket.qty;
        return (
            <div className='line_items flex fd_row space-between'>
                <div className='line_item_info'>
                    <h3>{`${ticket.event.teams.home} vs ${ticket.event.teams.away}`}</h3>
                    <p>{date}</p>
                    <p>{ticket.qty} {(ticket.qty <= 1) ? 'ticket' : 'tickets'}</p>
                </div>
                <p className='payment'>${total}.00</p>
            </div>
        )
    }
}