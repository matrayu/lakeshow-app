import config from '../config'

const ResetPasswordServices = {
    confirmUserAccount(email) {
        return fetch(`${config.API_ENDPOINT}/password/forgot`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    confirmValidResetCreds(creds) {
        return fetch(`${config.API_ENDPOINT}/password/confirm_creds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(creds),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    resetForgottenPassword(creds) {
        return fetch(`${config.API_ENDPOINT}/password/reset_password`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(creds),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
}

export default ResetPasswordServices