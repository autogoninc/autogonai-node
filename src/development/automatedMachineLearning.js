"use strict";

const constants = require("../helpers/constants")
const { validateRequiredParameters, } = require("../helpers/validation")

const AutoMachineLearning = superclass => class extends superclass {
    
    auto_regression(project_id, parent_id, block_id, args = {}) {

        // mandatory parameters
        const functionCode = "AUTO_R_1";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id,
            parent_id,
            block_id,
            function_code: functionCode,
            args
        });
    }

    auto_regression_predict(project_id, parent_id, block_id, args = {}) {

        // mandatory parameters
        const functionCode = "AUTO_R_1_P";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id,
            parent_id,
            block_id,
            function_code: functionCode,
            args
        });
    }

    auto_regression_metrics(project_id, parent_id, block_id, args = {}) {

        // mandatory parameters
        const functionCode = "AUTO_R_1_M";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id,
            parent_id,
            block_id,
            function_code: functionCode,
            args
        });
    }

    auto_classification(project_id, parent_id, block_id, args = {}) {

        // mandatory parameters
        const functionCode = "AUTO_CN_1";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id,
            parent_id,
            block_id,
            function_code: functionCode,
            args
        });
    }

    auto_classification_predict(project_id, parent_id, block_id, args = {}) {

        // mandatory parameters
        const functionCode = "AUTO_CN_1_P";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id,
            parent_id,
            block_id,
            function_code: functionCode,
            args
        });
    }

    auto_classification_metrics(project_id, parent_id, block_id, args = {}) {

        // mandatory parameters
        const functionCode = "AUTO_CN_1_M";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id,
            parent_id,
            block_id,
            function_code: functionCode,
            args
        });
    }
}

module.exports = AutoMachineLearning;