import React, { Component } from "react";
import TicketContext from "../../contexts/TicketContext";
import ListingsApiService from '../../services/listings-api-service'
import PopupAdded from '../../components/PopupAdded/PopupAdded'
import PopupRemove from '../../components/PopupRemove/PopupRemove'

/* import OtherGamesBar from '../../components/OtherGamesBar/OtherGamesBar'; */

import "./TicketPage.css";

let moment = require("moment");

export default class TicketPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loaded: false,
      inCart: false,
    }
  }

  static defaultProps = {
    match: { params: {} }
  };

  static contextType = TicketContext;
  

  componentDidMount() {
    let {ticketId} = this.props.match.params
    this.context.clearError()
    ListingsApiService.getListing(ticketId)
      .then(ticket => this.context.setTicket(ticket))
      .then(res => {
        this.context.cart.some(tix => tix.id === parseInt(ticketId))
          ? this.setState({ inCart: true })
          : this.setState({ inCart: false })
      })
      .then(res => this.setState({ loaded: true }))
      .catch(error => this.context.setError(error))
  }

  componentWillUnmount() {
    this.context.clearTicket()
  }


  addToCart = () => {
    let { cart } = this.context
    let { ticket } = this.context
    if (cart.includes(ticket)) {
      return
    }
    this.context.addToCart(this.context.ticket)
    
  }

  removeFromCart = () => {
    let filtered = this.context.cart.filter(tix => tix.id !== this.context.ticket.id)
    this.context.removeFromCart(filtered)
  }

  content() {
    const { ticket } = this.context

    return (
      <div className="Ticket">
        <div className="Ticket__image_container">
            <div
            className="Ticket__image"
            style={{backgroundImage: `url(${ticket.images.awayLogo})`}}
            />
        </div>
        <div className="Ticket__data">
            <div className="Ticket__data__container main_text flex fd_col">
                <h2 className="f1">{`${ticket.event.teams.away}`} <br/> at {`${ticket.event.teams.home}`}</h2>
                <div className="Ticket__data__meta_text flex fd_row">
                    <p>{moment(ticket.event.dates.localDate, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")}</p>
                    <p>{moment(ticket.event.dates.localTime, 'HH mm ss').format('h:mm A')} Tip-Off</p>
                </div>
                {!ticket.event.note
                  ? ''
                  : <div className='game_note_ticket'>** {ticket.event.note} **</div>
                }
            </div>

            <div className="Ticket__data__container pricing flex fd_row">
                <div className="pricing_container flex fd_row">
                    <div className="pricing_info flex fd_col">
                        <h4>Our Price</h4>
                        <div className='flex fd_row pricing'>  
                          <h3 id='ourPrice'>{ticket.prices.listPriceEa}</h3><p>ea</p>
                        </div>
                        <p>No Fees OR Taxes</p>
                    </div>
                    <div className="pricing_info flex fd_col">
                        <h4>Stubhub</h4>
                        <div className='flex fd_row pricing'>
                          <h3 id='compPrice'>{ticket.prices.compPriceEa}</h3><p>ea</p>
                        </div>
                        <p>+ Fees / + Taxes</p>
                    </div>
                </div>
            </div>

            <div className="Ticket__data__container quantity flex fd_row">
                <div className="section3">
                    <div className="section3 sub_section">
                    <p><b>Section {ticket.seatInfo.section} / Row {ticket.seatInfo.row}</b></p>
                    <p>Quantity Available: {ticket.qty}</p>
                      {ticket.qty === 1
                        ? <p className='ticket_pair'>Single Seat Only</p>
                        : <p className='ticket_pair'>Tickets sold as a pair</p>
                      }
                    </div>
                </div>
            </div>
            {this.state.inCart 
              ? <PopupRemove onClick={this.removeFromCart} />
              : <PopupAdded onClick={this.addToCart} />
            }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.loaded ? this.content() : null}
      </div>
    )
  }
}

