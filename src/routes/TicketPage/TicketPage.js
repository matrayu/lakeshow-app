import React, { Component } from "react";
import TicketContext from "../../contexts/TicketContext";
import tickets from '../../contexts/seedData';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom'

/* import OtherGamesBar from '../../components/OtherGamesBar/OtherGamesBar'; */

import "./TicketPage.css";

let moment = require("moment");

export default class TicketPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = TicketContext;


  componentDidMount() {
    const { ticketId } = this.props.match.params
    const ticket = tickets[ticketId-1]
    this.context.setTicket(ticket)
    this.context.clearError()
  }

  /* componentWillUnmount() {
    this.context.clearTicket()
  } */

  
  renderTicket() {
    const { ticket } = this.context
    console.log('ticket', ticket)
    /* const ticketId = this.props.location.pathname.split("/ticket/");
    const ticket = this.context.ticketData[ticketId[1] - 1]; */
    return (
      <>
        <TicketContent ticketInfo={ticket} />
      </>
    );
  }

  render() {
    
    let content = this.renderTicket();
    return (
      <React.Fragment>
        {content}
        {/* <OtherGamesBar /> */}
      </React.Fragment>
    );
  }
}



function TicketContent({ ticketInfo }) {
  const addToCart = () => {
    console.log('added to cart')
    let cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : {};
  
    let id = ticketInfo.id.toString();
  
    cart[id] = (cart[id]
      ? cart[id]
      : 0
    );
    //hard coding quantity to 2. if this needs to be dynamic
    //change to 'qty'
    //let qty = cart[id] + parseInt(ticketInfo.quantity);
    cart[id] = 2
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const date = moment(ticketInfo.dates, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");

  return <> 
        <div className="Ticket">
            <div className="Ticket__image_container">
                <div
                className="Ticket__image"
                style={{ backgroundImage: `url(${ticketInfo.images})` }}
                />
            </div>
            <div className="Ticket__data">
                <div className="Ticket__data__container main_text flex fd_col">
                    <h2 className="f1">{ticketInfo.name}</h2>
                    <div className="Ticket__data__meta_text flex fd_row">
                        <p>{date}</p>
                        <p>{ticketInfo.time} Tip-Off</p>
                    </div>
                </div>
                <hr />

                <div className="Ticket__data__container pricing flex fd_row">
                    <div className="pricing_container flex fd_row">
                        <div className="pricing_info flex fd_col">
                            <h4>Our Price</h4>  
                            <h3>${ticketInfo.price}</h3>
                            <p>No Fees OR Taxes</p>
                        </div>
                        <div className="pricing_info flex fd_col">
                            <h4>Stubhub</h4>
                            <h3>${ticketInfo.compPrice}</h3>
                            <p>+ Fees / + Taxes</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="Ticket__data__container quantity flex fd_row">
                    <div className="section3">
                        <div className="section3 sub_section">
                            <p>Quantity: <span>{ticketInfo.quantity}</span> tickets sold as a pair</p>
                            {/* <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select> */}
                        </div>
                    </div>
                </div>
                <hr />

                <div className="Ticket__data__container add_to_cart">
                  <button onClick={addToCart}>
                    {
                      <Popup trigger={
                          <button className="button" onClick={addToCart}> 
                            Add to Cart 
                          </button>} 
                        modal>
                          <div className="modal">
                            <div className="header"> Yah! Tickets have been added to your cart!</div>
                            <div className="actions">
                              <div className='modal_button'>
                                <Link
                                  to='/tickets'>
                                  Find more tickets!
                                </Link>
                              </div>
                              <div className='modal_button'>
                                <Link
                                  to='/cart'>
                                  Checkout
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Popup>
                      }
                  </button> 
                </div>
            </div>
        </div>
    </>
}
