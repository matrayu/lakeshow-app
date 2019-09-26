import React, {Component} from 'react';
import TicketListContext from "../../contexts/TicketListContext";
import './PurchasedItems.css'

let moment = require("moment");

export default class PurchasedItem extends Component {
    static contextType = TicketListContext;

    render() {
        let total = null
        const { ticket } = this.props
        const date = moment(ticket.local_date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");
        let currency = ticket.list_price_ea
        let number = Number(currency.replace(/[^0-9.-]+/g,""));
        total += number * ticket.quantity;
        return (
            <div className='line_items flex fd_row space-between'>
                <div className='line_item_info'>
                    <h3>{`${ticket.home_team} vs ${ticket.away_team}`}</h3>
                    <p>{date}</p>
                    <p>{ticket.quantity} {(ticket.quantity <= 1) ? 'ticket' : 'tickets'}</p>
                </div>
                <p className='payment'>${total}.00</p>
            </div>
        )
    }
}