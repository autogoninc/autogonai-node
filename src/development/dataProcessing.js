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
    /**
     * Missing Data
     *
     * This functionality handles missing data using various techniques. e.g mean, mode and more.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/missing-data-dp_2}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Data Encoding
     *
     * This functionality converts data to a recognizable format through encoding. Supported techniques including, but are not limited to, one-hot, label and categorical encoding.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/data-encoding-dp_3}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Data Split
     *
     * This functionality splits data into two subsets: a training set and a test set. The training set is used to train a model, while the test set is used to evaluate its performance.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/data-split-dp_4}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Feature Scaling
     *
     * This functionality normalizes the range of values for different features in the dataset.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/data-split-dp_4}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Drop Columns
     *
     * This functionality drops specified multiple columns on the X and Y columns.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/drop-columns-dp_6}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Time Stepper
     *
     * This functionality enables you to transform your data into a time series format.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/time-stepper-dp_7}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     *  Feature Sampling
     *
     * This functionality samples a dataset into X and Y features.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/feature-sampling-dp_fsp}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     *  Cast Columns
     *
     * This functionality enables you to transform your data into a time series format.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/cast-columns-dp_cst}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     *  Reshape Array
     *
     * This function takes an input array of data and reshapes it into a time series format. The resulting time series data can be used for time-based analysis, modeling, and forecasting.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/reshape-array-dp_rsh}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Column Astype
     *
     * This function casts a column to a specified datatype.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/column-astype-dp_asp}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Show Duplicates
     *
     * This function shows duplicates
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/show-duplicates-dp_sdc}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Drop Duplicates
     *
     * This function drops duplicated rows.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/drop-duplicates-dp_drd}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Scalar to Ndarray
     *
     * This function "listifies" the scalar value
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/scalar-to-ndarray-dp_stn}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Dataset Info
     *
     * This function shows dataset info.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/dataset-info-dp_inf}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Dataset Correlations
     *
     * This function shows dataset correlations.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/dataset-correlations-dp_crr}
     *
     * @returns {object} StateManagement Object
     */
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
    /**
     * Dataset Description
     *
     * This function shows dataset descriptions.
     *
     * @param {int} project_id current project's ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/data-processing/dataset-description-dp_dsc}
     *
     * @returns {object} StateManagement Object
     */
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
