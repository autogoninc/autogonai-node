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
     * Scatter Plots
     *
     * This function creates scatter plots for pairs of columns in a given input dataset. Scatter plots are a useful visualization tool for examining the relationship between two variables.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-visualization/scatter-plots-dp_scp}
     *
     * @returns {object} StateManagement Object
     */

    scatter_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_SCP";
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
     * Ordinary Plots
     *
     * This function creates ordinary line plots for pairs of columns in a given input dataset.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-visualization/ordinary-plots-dp_ord}
     *
     * @returns {object} StateManagement Object
     */

    ordinary_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_ORD";

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
     * Compare Scatter Plots
     *
     * This function compares scatter plots for pairs of columns in a given input dataset.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-visualization/ordinary-plots-dp_ord}
     *
     * @returns {object} StateManagement Object
     */

    compare_scatter_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_CSP";

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
     * Pie Plots
     *
     * This function creates pie plots for a given input dataset.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-visualization/pie-plots-dp_pie}
     *
     * @returns {object} StateManagement Object
     */

    pie_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_PIE";

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
     * Heatmap Plots
     *
     * This function creates heatmap plots for a given input dataset.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-visualization/heatmap-plots-dp_hmp}
     *
     * @returns {object} StateManagement Object
     */

    heatmap_plots(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_HMP";

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

module.exports = DataVisualization;
