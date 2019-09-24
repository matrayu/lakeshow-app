import React from 'react';
import { Link } from 'react-router-dom';
//import { Tickets } from '../../contexts/seedData';
import CartItem from '../../components/CartItem/CartItem';
import TicketContext from '../../contexts/TicketContext';
import TicketListContext from '../../contexts/TicketListContext';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Popup from 'reactjs-popup';
import CheckoutApiService from '../../services/checkout-api-service';

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
        /* let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) return;
        
        let products = this.context.ticketList

        let cartProducts = [], id = null

        for (let i = 0; i < products.length; i++) {
            id = products[i].id.toString();
            if (cart.hasOwnProperty(id)) {
                console.log('has own')
                products[i].qty = cart[id]
                cartProducts.push(products[i]);
            }
        }

        let total = 0;
        for (let i = 0; i < cartProducts.length; i++) {
            let currency = cartProducts[i].list_price_ea
            let number = Number(currency.replace(/[^0-9.-]+/g,""));
            total += number * cartProducts[i].qty;
        }

        console.log(cartProducts)

        this.setState({ products: cartProducts, total });
        */

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
        let products = this.state.products.filter((item) => item.id !== product.id);
        let cart = JSON.parse(localStorage.getItem('cart'));
        delete cart[product.id.toString()];
        localStorage.setItem('cart', JSON.stringify(cart));
        let total = this.state.total - (product.qty * product.price) 
        this.setState({products, total});
    }

    clearCart = () => {
        localStorage.removeItem('cart');
        this.setState({products: []});
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
                                    <button onClick={e => onSuccess()}>Temp Button</button>
                                    <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
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