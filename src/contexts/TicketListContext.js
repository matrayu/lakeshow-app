import React, { Component } from 'react'
import tickets from './seedData'

const TicketListContext = React.createContext({
  ticketList: [],
  sortedValue: null,
  error: null,
  setFilteredList: () => {},
  setSortedList: () => {},
  setError: () => {},
  clearError: () => {},
  setTicketList: () => {},
})

export default TicketListContext

export class TicketListProvider extends Component {
  state = {
    ticketList: tickets,
    filteredList: tickets,
    sortedList: tickets,
    sortedValue: "date",
    error: null,
  };

  setTicketList = ticketList => {
    this.setState({ ticketList })
  }

  setFilteredList = filteredList => {
    this.setState({ filteredList })
  }

  setSortedList = sortedList => {
    this.setState({ sortedList })
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
    }
    return (
      <TicketListContext.Provider value={value}>
        {this.props.children}
      </TicketListContext.Provider>
    )
  }
}