"use strict";

const { isUUID } = require("../helpers/validation");

class Dashboard {
  constructor(client) {
    this.client = client;
    this.endpoint = "/engine/dashboard/";
  }

  get() {
    return this.client.sendRequest("GET", this.endpoint);
  }
}

class Project {
  constructor(client) {
    this.endpoint = "/engine/project/";
    this.client = client;
  }

  get(app_id) {
    if (app_id && isUUID(app_id)) {
      this.endpoint = `${this.endpoint}${app_id}`;
    }

    return this.client.sendRequest("GET", this.endpoint);
  }

  create(project_name, project_description) {
    return this.client.sendRequest("POST", this.endpoint, {
      project_name,
      project_description,
    });
  }

  delete(app_id) {
    if (isUUID(app_id)) {
      this.endpoint += app_id;
    } else {
      return "Incorrect UUID";
    }

    return this.client.sendRequest("DELETE", this.endpoint);
  }
}

class StateManagement {
  constructor(client) {
    this.client = client;
    this.endpoint = "/engine/statemanagement/";
  }

  get(app_id) {
    if (app_id && isUUID(app_id)) {
      this.endpoint = `${this.endpoint}/${app_id}/`;
    }

    return this.client.sendRequest("GET", this.endpoint);
  }

  delete(id) {
    this.endpoint = `${this.endpoint}/${id}/`;

    return this.client.sendRequest("DELETE", this.endpoint);
  }
}

class Dataset {
  constructor(client) {
    this.client = client;
    this.endpoint = "/engine/datasets/";
  }

  get(id = null) {
    if (id) {
      this.endpoint = `${this.endpoint}/${id}`;
    }

    return this.client.sendRequest("GET", this.endpoint);
  }

  create(dataset_name, dataset_description, dataset_type, dataset_url) {
    dataset_type = dataset_type.toLowerCase();

    // if (dataset_type !== "csv" || dataset_type !== "json") {
    //     return "Unsupported file type";
    // }

    return this.client.sendRequest("POST", this.endpoint, {
      dataset_name,
      dataset_description,
      dataset_type,
      dataset_url,
    });
  }

  update(id, dataset_name, dataset_description) {
    if (id) {
      this.endpoint = `${this.endpoint}/${id}`;
    }
    const body = {
      dataset_name: dataset_name,
      dataset_description: dataset_description,
    };
    return this.client.sendRequest("UPDATE", this.endpoint, body);
  }
  delete(id) {
    if (id) {
      this.endpoint = `${this.endpoint}/${id}`;
    }
    return this.client.sendRequest("DELETE", this.endpoint);
  }
}

module.exports = {
  Dashboard,
  Project,
  StateManagement,
  Dataset,
};
