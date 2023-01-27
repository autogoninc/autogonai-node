// const axios = require("axios");
// const { createRequest, } = require("./helpers/utils");

class API {
    constructor(kwargs) {
        const { apiKey, baseURL, timeout } = kwargs;

        this.apiKey = apiKey;
        this.timeout = timeout || 0;

        this.URL = baseURL;
    }

    sendRequest(endpoint, method, payload) {
        return null;
    }
}

module.exports = API;