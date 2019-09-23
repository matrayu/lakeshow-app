import config from '../config'

const TicketsApiService = {
    getTickets() {
        console.log('****')
        return fetch(`${config.API_ENDPOINT}/tickets`, {
           headers: {
            'content-type': 'application/json',
           },
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            }
       )
    },

    getTicket(ticketId) {
        return fetch(`${config.API_ENDPOINT}/tickets/${ticketId}`, {
            headers: {
                'content-type': 'application/json',
               },
            })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                }
        )
    },

}

export default TicketsApiService