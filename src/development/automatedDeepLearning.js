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
     * Auto Image Classification
     *
     * This function creates an Automated Image classifying model.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-image-classification-a_dl_imc}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Auto Image Classification
     *
     * This function creates an Automated Image classifying model.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-image-classification-a_dl_imc}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Auto Image Regression
     *
     * This function creates an Automated Image regression model.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-image-regression-a_dl_imr}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Auto Image Regression
     *
     * This function creates an Automated Image regression model.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-image-regression-a_dl_imr}
     *
     * @returns {object} StateManagement Object
     */
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

    /**
     * Auto Text Classification
     *
     * This function creates an Automated Text classifying model
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-text-classification-a_dl_txc}
     *
     * @returns {object} StateManagement Object
     */

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
    /**
     * Auto Text Classification
     *
     * This function creates an Automated Text classifying model
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-text-classification-a_dl_txc}
     *
     * @returns {object} StateManagement Object
     */

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
    /**
     * Auto Text Regression
     *
     * This function creates an Automated Text regression model
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-text-regression-a_dl_txr}
     *
     * @returns {object} StateManagement Object
     */

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
    /**
     * Auto Text Regression
     *
     * This function creates an Automated Text regression model
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-text-regression-a_dl_txr}
     *
     * @returns {object} StateManagement Object
     */

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
    /**
     * Auto Structured Data Classification
     *
     * This function creates an Automated Structured Data classifying model
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-structured-data-classification-a_dl_sdc}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Auto Structured Data Classification
     *
     * This function creates an Automated Structured Data classifying model
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-structured-data-classification-a_dl_sdc}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Auto Structured Data Regression
     *
     * This function creates an Automated Structured Data regression model
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@linkhttps://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-structured-data-regression-a_dl_sdr}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Auto Structured Data Regression
     *
     * This function creates an Automated Structured Data regression model
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@linkhttps://docs.autogon.ai/autogon-engine/automated-deep-learning/auto-structured-data-regression-a_dl_sdr}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * General AutoDL Blocks
     *
     * This function loads and uses pre-trained AutoDL models to perform actions such as model evaluation and value prediction.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@linkhttps://docs.autogon.ai/autogon-engine-studio/automated-deep-learning/general-autodl-blocks-a_dl_all}
     *
     * @returns {object} StateManagement Object
     */
    automated_deep_learning_evaluate(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_ALL_E";

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
    automated_deep_learning_predict(
      project_id,
      parent_id,
      block_id,
      args = {}
    ) {
      // mandatory parameters
      const functionCode = "A_DL_ALL_P";

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
