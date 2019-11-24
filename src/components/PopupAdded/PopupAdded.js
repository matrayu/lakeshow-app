import React from 'react';
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import './PopupAdded.css'


export default class PopupAdded extends React.Component {
    render() {
        return (
            <div className="Ticket__data__container add_to_cart">
                <button onClick={this.props.onClick}>
                    <Popup trigger={<div className="button">Add to Cart</div>} modal>
                        <div className="modal">
                            <div className="header"> Yah! Tickets have been added to your cart!</div>
                            <div className="actions">
                            <div className='modal_button'>
                                <Link
                                to='/tickets'>
                                Find more tickets!
                                </Link>
                            </div>
                            <div className='modal_button'>
                                <Link
                                to='/cart'>
                                Checkout
                                </Link>
                            </div>
                            </div>
                        </div>
                    </Popup>
                </button>
            </div>
        )
    }
}