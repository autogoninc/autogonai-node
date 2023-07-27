"use strict";

const constants = require("../helpers/constants");
const { validateRequiredParameters } = require("../helpers/validation");

/**
 * Data Processing endpoints
 * @module DataProcessing
 * @param {*} superclass
 */
const DataProcessing = (superclass) =>
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
    data_input(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_1";

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

    missing_data(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_2";

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

    data_encoding(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_3";

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

    data_split(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_4";

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

    feature_scaling(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_5";

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

    drop_columns(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_6";

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

    time_stepper(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_7";

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
    feature_sampling(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_FSP";

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

    cast_columns(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_CST";

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
    reshape_array(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_RSH";

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
    column_astype(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_ASP";

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

    show_duplicates(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_SDC";

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
    drop_duplicates(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_DRD";

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

    scalar_to_ndarray(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_STN";

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
    dataset_info(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_INF";

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
    dataset_correlations(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_CRR";

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
    dataset_description(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_DSC";

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
    dataset_datatypes(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_DTY";

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
    dataset_uniques(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_UNQ";

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
    dataset_stats_counts(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_STC";

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
    principal_component_analysis(project_id, parent_id, block_id, args = {}) {
      // mandatory parameters
      const functionCode = "DP_PCA";

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

    automated_data_preprocessing(project_id, parent_id, block_id, args = {}) {
      // Automated Data Prepcoessing goes in here

      const functionCode = "DP_ADP";
    }

    dataset_datatypes(project_id, parent_id, block_id, args = {}) {
      // define function code
      const functionCode = "DP_DTY";

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

module.exports = DataProcessing;
