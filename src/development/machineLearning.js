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
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     * 
     * {@link https://autogon-ai.gitbook.io/autogon-for-developers/autogon-engine/data-processing/data-input-dp_1}
     * 
     * @returns {object} StateManagement Object
     */
    simple_linear_regression = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_1";

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

    simple_linear_regression_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_1_P";

        // parameter validateion
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

    multiple_linear_regression = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_2";

        // parameter validateion
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

    multiple_linear_regression_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_2_P";

        // parameter validateion
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

    polynomial_linear_regression = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_3";

        // parameter validateion
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

    polynomial_linear_regression_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_3_P";

        // parameter validateion
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

    support_vector_regression = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_4";

        // parameter validateion
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

    support_vector_regression_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_4_P";

        // parameter validateion
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

    decision_tree_regression = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_5";

        // parameter validateion
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

    decision_tree_regression_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_5_P";

        // parameter validateion
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

    random_forest_regression = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_6";

        // parameter validateion
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

    random_forest_regression_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_R_6_P";

        // parameter validateion
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

    /// END OF REGRESSION

    logistic_regression = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_1";

        // parameter validateion
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


    logistic_regression_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_1_P";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id: project_id,
            parent_id, parent_id,
            block_id, block_id,
            function_code: functionCode,
            args
        });
    }


    logistic_regression_metrics = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_1_M";

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

    k_nearest_neighbors = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_2";

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

    k_nearest_neighbors_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_2_P";

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

    k_nearest_neighbors_metrics = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_2_M";

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

    support_vector_machine = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_3";

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

    support_vector_machine_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_3_P";

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

    support_vector_machine_metrics = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_3_M";

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

    kernel_svm = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_4";

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

    kernel_svm_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_4_P";

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

    kernel_svm_metrics = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_4_M";

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

    naive_bayes = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_5";

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

    naive_bayes_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_5_P";

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

    naive_bayes_metrics = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_5_M";

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

    decision_tree_classification = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_6";

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

    decision_tree_classification_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_6_P";

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

    decision_tree_classification_metrics = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_6_M";

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

    random_forest_classification = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_7";

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

    random_forest_classification_predict = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_7_P";

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

    random_forest_classification_metrics = (project_id, parent_id, block_id, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_7_M";

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

    /// END OF REGRESSION

    logistic_regression = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_1";

        // parameter validateion
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


    logistic_regression_predict = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_1_P";

        // parameter validation
        validateRequiredParameters(functionCode, args);

        // send request
        return this.sendRequest(
            "POST",
            constants.ENGINE_ENDPOINT, {
            project_id: projectId,
            parent_id, parentId,
            block_id, blockId,
            function_code: functionCode,
            args
        });
    }


    logistic_regression_metrics = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_1_M";

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

    k_nearest_neighbors = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_2";

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

    k_nearest_neighbors_predict = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_2_P";

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

    k_nearest_neighbors_metrics = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_2_M";

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

    support_vector_machine = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_3";

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

    support_vector_machine_predict = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_3_P";

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

    support_vector_machine_metrics = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_3_M";

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

    kernel_svm = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_4";

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

    kernel_svm_predict = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_4_P";

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

    kernel_svm_metrics = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_4_M";

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

    naive_bayes = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_5";

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

    naive_bayes_predict = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_5_P";

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

    naive_bayes_metrics = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_5_M";

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

    decision_tree_classification = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_6";

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

    decision_tree_classification_predict = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_6_P";

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

    decision_tree_classification_metrics = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_6_M";

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

    random_forest_classification = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_7";

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

    random_forest_classification_predict = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_7_P";

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

    random_forest_classification_metrics = (projectId, parentId, blockId, args = {}) => {

        // mandatory parameters
        functionCode = "ML_CN_7_M";

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
}

module.exports = MachineLearning;