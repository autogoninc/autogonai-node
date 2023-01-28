"use strict";

// imports
const API = require("./connector");
const blocks = require("./development");
const modules = require("./core/modules"); // other APIS
const constants = require("./helpers/constants");

const { flowObjects } = require("./helpers/utils");

/**
 * @module Client
 */
class Client extends flowObjects(...Object.values(blocks))(API) {

    constructor(apiKey, options = {}) {
        // if baseURL is not provided, use default
        options.baseURL ||= constants.BASE_URL;

        // initialize `API` class
        super({
            apiKey: apiKey,
            ...options
        });

        // initialze Other APIs
        this.Project = new modules.Dataset(this);
        this.StateManagement = new modules.StateManagement(this);
        this.Dataset = new modules.Dataset(this);
    }
}

// export `Client` class.
module.exports = Client;