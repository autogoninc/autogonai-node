"use strict";

const constants = require("../helpers/constants");
const { validateRequiredParameters } = require("../helpers/validation");

/**
 * Data Visualization endpoints
 * @module DataVisualization
 * @param {*} superclass
 */
const DataVisualization = (superclass) =>
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
    scatter_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_SCP";

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
    ordinary_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_ORD";

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
    compare_scatter_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_CSP";

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
    pie_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_PIE";

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
    heatmap_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_HMP";

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
