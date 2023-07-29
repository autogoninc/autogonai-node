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
    artificial_neural_network_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_ANN_S_I";

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
