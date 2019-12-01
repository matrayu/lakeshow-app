import React, { Component } from 'react'

export const nullTicket = {
  ticket: {}
}

const TicketContext = React.createContext({
  ticket: nullTicket,
  discount: false,
  cart: [],
  purchasedTickets: [],
  paymentReceipt: [],
  userInfo: {},
  addToCart: () => {},
  removeFromCart: () => {},
  setPurchasedTickets: () => {},
  clearCart: () => {},
  clearPurchasedTickets: () => {},
})

export default TicketContext


export class TicketProvider extends Component {
  state = {
    ticket: nullTicket,
    discount: false,
    error: null,
    cart: [],
    purchasedTickets: [],
    paymentReceipt: [],
    userInfo: {},
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setTicket = ticket => {
    this.setState({ ticket })
  }

  clearTicket = () => {
    this.setState(nullTicket)
  }

  addToCart = ticket => {
    let cart = this.state.cart
    cart.push(ticket)
    this.setState(cart)
  }

  removeFromCart = (cart) => {
    this.setState({ cart: cart })
  }

  clearCart = () => {
    this.setState({ cart: [] })
  }

  clearPurchasedTickets = () => {
    this.setState({ purchasedTickets: [] })
  }

  setPurchasedTickets = purchasedTickets => {
    this.setState({ purchasedTickets })
  }

  setPaymentReceipt = paymentReceipt => {
    let receipt = this.state.paymentReceipt
    receipt.push(paymentReceipt)
    this.setState({ receipt })
  }

  setUserInfo = (user) => {
    this.setState({
      username: user.username,
      first_name: user.first_name,
      email: user.email,
    })
  }

  setDiscount = () => {
    this.setState({ discount: true })
  }

  render() {
    const value = {
      ticket: this.state.ticket,
      discount: this.state.discount,
      setDiscount: this.setDiscount,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTicket: this.setTicket,
      clearTicket: this.clearTicket,
      addToCart: this.addToCart,
      cart: this.state.cart,
      removeFromCart: this.removeFromCart,
      purchasedTickets: this.state.purchasedTickets,
      setPurchasedTickets: this.setPurchasedTickets,
      clearCart: this.clearCart,
      clearPurchasedTickets: this.clearPurchasedTickets,
      paymentReceipt: this.state.paymentReceipt,
      setPaymentReceipt: this.setPaymentReceipt,
      setUserInfo: this.setUserInfo,
    }
    return (
      <TicketContext.Provider value={value}>
        {this.props.children}
      </TicketContext.Provider>
    )
  }
}