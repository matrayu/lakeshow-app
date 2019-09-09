import React from 'react';
import TicketDataContext from "../../contexts/TicketDataContext";


export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantity: 1}
    }

    static contextType = TicketDataContext;
    
    render(){
        const {ticketData} = this.context;
        
        return (
            <div className="card" style={{ marginBottom: "10px"}}>
                <div className="card-body">
                <h4 className="card-title">Ticket Name</h4>
                <h5 className="card-text"><small>price: </small>$300</h5>
                <span className="card-text text-success">
                    <small>Quantity: </small>2</span>
                <button className="btn btn-sm btn-warning float-right" 
                    /* onClick={() => this.props.remove(product)} */>Remove from cart</button>
                </div>
            </div>
        )
    }
}