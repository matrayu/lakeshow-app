import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import TicketContext from '../../contexts/TicketContext';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Popup from 'reactjs-popup';
import CheckoutApiService from '../../services/checkout-api-service';
import TokenService from '../../services/token-service'
import './CartPage.css';

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

const env = 'sandbox'; // you can set this string to 'production'

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
        let filtered = this.context.cart.filter(tix => tix.id != product.id)
        this.context.removeFromCart(filtered)
        this.setState({ products: filtered })
        
        let total = 0

        filtered.forEach(ticket => {
            let currency = Number(ticket.list_price_ea.replace(/[^0-9.-]+/g,""))
            let subtotal = currency * ticket.quantity
            total += subtotal
            this.setState({ total })
        })

        console.log(total)

    }

    calculateTotal = () => {
        let products = this.context.cart
        console.log(products)
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

    render() {
        const { products, total, currency } =  this.state;
        const onSuccess = () => {
            console.log("Payment successful!", products);
            let ticketsArr = []
            this.context.setPurchasedTickets(products)
            products.forEach(product => {
                ticketsArr.push(product.id)
            })
            CheckoutApiService.postPayment(ticketsArr)
                .then(res => {
                    this.successfulPayment()
                })
                .then(res => {
                    this.setState({ products: []})
                    this.context.clearCart()
                })
                .catch(error => {
                    console.error(error)
                })
            
        }

        const onCancel = (data) => {
            console.log('Payment cancelled!', data);
            this.setState({ open: true })
        }

        const onError = (err) => {
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
        
            return (
                <div className="CartPage">
                    <h2 className="page_title">Cart</h2>
                    <hr/>
                    {products.map((product, index) => 
                        <CartItem 
                            product={product} 
                            remove={this.removeFromCart} 
                            key={index}
                        />
                    )} 
                    
                    { products.length 
                        ?   <div className='cart_total'>
                                <hr/>
                                <h4><small>Total Amount: </small><span className="float-right text-primary">${total}</span> </h4>
                                <hr/>
                            </div>
                        : ''
                    }
                    
                    { !products.length 
                        ?   <h3 className="text-warning">Your cart is empty. Let's go add some <span className='purple text-primary'><Link to='/tickets'>tickets!</Link></span></h3>
                        :   <div className='cart_action_btns'>
                                <button onClick={this.goBack}>Go Back</button>
                                <div className="btn btn-success float-right text-primary">
                                    {/* <button onClick={e => onSuccess()}>Temp Button</button> */}
                                    {TokenService.hasAuthToken() 
                                        ? <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} /> 
                                        : <div className='login__needed'>
                                            <span>Please <Link to='/login' className='link'>login</Link> or <Link to='/signup' className='link'>signup</Link> to complete purchase</span>
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