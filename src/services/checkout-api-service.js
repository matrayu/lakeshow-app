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
                //ADD CODE HERE
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postPayment(transactions) {
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
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        })
        .then(data => {
            return data
        })
        .catch(err => {
            console.log('error after trying to post payment', err)
        })
    },

    sendEmailConfirmation(purchase) {
        return fetch(`${config.API_ENDPOINT}/send_email`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res => {
            console.log(res)
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        })
        .catch(err => {
            console.log('error after trying to send email', err)
        })
    }
}

export default CheckoutApiService