import React, { Component } from 'react'
import TicketListItem from '../../components/TicketListItem/TicketListItem'
import TicketListContext from '../../contexts/TicketListContext'
import tickets from '../../contexts/seedData'

import './TicketListPage.css'

export default class TicketListPage extends Component {
    static contextType = TicketListContext

    componentDidMount() {
        this.context.clearError()
        console.log(this.context)
    }


    renderTickets() {
        const { ticketList = [] } = this.context
        return ticketList.map(ticket =>
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