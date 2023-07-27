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
    auto_image_classifier_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMC_I";

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
    auto_image_classifier_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMC_T";

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
    auto_image_classifier_evaluate(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMC_E";

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
    auto_image_classifier_predict(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMC_P";

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
    auto_image_regressor_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMR";

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
    auto_image_regressor_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMR_T";

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
    auto_image_regressor_evaluate(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMR_E";

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
    auto_image_regressor_predict(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_IMR_P";

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
    auto_text_classifier_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXC_I";

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
    auto_text_classifier_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXC_T";

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
    auto_text_classifier_evaluate(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXC_E";

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
    auto_text_classifier_predict(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXC_P";

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
    auto_text_regressor_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXR_I";

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
    auto_text_regressor_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXR_T";

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
    auto_text_regressor_evaluate(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXR_E";

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
    auto_text_regressor_predict(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "A_DL_TXR_P";

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
    auto_structured_data_classifier_init(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDC_I";

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
    auto_structured_data_classifier_train(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDC_T";

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
    auto_structured_data_classifier_evaluate(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDC_E";

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
    auto_structured_data_classifier_predict(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDC_P";

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
    auto_structured_data_regressor_init(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDR_I";

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
    auto_structured_data_regressor_train(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDR_T";

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
    auto_structured_data_regressor_evaluate(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDR_E";

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
    auto_structured_data_regressor_predict(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_SDR_P";

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

module.exports = AutomatedDeepLearning;
