import React, { Component } from 'react'
import TicketListItem from '../../components/TicketListItem/TicketListItem'
import TicketListContext from '../../contexts/TicketListContext'
import TicketsApiService from '../../services/tickets-api-service'
import './TicketListPage.css'

export default class TicketListPage extends Component {
    static contextType = TicketListContext

    componentDidMount() {
        this.context.clearError()
        TicketsApiService.getTickets()
            .then(tickets => this.context.setTicketList(tickets))
            .catch(this.context.setError)
    }

    renderTickets() {
        const filteredList = this.context.ticketList
        return filteredList.map(ticket =>
            <TicketListItem 
                key={ticket.id}
                ticket={ticket}
            />
        )
    }

    handleChange = (e) => {
        const allTickets = this.context.ticketList
        let currentList = [];
		// Variable to hold the filtered list before putting into state
        let newList = [];

            // If the search bar isn't empty
        if (e.target.value !== "") {
                // Assign the original list to currentList
        currentList = this.context.ticketList;

                // Use .filter() to determine which items should be displayed
                // based on the search terms
        newList = currentList.filter(item => {
                    // change current item to lowercase
            const lc = item.name.toLowerCase();
                    // change search term to lowercase
            const filter = e.target.value.toLowerCase();
                    // check to see if the current list item includes the search term
                    // If it does, it will be added to newList. Using lowercase eliminates
                    // issues with capitalization in search terms and search content
            return lc.includes(filter)
        });
        } else {
                // If the search bar is empty, set newList to original task list
                console.log('newlist', allTickets)
            newList = allTickets;
        }
            // Set the filtered state based on what our rules added to newList
        /* this.setState({
            filtered: newList
        }); */
        this.context.setFilteredList(newList)
    }

    sortBy = (e) => {
        let sortby = e.target.value
        const allTickets = this.context.ticketList
        if (sortby === 'priceHigh') {
            allTickets.sort((a, b) => (a.price < b.price) ? 1 : -1) 
        } else {
            if (sortby === 'priceLow') {
                allTickets.sort((a, b) => (a.price > b.price) ? 1 : -1) 
            } else {
                if (sortby === 'team') {
                    allTickets.sort((a, b) => (a.name > b.name) ? 1 : -1)
                } else {
                    allTickets.sort((a, b) => (a.dates > b.dates) ? 1 : -1)
                }
            }
        }
        this.context.setTicketList(allTickets)

    }
    
    render() {
        return (
            <React.Fragment>
                <div className='TicketListPage'>
                    <div className='TicketListPage container'>
                        <div className='TicketListPage search_functions'>
                            <div>
                                <input type="text" className='input' placeholder="Search..." onChange={(e) => this.handleChange(e)}></input>
                            </div>
                            <div className='sort_by'>
                                Sort By:
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
            </React.Fragment>
        )
    }
}