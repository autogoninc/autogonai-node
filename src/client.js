
const modules = require("./core/modules");
const { flowObjects } = require("./utils/helpers");
const { BASE_URL, } = require("./constants");
const API = require("./connector");
const blocks = require("./development");

class Client extends (API) {

    constructor(apiKey, options = {}) {
        options.baseURL ||= BASE_URL;

        super({
            apiKey: apiKey,
            ...options
        });

        this.apiKey = apiKey;

        this.Project = new modules.Dataset(this);
        this.StateManagement = new modules.StateManagement(this);
        this.Dataset = new modules.Dataset(this);
    }
}


module.exports = Client;