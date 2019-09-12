import React, { Component } from 'react'
import tickets from './seedData'

const TicketListContext = React.createContext({
  ticketList: [],
  error: null,
  setFilteredList: () => {},
  setError: () => {},
  clearError: () => {},
  setTicketList: () => {},
})

export default TicketListContext

export class TicketListProvider extends Component {
  state = {
    ticketList: tickets,
    filteredList: tickets,
    error: null,
  };

  setTicketList = ticketList => {
    this.setState({ ticketList })
  }

  setFilteredList = filteredList => {
    this.setState({ filteredList })
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
    }
    return (
      <TicketListContext.Provider value={value}>
        {this.props.children}
      </TicketListContext.Provider>
    )
  }
}