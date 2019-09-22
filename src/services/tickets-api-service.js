import config from '../config'

const TicketsApiService = {
    getTickets() {
        return fetch(`${config.API_ENDPOINT}/tickets`, {
           headers: {
            'content-type': 'application/json',
           },
        })
        .then(res => {
            console.log(res) 
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            }
       )
    }
}

export default TicketsApiService