import React from 'react';
import { Link } from 'react-router-dom';
import { Tickets } from '../../contexts/seedData';
import CartItem from '../../components/CartItem/CartItem';
import TicketDataContext from "../../contexts/TicketDataContext";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [], total: 0 }
    }

    static contextType = TicketDataContext;
    
    componentDidMount() {
        let cart = localStorage.getItem('cart');
        if (!cart) return; 
        
        let products = this.context.ticketData

        let cartProducts = [], id = null

        let properties = cart.split(', ');
        let obj = {};
        properties.forEach(function(property) {
            let tup = property.split(':');
            obj[tup[0]] = tup[1];
        });

        console.log(obj)

        for (let i = 0; i < products.length; i++) {
            id = products[i].id.toString();
            if (cart.hasOwnProperty(1)) {
                //console.log(id)
                products[i].qty = cart[id]
                cartProducts.push(products[i]);
            }
        }
        //console.log(cartProducts)
        return cartProducts
            
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
            <div className=" container">
                <h3 className="card-title">Cart</h3>
                <hr/>
                {
                    products.map((product, index) => 
                        <CartItem product={product} remove={this.removeFromCart} key={index}/>)
                } 
                <hr/>
                { products.length 
                    ? <div><h4><small>Total Amount: </small><span className="float-right text-primary">${total}</span></h4><hr/></div>
                    : ''
                }
                { !products.length 
                    ? <h3 className="text-warning">No item on the cart</h3>
                    : ''
                }
                <Link to="/checkout"><button className="btn btn-success float-right">Checkout</button></Link>
                <button className="btn btn-danger float-right" onClick={this.clearCart} 
                    style={{ marginRight: "10px" }}>Clear Cart</button><br/><br/><br/>
            </div>
        );
    }
}