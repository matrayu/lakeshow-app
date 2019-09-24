import React, { Component } from 'react'
//import tickets from './seedData'

const TicketListContext = React.createContext({
  ticketList: [],
  sortedValue: null,
  error: null,
  isLoggedIn: false,
  purchasedTickets: [],
  cart: [],
  setFilteredList: () => {},
  setSortedList: () => {},
  setError: () => {},
  clearError: () => {},
  setTicketList: () => {},
  setLogin: () => {},
  setPurchasedTickets: () => {},
  addToCart: () => {},
})

export default TicketListContext

export class TicketListProvider extends Component {
  state = {
    ticketList: [],
    filteredList: [],
    sortedList: [],
    sortedValue: "date",
    error: null,
    isLoggedIn: false,
    purchasedTickets: [],
    cart: []
  };

  setLogin = () => {
    let log = !this.state.isLoggedIn
    this.setState({ isLoggedIn: log })
  }

  setTicketList = tickets => {
    this.setState({ ticketList: tickets })
  }

  setFilteredList = filteredTickets => {
    this.setState({ filteredList: filteredTickets })
  }

  setSortedList = sortedLTickets => {
    this.setState({ sortedList: sortedLTickets })
  }

  setSortedValue = sortedValue => {
    this.setState({ sortedValue })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setPurchasedTickets = purchasedTickets => {
    this.setState({ purchasedTickets })
  }

  addToCart = (ticket) => {
    let cart = this.state.cart
    cart.push(ticket)
    console.log(cart)
    this.setState(cart)
  }

  render() {
    const value = {
      ticketList: this.state.ticketList,
      filteredList: this.state.filteredList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTicketList: this.setTicketList,
      setFilteredList: this.setFilteredList,
      setSortedList: this.setSortedList,
      setLogin: this.setLogin,
      purchasedTickets: this.state.purchasedTickets,
      setPurchasedTickets: this.setPurchasedTickets,
      cart: this.state.cart,
      addToCart: this.state.addToCart,
    }

    return (
      <TicketListContext.Provider value={value}>
        {this.props.children}
      </TicketListContext.Provider>
    )
  }
}