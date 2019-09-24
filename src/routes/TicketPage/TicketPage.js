import React, { Component } from "react";
import TicketContext from "../../contexts/TicketContext";
import TicketsApiService from '../../services/tickets-api-service'
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
    this.context.clearError()
    TicketsApiService.getTicket(ticketId)
      .then(ticket => this.context.setTicket(ticket))
      .catch(error => this.context.setError(error))
  }

  componentWillUnmount() {
    this.context.clearTicket()
  }


  addToCart = () => {
    const { cart, ticket } = this.context
    let id = ticket.id
    console.log(JSON.stringify(cart).indexOf(`"id":${id}`) != -1)
    if (JSON.stringify(cart).indexOf(`"id":${id}`) != -1) return;
    console.log('add to cart')
    
    this.context.addToCart(ticket)
  }

  render() {
    const { cart, ticket } = this.context
    let id = ticket.id
    let inCart = JSON.stringify(cart).indexOf(`"id":${id}`) != -1
    console.log(JSON.stringify(cart).indexOf(`"id":${id}`) != -1)
    /* const addToCart = () => {
      let cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : {};

      
    
      let id = ticket.id.toString();
    
      cart[id] = (cart[id]
        ? cart[id]
        : 0
      );
      //hard coding quantity to 2. if this needs to be dynamic
      //change to 'qty'
      //let qty = cart[id] + parseInt(ticketInfo.quantity);
      cart[id] = 2
      localStorage.setItem('cart', JSON.stringify(cart))
    } */

    

    //const date = moment(ticket.local_date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY");
    //const time = moment(ticket.local_time, 'HH mm ss').format('h:mm A')

    return <> 
          <div className="Ticket">
              <div className="Ticket__image_container">
                  <div
                  className="Ticket__image"
                  style={{ backgroundImage: `url(${ticket.away_logo})` }}
                  />
              </div>
              <div className="Ticket__data">
                  <div className="Ticket__data__container main_text flex fd_col">
                      <h2 className="f1">{`${ticket.away_team} vs ${ticket.home_team}`}</h2>
                      <div className="Ticket__data__meta_text flex fd_row">
                          <p>{moment(ticket.local_date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")}</p>
                          <p>{moment(ticket.local_time, 'HH mm ss').format('h:mm A')} Tip-Off</p>
                      </div>
                  </div>
                  <hr />

                  <div className="Ticket__data__container pricing flex fd_row">
                      <div className="pricing_container flex fd_row">
                          <div className="pricing_info flex fd_col">
                              <h4>Our Price</h4>
                              <div className='flex fd_row pricing'>  
                                <h3>{ticket.list_price_ea}</h3><p>ea</p>
                              </div>
                              <p>No Fees OR Taxes</p>
                          </div>
                          <div className="pricing_info flex fd_col">
                              <h4>Stubhub</h4>
                              <div className='flex fd_row pricing'>
                                <h3>{ticket.stubhub_price_ea}</h3><p>ea</p>
                              </div>
                              <p>+ Fees / + Taxes</p>
                          </div>
                      </div>
                  </div>

                  <hr />

                  <div className="Ticket__data__container quantity flex fd_row">
                      <div className="section3">
                          <div className="section3 sub_section">
                              <p>Quantity Available: {ticket.quantity}</p>
                              <p className='ticket_pair'>Tickets sold as a pair</p>
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
                      <button className="button"onClick={this.addToCart}>
                        <Popup trigger={<div>Add to Cart</div>} modal>
                          {!inCart
                              ?<div className="modal">
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
                              :<button className="button"onClick={this.addToCart}>Remove From Cart</button>
                          }
                        </Popup> 
                      </button> 
                  </div>
              </div>
          </div>
      </>
    }
}

