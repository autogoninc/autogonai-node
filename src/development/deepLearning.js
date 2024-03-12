"use strict";

const constants = require("../helpers/constants");
const { validateRequiredParameters } = require("../helpers/validation");
const {handleRequestError} = require("../helpers/utils");
/**
 * Deep Learning endpoints
 * @module DeepLearning
 * @param {*} superclass
 */
const DeepLearning = (superclass) =>
  class extends superclass {

    deepLearningAPI(project_id,parent_id, block_id,functionCode,args){
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      }).then((res)=>res.data).catch(handleRequestError);
    }

    /**
     * Artificial Neural Network
     *
     * This function creates and uses a model consisting of layers of interconnected nodes (neurons) that process input data and produce output predictions.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/k-means-clustering-ml_cg_2}
     *
     * @returns {object} StateManagement Object
     */

    artificial_neural_network_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_ANN_S_I";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args,);
    }
    /**
     * Artificial Neural Network
     *
     * This function creates and uses a model consisting of layers of interconnected nodes (neurons) that process input data and produce output predictions.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/artificial-neural-network-dl_ann}
     *
     * @returns {object} StateManagement Object
     */

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
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args,);;
    }
    /**
     * Artificial Neural Network
     *
     * This function creates and uses a model consisting of layers of interconnected nodes (neurons) that process input data and produce output predictions.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/artificial-neural-network-dl_ann}
     *
     * @returns {object} StateManagement Object
     */

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
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args,);;
    }
    /**
     * Artificial Neural Network
     *
     * This function creates and uses a model consisting of layers of interconnected nodes (neurons) that process input data and produce output predictions.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/artificial-neural-network-dl_ann}
     *
     * @returns {object} StateManagement Object
     */

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
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args,);
    }
    /**
     * Self Organizing Maps
     *
     * This function creates self organizing maps used for data clustering.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/self-organizing-maps-dl_som}
     *
     * @returns {object} StateManagement Object
     */

    organizing_map_init(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_SOM_I";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args,);
    }
    /**
     * Self Organizing Maps
     *
     * This function creates self organizing maps used for data clustering.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/self-organizing-maps-dl_som}
     *
     * @returns {object} StateManagement Object
     */

    organizing_map_train(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_SOM_T";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args,);;
    }
    /**
     * Self Organizing Maps
     *
     * This function creates self organizing maps used for data clustering.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/self-organizing-maps-dl_som}
     *
     * @returns {object} StateManagement Object
     */

    organizing_map_evaluate(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_SOM_E";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args,);;
    }
    /**
     * Self Organizing Maps
     *
     * This function creates self organizing maps used for data clustering.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/self-organizing-maps-dl_som}
     *
     * @returns {object} StateManagement Object
     */

    organizing_map_predict(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DL_SOM_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args,);;
    }
    /**
     * Restricted Boltzmann Machine
     *
     * This function creates a Restricted Boltzmann Machine used for dimensionality reduction.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/restricted-boltzmann-machine-dl_rbm}
     *
     * @returns {object} StateManagement Object
     */

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
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }
    /**
     * Restricted Boltzmann Machine
     *
     * This function creates a Restricted Boltzmann Machine used for dimensionality reduction.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/restricted-boltzmann-machine-dl_rbm}
     *
     * @returns {object} StateManagement Object
     */

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
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }
    /**
     * Restricted Boltzmann Machine
     *
     * This function creates a Restricted Boltzmann Machine used for dimensionality reduction.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/restricted-boltzmann-machine-dl_rbm}
     *
     * @returns {object} StateManagement Object
     */

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
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args);;
    }
    /**
     * Restricted Boltzmann Machine
     *
     * This function creates a Restricted Boltzmann Machine used for dimensionality reduction.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/deep-learning/restricted-boltzmann-machine-dl_rbm}
     *
     * @returns {object} StateManagement Object
     */

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
      return this.deepLearningAPI(project_id,parent_id,block_id,functionCode,args);
    }
  };

module.exports = DeepLearning;
