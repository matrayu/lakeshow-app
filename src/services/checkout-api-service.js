import config from '../config'

const CheckoutApiService = {
    postAccessToken() {
        return fetch(`https://api.sandbox.paypal.com/v1/oauth2/token`, {
            method: 'POST',    
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'authorization': 'Basic QVFlMC1DRlBoVVFVaXZzNEo1ZDZXSERQQ1d3aU9LdEE0TEVQejBqck15aDhTUUV0a25sanJfd1VyVE5md2h2Y2ZHcjhZV1ZxbmJPaGJvN1I6RUJvYlI0ZUJMbm5QZlhJY25KU0JsYjRGY2ZiTC1pNzNvUnBpQVdVZ2JISHQxM1F5WmZoZUZjSVQ0VnpDbmdvbUotUWhadTMtckdzcjNWQ3U='
            },
            body: 'grant_type=client_credentials'
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                return res
            })
    },

    postPayment(transactions) {
        console.log('going to post payment', transactions)
        return fetch(`${config.API_ENDPOINT}/pay`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                /* 'authorization': `bearer ${TokenService.getAuthToken()}`, */
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
            console.log('error after trying to post payment')
        })
    }
}

export default CheckoutApiService