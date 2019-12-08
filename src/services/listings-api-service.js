import config from '../config'

const ListingsApiService = {
    getListings() {
        return fetch(`${config.API_ENDPOINT}/listings`, {
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

    getListing(listingId) {
        console.log("GETTING LISTING")
        return fetch(`${config.API_ENDPOINT}/listings/${listingId}`, {
            headers: {
                'content-type': 'application/json',
               },
            })
            .then(res => {
                console.log("GET LISTING~~~~~~~~~~~", res)
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                }
        )
    },

}

export default ListingsApiService