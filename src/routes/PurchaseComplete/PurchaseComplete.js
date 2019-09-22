import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './PurchaseComplete.css'

export default class PurchaseComplete extends Component {
  render() {
    return (
      <section className='PurchaseComplete'>
        <div className="invoice-box">
            <div className='logo'>
                <Link to='/tickets'>
                    <img className='invoice_image' src="https://photos.smugmug.com/photos/i-S62mzmH/0/S/i-S62mzmH-S.png" alt='lakeshow tickets'></img>
                </Link>
            </div>
            <div className='confirmation_text'>
                <h2 className='information_header'>All right, your order is confirmed!</h2><br/>
                <p>Your tickets will be emailed shortly. We will be sending them to 'insert email address'.
                If you have any issues at all, please contact us directly at 310-439-9904.</p>
            </div>
            <div className='payment_info_container flex fd_col'>
                <div className='info_header flex fd_row space-between'>
                    <h3>Payment Method</h3>
                    <h3>Order #</h3>
                </div>
                <div className='payment_method flex fd_row space-between'>
                    <p>Paypal</p>
                    <p>151464897</p>
                </div>
                <div className='info_header flex fd_row space-between'>
                    <h3>Tickets</h3>
                    <h3>Price</h3>
                </div>
                <div className='line_items flex fd_row space-between'>
                    <p>Lakers vs Clippers</p>
                    <p>$354.00</p>
                </div>
                <div className='line_items flex fd_row space-between'>
                    <p>Lakers vs Houston</p>
                    <p>$700.00</p>
                </div>
                <div className='line_items flex fd_row space-between'>
                    <p>Lakers vs Warriors</p>
                    <p>$1000.00</p>
                </div>
                <div className='payment_total'>
                    <h3>Total: $2054.00</h3>
                </div>
            </div>
            <button onClick={() => window.print()}><b>Print this page for your records.</b></button>
        </div>
      </section>
    )
  }
}