"use strict";

const { isUUID } = require("../helpers/validation")

class Dashboard {
    constructor(client) {
        this.client = client;
        this.endpoint = "/engine/dashboard/"
    }

    get() {
        return this.client.sendRequest(
            "GET",
            this.endpoint
        );
    }
}

class Project {
    constructor(client) {
        this.endpoint = "/engine/project/"
        this.client = client;
    }

    get(appId = null) {

        if (appId && isUUID(appId)) {
            this.endpoint = `/engine/project/${appId}`;
        }

        return this.client.sendRequest(
            "GET",
            this.endpoint
        );
    }

    create(name, description) {
        return this.client.sendRequest(
            "POST",
            this.endpoint, {
            project_name: name,
            project_description: description
        });
    }

    delete(appId) {
        if (isUUID(appId)) {
            this.endpoint += appId;
        } else {
            return "Incorrect UUID";
        }

        return this.client.sendRequest(
            "DELETE",
            this.endpoint
        );
    }
}


class StateManagement {
    constructor(client) {
        this.client = client;
        this.endpoint = "/engine/statemanagement"
    }

    get(blockId, projectId) {

        this.endpoint = `${this.endpoint}/${blockId}/?project=${projectId}`;

        return this.client.sendRequest(
            "GET",
            this.endpoint
        )
    }
}

class Dataset {
    constructor(client) {
        this.client = client;
        this.endpoint = "/engine/datasets/"
    }

    get(id) {

        if (id) {
            this.endpoint = `${this.endpoint}${id}/`;
        }

        return this.client.sendRequest(
            "GET",
            this.endpoint
        );
    }

    create() {

    }

    // delete() {

    // }
}

module.exports = {
    Dashboard,
    Project,
    StateManagement,
    Dataset
};