import React from 'react';
/* import { isAuthenticated, getCartProducts } from '../../repository'; */
import {  Redirect, Link } from 'react-router-dom';
import TicketContext from '../../contexts/TicketContext';
import './CheckoutPage.css'

export default class CheckoutPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			total: 0
		}
    }
    
    static contextType = TicketContext;

	componentDidMount() {
		let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) return;
        
        let products = this.context.ticketData

        let cartProducts = [], id = null

        

        for (let i = 0; i < products.length; i++) {
            id = products[i].id.toString();
            if (cart.hasOwnProperty(id)) {
                products[i].qty = cart[id]
                cartProducts.push(products[i]);
            }
        }

        let total = 0;
        for (let i = 0; i < cartProducts.length; i++) {
            total += cartProducts[i].price * cartProducts[i].qty;
        }

        this.setState({ products: cartProducts, total });
   
    };

	render() {
		/* if (!isAuthenticated()) return (<Redirect to="/login" />); */
		const { products, total } =  this.state;
		return (
			<div className=" container">
				<h2 className="page_title">Checkout</h2>
				<hr/>
				{
					products.map((product, index) => 
						<div className='CartItem-body' key={index}>
							<p>
								{product.name} 
								<small> (quantity: {product.qty})</small>
								<span className="float-right text-primary">${product.qty * product.price}</span>
							</p>
                            <hr/>
						</div>
                        
					)
				}
				{ products.length 
					? 	<div className='cart_total'>
							<h4>
								<small>Total Amount:</small><span className="float-right text-primary">${total}</span>
							</h4>
							<hr/>
						</div>
					: ''
				}
                { !products.length 
                    ? <h3 className="text-warning">No item on the cart</h3>
                    :   <div className='cart_action_btns'>
                            <button className="btn btn-success float-right" onClick={() => alert('Proceed to Pay')}>Pay</button>
                            <Link to="/cart"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Cancel</button></Link>
                        </div>
                }	
			</div>
		);
	}
}
