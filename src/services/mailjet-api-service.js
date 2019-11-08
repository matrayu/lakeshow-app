import config from '../config'

const MailjetApiService = {
    sendEmail(userData, ticketsArr, order) {
        let data = {userData, ticketsArr, order}
        return fetch(`${config.API_ENDPOINT}/send_email`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                data
            }),
        })
        .then(res => {
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        })
        .catch(err => {
            console.log('error after trying to send email', err)
        })
    }
}

export default MailjetApiService