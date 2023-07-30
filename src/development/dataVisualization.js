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
