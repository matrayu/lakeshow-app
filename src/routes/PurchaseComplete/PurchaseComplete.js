import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './PurchaseComplete.css'

export default class PurchaseComplete extends Component {
  render() {
    return (
      <section className='PurchaseComplete'>
        <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <Link to='/tickets'>
                                  <img className='invoice_image' src="https://photos.smugmug.com/photos/i-S62mzmH/0/S/i-S62mzmH-S.png" alt='lakeshow tickets'></img>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                <h2 className='information_header'>All right, your order is confirmed!</h2><br/>
                                 Your tickets will be emailed shortly. We will be sending them to 'insert email address'.
                                 If you have any issues at all, please contact us directly at 310-439-9904.
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="heading">
                <td>
                    Payment Method
                </td>
                
                <td>
                    Order #
                </td>
            </tr>
            
            <tr class="details">
                <td>
                    Paypal
                </td>
                
                <td>
                    "INSERT ORDER NUMBER"
                </td>
            </tr>
            
            <tr class="heading">
                <td>
                    Tickets
                </td>
                
                <td>
                    Price
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    Website design
                </td>
                
                <td>
                    $300.00
                </td>
            </tr>
            
            <tr class="item">
                <td>
                    Hosting (3 months)
                </td>
                
                <td>
                    $75.00
                </td>
            </tr>
            
            <tr class="item last">
                <td>
                    Domain name (1 year)
                </td>
                
                <td>
                    $10.00
                </td>
            </tr>
            
            <tr class="total">
                <td></td>
                
                <td>
                   Total: $385.00
                </td>
            </tr>
        </table>
        <button onClick={() => window.print()}><b>Print this page for your records.</b></button>
        </div>
      </section>
    )
  }
}