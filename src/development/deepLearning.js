"use strict";

const constants = require("../helpers/constants");
const { validateRequiredParameters } = require("../helpers/validation");

/**
 * Deep Learning endpoints
 * @module DeepLearning
 * @param {*} superclass
 */
const DeepLearning = (superclass) =>
  class extends superclass {
    /**
     * Data Input
     *
     * Specify the data sources, this functionality can take database connection, CSV or JSON files
     *
     * @param {int} project_id current project's ID
     * @param {null} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://autogon-ai.gitbook.io/autogon-for-developers/autogon-engine/data-processing/data-input-dp_1}
     *
     * @returns {object} StateManagement Object
     */
    artificial_neural_network_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_ANN_S_I";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    artificial_neural_network_train(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "DL_ANN_T";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    artificial_neural_network_evaluate(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "DL_ANN_E";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    artificial_neural_network_predict(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "DL_ANN_P";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    organizing_map_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_SOM_I";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    organizing_map_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_SOM_T";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    organizing_map_evaluate(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_SOM_E";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    organizing_map_predict(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_SOM_P";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    restricted_boltzmann_machine_init(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "DL_RBM_I";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    restricted_boltzmann_machine_train(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "DL_RBM_T";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    restricted_boltzmann_machine_evaluate(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "DL_RBM_E";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
    restricted_boltzmann_machine_predict(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "DL_RBM_P";

      // these parameters are compulsory for this block
      parent_id = null;
      block_id = 1;

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      });
    }
  };

module.exports = DeepLearning;
