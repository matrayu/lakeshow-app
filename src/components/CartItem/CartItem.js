import React from 'react';
import TicketContext from "../../contexts/TicketContext";
import './CartItem.css'
const moment = require("moment");

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
                    <h4 className="CartItem-title text-primary">{`${product.event.teams.away} at ${product.event.teams.home}`}</h4>
                    <h5 className="CartItem-date"><small></small>{moment(product.event.dates.localDate, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")}</h5>
                    <h5 className="CartItem-section"><small></small>Section {product.seatInfo.section} / Row {product.seatInfo.row}</h5>
                    <h5 className="CartItem-text"><small>Price: </small>{product.prices.listPriceEa}</h5>
                    <span className="CartItem-text text-success">
                        <small>Quantity: </small>{product.qty}</span>
                    <button className="btn btn-sm btn-warning float-right" onClick={() => this.props.remove(product)}>Remove</button>
                </div>
            </div>
        )
    }
}