"use strict";

const constants = require("../helpers/constants");
const { validateRequiredParameters } = require("../helpers/validation");

/**
 * Automated DeepLearning endpoints
 * @module AutomatedDeepLearning
 * @param {*} superclass
 */
const AutomatedDeepLearning = (superclass) =>
  class extends superclass {
    auto_image_classifier_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMC_I";
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
    auto_image_classifier_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMC_T";
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
    auto_image_regressor_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMR";
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
    auto_image_regressor_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMR_T";
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
    auto_text_classifier_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXC_I";
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
    auto_text_classifier_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXC_T";

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
    auto_text_regressor_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXR_I";
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
    auto_text_regressor_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXR_T";
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
    auto_structured_data_classifier_init(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDC_I";

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
    auto_structured_data_classifier_train(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDC_T";

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
    auto_structured_data_regressor_init(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDR_I";

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
    auto_structured_data_regressor_train(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDR_T";

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

module.exports = AutomatedDeepLearning;
