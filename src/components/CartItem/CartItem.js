import React from 'react';
import TicketContext from "../../contexts/TicketContext";
import './CartItem.css'


export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantity: 1}
    }

    static contextType = TicketContext;
    
    render(){
        const { product } = this.props
        
        return (
            <div className="CartItem" style={{ marginBottom: "10px"}}>
                <div className="CartItem-body">
                    <h4 className="CartItem-title text-primary">{`${product.away_team} at ${product.home_team}`}</h4>
                    <h5 className="CartItem-text"><small>Price: </small>{product.list_price_ea}</h5>
                    <span className="CartItem-text text-success">
                        <small>Quantity: </small>{product.quantity}</span>
                    <button className="btn btn-sm btn-warning float-right" onClick={() => this.props.remove(product)}>Remove</button>
                </div>
            </div>
        )
    }
}