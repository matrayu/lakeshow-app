import React, { Component } from 'react'
import Ticket from '../../components/Ticket/Ticket'
/* import OtherGamesBar from '../../components/OtherGamesBar/OtherGamesBar'; */

import './TicketPage.css'

class TicketPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Ticket />
                {/* <OtherGamesBar /> */}
            </React.Fragment>
        )
    }
}

export default TicketPage;