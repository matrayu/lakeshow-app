import React, { Component } from 'react'
import Tickets from '../../components/Tickets/Tickets'
import MainHeader from '../../components/MainHeader/MainHeader'
import MainFooter from '../../components/MainFooter/MainFooter'
import './TicketsPage.css';

export default class TicketsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='TicketsPage'>
                    <div className='TicketsPage container'>
                        <div className='TicketsPage search_functions'>
                            <input type="text" placeholder="Search.."></input>
                            <div className='sort_by'>
                                Sort By:
                                <select>
                                    <option value='date'>Date</option>
                                    <option value='priceHigh'>Price High to Low</option>
                                    <option value='priceLow'>Price Low to High</option>
                                    <option value='team'>Team</option>
                                </select>
                            </div>
                        </div>
                        <section className='TicketsPage results'>
                            <Tickets />
                        </section>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}