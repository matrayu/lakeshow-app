import React, { Component } from 'react'
import TIcketListContext from '../contexts/TicketListContext'
//import tickets from './seedData';

export const nullTicket = {
  ticket: {}
}

const TicketContext = React.createContext({
  ticket: nullTicket,
  cart: [],
  addToCart: () => {}
})

export default TicketContext


export class TicketProvider extends Component {
  state = {
    ticket: nullTicket,
    error: null,
    cart: [],
  };

  static contextType = TIcketListContext

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
    this.setState(nullTicket)
  }

  addToCart = ticket => {
    console.log('added to cart context', ticket)
    let cart = this.state.cart
    cart.push(ticket)
    this.setState(cart)
    //this.context.addToCart(ticket)
  }

  render() {
    const value = {
      ticket: this.state.ticket,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTicket: this.setTicket,
      clearTicket: this.clearTicket,
      addToCart: this.addToCart,
      cart: this.state.cart,
    }
    return (
      <TicketContext.Provider value={value}>
        {this.props.children}
      </TicketContext.Provider>
    )
  }
}