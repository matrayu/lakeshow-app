import React, { Component } from 'react'
import TicketListItem from '../../components/TicketListItem/TicketListItem'
import TicketDataContext from '../../contexts/TicketDataContext'

import './TicketListPage.css'

export default class TicketListPage extends Component {
    static contextType = TicketDataContext

    renderTickets() {
        const { ticketData = [] } = this.context
        return ticketData.map(ticket =>
            <TicketListItem 
                key={ticket.id}
                ticket={ticket}
            />
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className='TicketListPage'>
                    <div className='TicketListPage container'>
                        <div className='TicketListPage search_functions'>
                            <input type="text" placeholder="Search.."></input>
                            <div className='sort_by'>
                                Sort By:
                                <select>
                                    <option value='date'>Date</option>
                                    <option value='priceHigh'>Price High to Low</option>
                                    <option value='priceLow'>Price Low to High</option>
                                    <option value='team'>Team</option>
                                </select>
                            </div>
                        </div>
                        <section className='TicketListPage results'>
                            {this.renderTickets()}
                        </section>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}