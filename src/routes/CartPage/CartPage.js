import React from 'react';
import { Link } from 'react-router-dom';
//import { Tickets } from '../../contexts/seedData';
import CartItem from '../../components/CartItem/CartItem';
//import TicketContext from '../../contexts/TicketContext';
import TicketListContext from '../../contexts/TicketListContext';

import './CartPage.css';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [], total: 0 }
    }

    static contextType = TicketListContext;
    
    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) return;
        
        let products = this.context.ticketList

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

    render() {   
    const { products, total } =  this.state;
        return (
            <div className="CartPage">
                <h2 className="page_title">Cart</h2>
                <hr/>
                {
                    products.map((product, index) => 
                        <CartItem product={product} remove={this.removeFromCart} key={index}/>)
                } 
                
                { products.length 
                    ?   <div className='cart_total'>
                            <hr/>
                            <h4>
                                <small>Total Amount: </small><span className="float-right text-primary">${total}</span>
                            </h4>
                            <hr/>
                        </div>
                    : ''
                }
                
                { !products.length 
                    ?   <h3 className="text-warning">Your cart is empty. Let's go add some <span className='purple text-primary'><Link to='/tickets'>tickets!</Link></span></h3>

                    :   <div className='cart_action_btns'>
                            <Link to="/checkout"><button className="btn btn-success float-right text-primary">Checkout</button></Link>
                            <button className="btn btn-danger float-right" onClick={this.clearCart} 
                                style={{ marginRight: "10px" }}>Clear Cart</button><br/><br/><br/>
                        </div>
                }


                
            </div>
        );
    }
}