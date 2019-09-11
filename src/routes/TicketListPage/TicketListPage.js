import React, { Component } from 'react'
import TicketListItem from '../../components/TicketListItem/TicketListItem'
import TicketContext from '../../contexts/TicketContext'

import './TicketListPage.css'

export default class TicketListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    static contextType = TicketContext



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
                            <div>
                                <input type="text" className='input' placeholder="Search..."></input>
                            </div>
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