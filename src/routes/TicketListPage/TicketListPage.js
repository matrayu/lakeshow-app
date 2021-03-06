import React, { Component } from 'react'
import TicketListItem from '../../components/TicketListItem/TicketListItem'
import TicketListContext from '../../contexts/TicketListContext'
//import TicketsApiService from '../../services/tickets-api-service'
import ListingsApiService from '../../services/listings-api-service'
import HelpersService from '../../services/helpers-service'
import './TicketListPage.css'

export default class TicketListPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          loaded: false
        }
    }

    static contextType = TicketListContext

    componentDidMount() {
        this.context.clearError()
        ListingsApiService.getListings()
            .then(listings => {
                listings.sort((a, b) => (a.event.dates.localDate > b.event.dates.localDate) ? 1 : -1)
                this.context.setTicketList(listings)
            })
            .then(res => {
                this.setState({ loaded: true })
            })
            .catch(this.context.setError)
    }

    renderTickets() {
        let { filteredList, ticketList } = this.context
        if (filteredList.length === 0) {
            return (
                ticketList.map(ticket =>
                    <TicketListItem key={ticket.id} ticket={ticket} />
                )
            )
        } else {
            return filteredList.map(ticket =>
                <TicketListItem key={ticket.id} ticket={ticket} />
            )
        }
    }

    handleChange = (e) => {
        let currentList = []
        let newList = []; // Variable to hold the filtered list before putting into state
        if (e.target.value !== "") { // If the search bar isn't empty
            currentList = this.context.ticketList; // Assign the original list to currentList
            newList = currentList.filter(item => { // Use .filter() to determine which items should be displayedbased on the search terms
                const lc = item.event.teams.away.toLowerCase(); // change current item to lowercase
                const filter = e.target.value.toLowerCase(); // change search term to lowercase
                return lc.includes(filter) // check to see if the current list item includes the search term If it does, it will be added to newList. 
            });
        } else { // If the search bar is empty, set newList to original task list
            newList = this.context.ticketList;
        }
        this.context.setFilteredList(newList) // Set the filtered state based on what our rules added to newList
    }

    sortBy = (e) => {
        let sortby = e.target.value
        const allTickets = this.context.ticketList
        if (sortby === 'priceHigh') {
            allTickets.sort((a, b) => (HelpersService.convertMoneyToNumber(a.prices.listPriceEa) < HelpersService.convertMoneyToNumber(b.prices.listPriceEa)) ? 1 : -1)
        } else {
            if (sortby === 'priceLow') {
                allTickets.sort((a, b) => (HelpersService.convertMoneyToNumber(a.prices.listPriceEa) > HelpersService.convertMoneyToNumber(b.prices.listPriceEa)) ? 1 : -1) 
            } else {
                if (sortby === 'team') {
                    allTickets.sort((a, b) => (a.event.teams.away > b.event.teams.away) ? 1 : -1)
                } else {
                    allTickets.sort((a, b) => (a.event.dates.localDate > b.event.dates.localDate) ? 1 : -1)
                }
            }
        }
        this.context.setTicketList(allTickets)
    }

    content() {
        return (
            <div className='TicketListPage'>
                <div className='TicketListPage container'>
                    <div className='TicketListPage search_functions'>
                        <div className='search_by'>
                            <input type="text" className='input' placeholder="Search By Team..." onChange={(e) => this.handleChange(e)}></input>
                        </div>
                        <div className='sort_by'>
                            <span id='sortby'>Sort By:</span>
                            <select onChange={(e) => this.sortBy(e)}>
                                <option value='date' id='date'>Date</option>
                                <option value='priceHigh' id='priceHigh'>Price High to Low</option>
                                <option value='priceLow' id='priceLow'>Price Low to High</option>
                                <option value='team' id='team'>Team</option>
                            </select>
                        </div>
                    </div>
                    <section className='TicketListPage results'>
                        {this.renderTickets()}
                    </section>
                </div>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                {this.state.loaded ? this.content() : null}
            </div>
        )
    }
}