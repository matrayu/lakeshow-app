import React, { Component } from 'react'
import tickets from './seedData';

export const nullTicket = {
  ticket: {}
}

const TicketContext = React.createContext({
  ticket: nullTicket
})

export default TicketContext


export class TicketProvider extends Component {
  state = {
    ticket: nullTicket,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setTicket = ticket => {
    console.log(ticket)
    this.setState({ ticket })
  }

  clearTicket = () => {
    this.setTicket(null)
  }

  render() {
    const value = {
      ticket: this.state.ticket,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTicket: this.setTicket,
      clearTicket: this.clearTicket
    }
    return (
      <TicketContext.Provider value={value}>
        {this.props.children}
      </TicketContext.Provider>
    )
  }
}