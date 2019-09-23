import config from '../config'
import TokenService from './token-service'

const CheckoutApiService = {
    postSale() {
        return fetch(`${config.API_ENDPOINT}/sales`, {
            method: 'POST',    
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken}`
            },
            body: JSON.stringify({
                
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postPayment(transactions) {
        console.log('going to post payment', transactions)
        return fetch(`${config.API_ENDPOINT}/pay`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                transactions
            }),
        })
        .then(res => {
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        })
        .catch(err => {
            console.log('error after trying to post payment', err)
        })
    }
}

export default CheckoutApiService