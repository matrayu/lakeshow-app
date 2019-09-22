import React, { Component } from 'react'
//import tickets from './seedData'

const TicketListContext = React.createContext({
  ticketList: [],
  sortedValue: null,
  error: null,
  isLoggedIn: false,
  setFilteredList: () => {},
  setSortedList: () => {},
  setError: () => {},
  clearError: () => {},
  setTicketList: () => {},
  setLogin: () => {}
})

export default TicketListContext

export class TicketListProvider extends Component {
  state = {
    ticketList: [],
    filteredList: [],
    sortedList: [],
    sortedValue: "date",
    error: null,
    isLoggedIn: false
  };

  setLogin = () => {
    console.log('LOGIN')
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
      setLogin: this.setLogin
    }

    return (
      <TicketListContext.Provider value={value}>
        {this.props.children}
      </TicketListContext.Provider>
    )
  }
}