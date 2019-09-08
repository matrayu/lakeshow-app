import React from 'react'
import tickets from './seedData';


const TicketDataContext = React.createContext({
    ticketData: tickets
})

export default TicketDataContext