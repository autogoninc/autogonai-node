"use strict";

const constants = require("../helpers/constants")
const { validateRequiredParameters, } = require("../helpers/validation")

/**
 * Data Processing endpoints
 * @module DataProcessing
 * @param {*} superclass 
 */
const DataProcessing = superclass => class extends superclass {

    /**
     * Data Input
     * 
     * Specify the data sources, this functionality can take database connection, CSV or JSON files
     * 
     * @param {int} projectId current project's ID
     * @param {null} parentId previous block ID
     * @param {int} blockId current block ID
     * @param {object} args block arguments (refer to documentation)
     * 
     * {@link https://autogon-ai.gitbook.io/autogon-for-developers/autogon-engine/data-processing/data-input-dp_1}
     * 
     * @returns {object} StateManagement Object
     */
    data_input(projectId, parentId, blockId, args = {}) {

        // mandatory parameters
        const functionCode = "DP_1";

        // these parameters are compulsory for this block
        parentId = null;
        blockId = 1;

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

module.exports = DataProcessing;