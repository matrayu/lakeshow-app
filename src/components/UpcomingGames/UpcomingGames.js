import React, { Component } from 'react';
import UpcomingGame from '../UpcomingGame/UpcomingGame';
import TicketListContext from "../../contexts/TicketListContext";
import TicketsApiService from '../../services/tickets-api-service'
import './UpcomingGames.css'

export default class UpcomingGames extends Component {
    static contextType = TicketListContext;

    componentDidMount() {
        this.context.clearError()
        TicketsApiService.getTickets()
            .then(tickets => this.context.setTicketList(tickets))
            .then(res => {
                this.context.ticketList.sort((a, b) => (a.local_date > b.local_date) ? 1 : -1)
            })
            .catch(this.context.setError)
    }

    renderGames() {
        let { ticketList } = this.context
        ticketList.sort((a, b) => (a.local_date > b.local_date) ? 1 : -1)
        if (ticketList.length !== 0) {
            return (
                ticketList.slice(0, 3).map(ticket =>
                    <UpcomingGame key={ticket.id} ticket={ticket} />
                )
            )
        }
    }

    render() {
        return (
            <section className='UpcomingGames'>
                <div className='UpcomingGames left__container'>
                    <div className='UpcomingGames container'>
                        {this.renderGames()}
                    </div>
                    <div className='image__bottom'></div>
                </div>
                <div className='UpcomingGames right__container'>
                    <div id='UpcomingGames_bk_img'></div>
                    <div className='UpcomingGames title__bg'>
                        <h1 className='splash_title'>Upcoming Games</h1>
                    </div>
                </div>
            </section>
        )
    }
}
