"use strict";

// imports
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const API = require("./connector");
const blocks = require("./development");
const constants = require("./helpers/constants");
const modules = require("./core/modules"); // other APIS

const { flowObjects, handleRequestError } = require("./helpers/utils");

/**
 * @module Client
 */
class Client extends flowObjects(...Object.values(blocks))(API) {
  /**
   *
   * @param {String} apiKey Authentication key (refer to documentation)
   * {@link https://autogon-ai.gitbook.io/autogon-for-developers/autogon-engine/data-processing/data-input-dp_1}
   *
   * @param {object} options other parameters
   */
  constructor(apiKey, options = {}) {
    // if baseURL is not provided, use default
    options.baseURL ||= constants.BASE_URL;

    // initialize `API` class
    super({
      apiKey: apiKey,
      ...options,
    });
    this.apiKey = apiKey;
    this.options = options;

    // initialze Other APIs
    this.Dashboard = new modules.Dashboard(this);
    this.Project = new modules.Project(this);
    this.StateManagement = new modules.StateManagement(this);
    this.Dataset = new modules.Dataset(this);
    this.Qore = new modules.Qore(this);
  }

  upload(filePath) {
    const endpoint = "/engine/upload/";

    const form = new FormData();
    form.append("file", fs.createReadStream(filePath));

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(
      this.options.baseURL || constants.BASE_URL + endpoint,
      form,
      {
        headers,
      }
    ).then((res)=>res.data).catch(handleRequestError);
  }
}

// export `Client` class.
module.exports = Client;
