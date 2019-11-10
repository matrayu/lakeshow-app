import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import TicketContext from '../../contexts/TicketContext';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Popup from 'reactjs-popup';
import CheckoutApiService from '../../services/checkout-api-service';
import MailjetApiService from '../../services/mailjet-api-service';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './CartPage.css';

const moment = require("moment")


// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App" unless you have already done so):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

const { PP_CID, PP_CID_PROD } = require('../../config')

const client = {
	sandbox: PP_CID,
	production: PP_CID_PROD,
}

const env = 'production'; // you can set this string to 'production' v 'sandbox'

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [], 
            total: 0,
            currency: 'USD',
            open: false,
        }
    }

    static defaultProps = {
        match: { params: {} }
    };

    static contextType = TicketContext;
    
    componentDidMount() {
        let products = this.context.cart
        if (!products) return;
        let total = 0

        products.forEach(ticket => {
            let currency = Number(ticket.list_price_ea.replace(/[^0-9.-]+/g,""))
            let subtotal = currency * ticket.quantity
            total += subtotal
            this.setState({ total })
        })
        this.setState({ products, total });
    };

    removeFromCart = (product) => {
        let filtered = this.context.cart.filter(tix => tix.id !== product.id)
        this.context.removeFromCart(filtered)
        this.setState({ products: filtered })
        
        let total = 0

        filtered.forEach(ticket => {
            let currency = Number(ticket.list_price_ea.replace(/[^0-9.-]+/g,""))
            let subtotal = currency * ticket.quantity
            total += subtotal
            this.setState({ total })
        })
    }

    calculateTotal = () => {
        let products = this.context.cart
        if (!products) return;
        let total = 0

        products.forEach(ticket => {
            let currency = Number(ticket.list_price_ea.replace(/[^0-9.-]+/g,""))
            let subtotal = currency * ticket.quantity
            total += subtotal
            this.setState({ total })
        })
        this.setState({ products, total });
    }

    goBack = () => {
        this.props.history.goBack()
    }

    successfulPayment = () => {
        this.props.history.push('/success')
    }

    onSuccess = (data) => {
        const { products } =  this.state;
        let ticketsArr = []
        this.context.setPurchasedTickets(products)
        data.total = this.state.total
        let { total } = this.state
        this.context.setPaymentReceipt(data)
        let userData = []
        let user = TokenService.readJwtToken()

        products.forEach(product => {
            ticketsArr.push(product.id)
            let gameDay = moment(product.local_date).add(1, 'day').format('MMMM Do, YYYY')
            product.gameDay = gameDay
        })

            
        AuthApiService.getUser(user.user_id)
            .then(user => {
                userData.push(user.first_name, user.email)
            })
            .catch(error => {
                console.error(error)
            })

        CheckoutApiService.postPayment(ticketsArr)
            .then(data => {
                let newDate = moment(data.date_order_placed).format("M/D/YYYY")
                data.dateFormatted = newDate
                data.orderTotal = total
                return data
            })
            .then(order => {
                this.context.setPaymentReceipt(order)
                return MailjetApiService.sendEmail(userData, products, order)
            })
            .then(res => {
                this.context.clearCart()
            })
            .then(res => {
                this.successfulPayment()
            })
            .catch(error => {
                console.error(error)
            })
    }

    onCancel = (data) => {
        this.setState({ open: true })
    }

    onError = (err) => {
        console.error("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }

    render() {
        const { products, total, currency } =  this.state;
        return (
            <div className="CartPage">
                {this.context.cart.length === 0 
                    ? ''
                    : <h1 className="page_headings">Checkout</h1>
                }
                {products.map((product, index) => 
                    <CartItem 
                        product={product} 
                        remove={this.removeFromCart} 
                        key={index}
                    />
                )} 
                
                { products.length 
                    ?   <div className='cart_total'>
                            <h4><small></small><span className="float-right text-primary">Total Amount: ${total}</span> </h4><br></br>
                        </div>
                    : ''
                }
                { !products.length 
                    ?   <h3 className="text-warning">Your cart is empty. Let's go add some <span className='purple text-primary'><Link to='/tickets'>tickets!</Link></span></h3>
                    :   <div className='cart_action_btns'>
                            <button onClick={this.goBack}>Back</button>
                            <div className="btn btn-success float-right text-primary">
                                {TokenService.hasAuthToken() 
                                    ? <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={this.onError} onSuccess={this.onSuccess} onCancel={this.onCancel} /> 
                                    : <div className='login__needed'>
                                        <span>Please 
                                            <Link to={{
                                                pathname: '/login', 
                                                state: { from: this.props.location.pathname }
                                                }} className='link'> login
                                            </Link> or 
                                            <Link to={{ 
                                                pathname: '/signup', 
                                                state: { from: this.props.location.pathname }
                                                }} className='link'> signup
                                            </Link> to complete purchase
                                        </span>
                                    </div>
                                }
                                
                            </div>
                            <Popup open={this.state.open} modal closeOnDocumentClick>
                                <div className='modal'>
                                    <div className="cancel_header">Oh no! <br/> It looks like the purchase was canceled.</div>
                                </div>
                            </Popup>
                        </div>
                }
            </div>
        );
    }
}