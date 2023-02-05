"use strict";

// imports
const axios = require("axios");
const constants = require("./helpers/constants")

/** 
 * Base class for making direct connections to the API
 * @module API
 */
class API {
    constructor(kwargs) {
        const { apiKey, baseURL, timeout } = kwargs;

        this.apiKey = apiKey;
        this.timeout = timeout || 0;
        this.URL = baseURL;
    }

    /**
     * 
     * @param {String} method Request HTTP Method
     * @param {String} endpoint Request endpoint (ex: /engine/start)
     * @param {object} payload Request body
     * @returns object
     */
    sendRequest(method, endpoint, payload) {

        // generate request headers
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-AUG-KEY": this.apiKey,
            "User-Agent": `${constants.appName}/${constants.appVersion}`,
        };

        // create axios object
        return axios.create({ baseURL: this.URL + endpoint, headers, timeout: this.timeout })
            // send request with specified method and endpoint
            .request({
                method,
                data: payload
            });
    }
}

// export API class to be called externally 
module.exports = API;