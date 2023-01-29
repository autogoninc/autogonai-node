"use strict";

const constants = require("../helpers/constants")
const { validateRequiredParameters } = require("../helpers/validation");

/**
 * Machine Learning endpoints
 * @module MachineLearning 
 * @param {*} superclass
 */

const MachineLearning = superclass => class extends superclass {

    /**
     * Simple Linear Regression
     * 
     * This function models the relationship between two continuous variables. The objective is to predict the value of an output variable  based on the value of an input variable.
     * 
     * @param {int} projectId current project ID
     * @param {int} parentId previous block ID
     * @param {int} blockId current block ID
     * @param {object} args block arguments (refer to documentation)
     * 
     * {@link https://autogon-ai.gitbook.io/autogon-for-developers/autogon-engine/data-processing/data-input-dp_1}
     * 
     * @returns {object} StateManagement Object
     */
    simple_linear_regression = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        const functionCode = "ML_R_1";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id: projectId,
            parent_id: parentId,
            block_id: blockId,
            function_code: functionCode,
            args
        });
    }

    multiple_linear_regression = () => {
        functionCode = "ML_R_2";
        return this.sendRequest();
    }

    polynomial_linear_regression = () => {
        functionCode = "ML_R_3";
        return this.sendRequest();
    }

    support_vector_regression = () => {
        functionCode = "ML_R_4";
        return this.sendRequest();
    }

    decision_tree_regression = () => {
        functionCode = "ML_R_5";
        return this.sendRequest();
    }

    random_forest_regression = () => {
        functionCode = "ML_R_6";
        return this.sendRequest();
    }
}

module.exports = MachineLearning;