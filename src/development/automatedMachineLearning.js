"use strict";

const constants = require("../helpers/constants");
const { handleRequestError } = require("../helpers/utils");
const { validateRequiredParameters } = require("../helpers/validation");

const AutoMachineLearning = (superclass) =>
  class extends superclass {
/**
 * autoMachineLearningAPI
 *
 * This method sends a request to the AutoGon engine to perform automated machine learning tasks.
 *
 * @param {int} project_id - The current project ID.
 * @param {int} parent_id - The previous block ID.
 * @param {int} block_id - The current block ID.
 * @param {string} functionCode - The function code for the specific task.
 * @param {object} args - The block arguments (refer to documentation).
 *
 * @returns {object} - The StateManagement Object.
 */
    autoMachineLearningAPI(project_id,parent_id, block_id,functionCode,args){
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      }).then((res)=>res.data).catch(handleRequestError);
    }
    /**
     * AutoMachineLearnin
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-machine-learning/autoregression-auto_r_1}
     *
     * @returns {object} StateManagement Object
     */

    auto_regression(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "AUTO_R_1";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.autoMachineLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }
    /**
     * AutoRegression
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-machine-learning/autoregression-auto_r_1}
     *
     * @returns {object} StateManagement Object
     */
    auto_regression_predict(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "AUTO_R_1_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.autoMachineLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }

    /**
     * AutoRegression
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-machine-learning/autoregression-auto_r_1}
     *
     * @returns {object} StateManagement Object
     */
    auto_regression_metrics(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "AUTO_R_1_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.autoMachineLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }

    /**
     * AutoClassification
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-machine-learning/autoclassification-auto_cn_1}
     *
     * @returns {object} StateManagement Object
     */
    auto_classification(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "AUTO_CN_1";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.autoMachineLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }

    /**
     * AutoClassification
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-machine-learning/autoclassification-auto_cn_1}
     *
     * @returns {object} StateManagement Object
     */
    auto_classification_predict(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "AUTO_CN_1_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.autoMachineLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }
    /**
     * AutoClassification
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/automated-machine-learning/autoclassification-auto_cn_1}
     *
     * @returns {object} StateManagement Object
     */
    auto_classification_metrics(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "AUTO_CN_1_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.autoMachineLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }
  };

module.exports = AutoMachineLearning;
