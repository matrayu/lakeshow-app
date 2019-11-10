import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TicketContext from '../../contexts/TicketContext';
import PurchasedItems from '../../components/PurchasedItems/PurchasedItems';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service'

import './PurchaseComplete.css'

export default class PurchaseComplete extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: '', 
            email: '',
            paymentId: '',
            orderId: '',
            total: 0,
        }
    }

    static defaultProps = {
        match: { params: {} }
    };

    static contextType = TicketContext;

    componentWillMount() {
        if(this.context.purchasedTickets.length === 0) {
            return this.props.history.push('/tickets')
        }
        let user = TokenService.readJwtToken()
            
        AuthApiService.getUser(user.user_id)
            .then(res => {
                this.setState({ 
                    first_name: res.first_name,
                    email: res.email
                })
            })
    }

    renderPurchases() {
        const { purchasedTickets } = this.context
        return purchasedTickets.map(ticket => {
            return (
                <PurchasedItems 
                    key={ticket.id}
                    ticket={ticket}
                />
            )
        })
    
    }

    render() {
        return (
        <section className='PurchaseComplete'>
            <div className="invoice-box">
                <div className='invoice-header flex fd_col space-between'>
                    <div className='logo'>
                        <Link to='/tickets'>
                            <img className='invoice_image' src="https://photos.smugmug.com/photos/i-S62mzmH/0/S/i-S62mzmH-S.png" alt='lakeshow tickets'></img>
                        </Link>
                    </div>
                        <Link to='/tickets' className='tickets_link'>
                            Back To Tickets
                        </Link>
                </div>
                <div className='confirmation_text'>
                    <h2 className='information_header'>All right {this.state.first_name}, your order is confirmed!</h2><br/>
                    <p>Your tickets will be emailed shortly. We will be sending them to your provided email address '<b>{this.state.email}</b>'.
                    If you have any issues at all, please contact us directly at 310-439-9904.</p>
                </div>
                <div className='payment_info_container flex fd_col'>
                    <div className='info_header flex fd_row space-between'>
                        <h3>Payment Method</h3>
                        <h3>Order #</h3>
                    </div>
                    <div className='payment_method flex fd_row space-between'>
                        <p>Paypal</p>
                        <p>{this.context.paymentReceipt[1].id}</p>
                    </div>
                    <div className='info_header flex fd_row space-between'>
                        <h3>Tickets</h3>
                        <h3>Price</h3>
                    </div>
                    {this.renderPurchases()}
                    <div className='payment_total'>
                        <h3>Total: ${this.context.paymentReceipt[0].total}.00</h3>
                    </div>
                </div>
                <button onClick={() => window.print()}><b>Print this page for your records.</b></button>
                {/* <button onClick={() => this.handleButton()}><b>Send Receipt</b></button> */}
            </div>
        </section>
        )
    }
}