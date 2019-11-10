import React, { Component } from 'react';
import UpcomingGame from '../UpcomingGame/UpcomingGame';
import TicketListContext from "../../contexts/TicketListContext";
import TicketsApiService from '../../services/tickets-api-service';
import {Image} from 'cloudinary-react';
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
                    <div className='UpcomingGames title__bg'>
                        <h1 className='splash_title'>Upcoming Games</h1>
                    </div>
                    <div id='UpcomingGames_bk_img'>
                        <Image
                            cloudName="matrayu"
                            publicId="v1572136906/Lakers/LakeshowTix2020-26_idzvkk.png"
                            drp="auto"
                            width="2000"
                            height="600"
                            crop="fill"
                            gravity="east"
                            title="Lebron shoots a three pointer"
                            alt="Lebron shoots a three pointer"
                            className="UpcomingGames-image"
                        />
                    </div>
                </div>
            </section>
        )
    }
}
