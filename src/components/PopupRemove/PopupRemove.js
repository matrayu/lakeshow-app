import React from 'react';
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';


export default class PopupRemove extends React.Component {
    render() {
        return (
            <div className="Ticket__data__container add_to_cart">
                <button onClick={this.props.onClick}>
                    <Popup trigger={<div className="button">Remove From Cart</div>} modal>
                    <div className="modal">
                        <div className="header"> Awe! Tickets have been removed.</div>
                        <div className="actions">
                        <div className='modal_button'>
                            <Link
                            to='/tickets'>
                            Find more!
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