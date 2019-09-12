import React, { Component } from 'react'
import tickets from './seedData'

const TicketListContext = React.createContext({
  ticketList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTicketList: () => {},
})

export default TicketListContext

export class TicketListProvider extends Component {
  state = {
    ticketList: tickets,
    error: null,
  };

  setTicketList = ticketList => {
    this.setState({ ticketList })
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTicketList: this.setTicketList,
    }
    return (
      <TicketListContext.Provider value={value}>
        {this.props.children}
      </TicketListContext.Provider>
    )
  }
}