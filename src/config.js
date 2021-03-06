module.exports = {
    API_ENDPOINT: (process.env.NODE_ENV === 'development') ? "http://localhost:8000/api" : process.env.REACT_APP_API_ENDPOINT,
    API_KEY: process.env.REACT_APP_API_KEY,
    PP_CID: process.env.REACT_APP_PP_CID,
    PP_CID_PROD: process.env.REACT_APP_PP_CID_PROD,
    NODE_ENV: process.env.NODE_ENV,
    PW_RESET_CRYPTO_PASS: process.env.REACT_APP_PW_RESET_CRYPTO_PASS,
    TOKEN_KEY: 'authToken',
};
