"use strict";

const constants = require("../helpers/constants");
const {handleRequestError} = require("../helpers/utils");
const { validateRequiredParameters } = require("../helpers/validation");

/**
 * Machine Learning endpoints
 * @module MachineLearning
 * @param {*} superclass
 */
const MachineLearning = (superclass) =>
  class extends superclass {

    machineLearningAPI(project_id,parent_id, block_id,functionCode,args){
      return this.sendRequest("POST", constants.ENGINE_ENDPOINT, {
        project_id,
        parent_id,
        block_id,
        function_code: functionCode,
        args,
      }).then((res)=>res.data).catch(handleRequestError);
    }
    /**
     * Simple Linear Regression
     *
     * This function models the relationship between two continuous variables. The objective is to predict the value of an output variable  based on the value of an input variable..
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/simple-linear-regression-ml_r_1}
     *
     * @returns {object} StateManagement Object
     */
    simple_linear_regression = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_R_1";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args);
    };
    /**
     * Simple Linear Regression Predict
     *
     * This function models the relationship between two continuous variables. The objective is to predict the value of an output variable  based on the value of an input variable..
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/simple-linear-regression-ml_r_1}
     *
     * @returns {object} StateManagement Object
     */
    simple_linear_regression_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_1_P";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     * Multiple Linear Regression
     *
     * This function models the relationship between more independent variables. The objective is to predict the value of an output variable  based on the value of input variables
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/multiple-linear-regression-ml_r_2}
     *
     * @returns {object} StateManagement Object
     */
    multiple_linear_regression = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_2";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     * Multiple Linear Regression Predict
     *
     * This function models the relationship between more independent variables. The objective is to predict the value of an output variable  based on the value of input variables
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/multiple-linear-regression-ml_r_2}
     *
     * @returns {object} StateManagement Object
     */
    multiple_linear_regression_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_2_P";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Polynomial Linear Regression
     *
     * This function uses the relationship between variables to find the best non-linear fit through the data points.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/polynomial-linear-regression-ml_r_3}
     *
     * @returns {object} StateManagement Object
     */
    polynomial_linear_regression = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_3";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Polynomial Linear Regression Predict
     *
     * This function uses the relationship between variables to find the best non-linear fit through the data points.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/polynomial-linear-regression-ml_r_3}
     *
     * @returns {object} StateManagement Object
     */
    polynomial_linear_regression_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_3_P";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args);
    };
    /**
     *  Support Vector Regression
     *
     * This function can be used for solving both linear and non-linear problems.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-regression-ml_r_4}
     *
     * @returns {object} StateManagement Object
     */
    support_vector_regression = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_4";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Support Vector Regression Predict
     *
     * This function can be used for solving both linear and non-linear problems.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-regression-ml_r_4}
     *
     * @returns {object} StateManagement Object
     */
    support_vector_regression_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_4_P";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Decision Tree Regression
     *
     * This function splits the data into smaller subsets while at the same time an associated decision rule is used to predict the target variable, built in the form of a tree structure.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-regression-ml_r_4}
     *
     * @returns {object} StateManagement Object
     */
    decision_tree_regression = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_R_5";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Decision Tree Regression Predict
     *
     * This function splits the data into smaller subsets while at the same time an associated decision rule is used to predict the target variable, built in the form of a tree structure.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-regression-ml_r_4}
     *
     * @returns {object} StateManagement Object
     */
    decision_tree_regression_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_5_P";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Random Forest Regression
     *
     * This function builds multiple decision trees and combines their outputs to make a final prediction.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-regression-ml_r_4}
     *
     * @returns {object} StateManagement Object
     */
    random_forest_regression = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_R_6";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };

    /**
     *  Random Forest Regression
     *
     * This function builds multiple decision trees and combines their outputs to make a final prediction.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-regression-ml_r_4}
     *
     * @returns {object} StateManagement Object
     */

    random_forest_regression_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_R_6_P";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };

    /// END OF REGRESSION

    /**
     * Logistic Regression
     *
     * This function performs analysis on a dataset and returns the predicted binary outcome based on the input independent variables.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@linkhttps://docs.autogon.ai/autogon-engine/machine-learning/logistic-regression-ml_cn_1}
     *
     * @returns {object} StateManagement Object
     */

    logistic_regression = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_1";

      // parameter validateion
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };

    /**
     * Logistic Regression Predict
     *
     * This function performs analysis on a dataset and returns the predicted binary outcome based on the input independent variables.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@linkhttps://docs.autogon.ai/autogon-engine/machine-learning/logistic-regression-ml_cn_1}
     *
     * @returns {object} StateManagement Object
     */

    logistic_regression_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_1_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };

    /**
     * Logistic Regression Metrics
     *
     * This function performs analysis on a dataset and returns the predicted binary outcome based on the input independent variables.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@linkhttps://docs.autogon.ai/autogon-engine/machine-learning/logistic-regression-ml_cn_1}
     *
     * @returns {object} StateManagement Object
     */

    logistic_regression_metrics = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_1_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  K_Nearest Neighbors
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/k-nearest-neighbors-knn-ml_cn_2}
     *
     * @returns {object} StateManagement Object
     */

    k_nearest_neighbors = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_2";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  K_Nearest Neighbors Predict
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/k-nearest-neighbors-knn-ml_cn_2}
     *
     * @returns {object} StateManagement Object
     */

    k_nearest_neighbors_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_2_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  K_Nearest Neighbors Metrics
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/k-nearest-neighbors-knn-ml_cn_2}
     *
     * @returns {object} StateManagement Object
     */

    k_nearest_neighbors_metrics = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_2_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Support Vector Machine
     *
     * This functionality creates a decision boundary based on the support vectors, and classifies new input data based on which side of the boundary it falls on.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-machine-ml_cn_3}
     *
     * @returns {object} StateManagement Object
     */

    support_vector_machine = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_3";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Support Vector Machine Predict
     *
     * This functionality creates a decision boundary based on the support vectors, and classifies new input data based on which side of the boundary it falls on.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-machine-ml_cn_3}
     *
     * @returns {object} StateManagement Object
     */
    support_vector_machine_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_3_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Support Vector Machine Metrics
     *
     * This functionality creates a decision boundary based on the support vectors, and classifies new input data based on which side of the boundary it falls on.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/support-vector-machine-ml_cn_3}
     *
     * @returns {object} StateManagement Object
     */
    support_vector_machine_metrics = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_3_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };

    /**
     *  Kernel SVM
     *
     * This functionality uses a kernel function to map the input data to a higher-dimensional space, where a linear decision boundary is created based on the support vectors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/kernel-svm-ml_cn_4}
     *
     * @returns {object} StateManagement Object
     */
    kernel_svm = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_4";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Kernel SVM Predict
     *
     * This functionality uses a kernel function to map the input data to a higher-dimensional space, where a linear decision boundary is created based on the support vectors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/kernel-svm-ml_cn_4}
     *
     * @returns {object} StateManagement Object
     */
    kernel_svm_predict = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_4_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Kernel SVM Metrics
     *
     * This functionality uses a kernel function to map the input data to a higher-dimensional space, where a linear decision boundary is created based on the support vectors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/kernel-svm-ml_cn_4}
     *
     * @returns {object} StateManagement Object
     */
    kernel_svm_metrics = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_4_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Naive Bayes
     *
     * This function uses the Bayes' theorem to calculate the probability of each class based on the frequency of the features in the training data, and classifies new input data based on highest probability
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/naive-bayes-ml_cn_5}
     *
     * @returns {object} StateManagement Object
     */

    naive_bayes = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_5";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };

    /**
     *  Naive Bayes  predict
     *
     * This function uses the Bayes' theorem to calculate the probability of each class based on the frequency of the features in the training data, and classifies new input data based on highest probability
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/naive-bayes-ml_cn_5}
     *
     * @returns {object} StateManagement Object
     */
    naive_bayes_predict = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_5_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Naive Bayes Metrics
     *
     * This function uses the Bayes' theorem to calculate the probability of each class based on the frequency of the features in the training data, and classifies new input data based on highest probability
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/naive-bayes-ml_cn_5}
     *
     * @returns {object} StateManagement Object
     */
    naive_bayes_metrics = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_5_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Decision Tree Classification
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/decision-tree-classification-ml_cn_6}
     *
     * @returns {object} StateManagement Object
     */
    decision_tree_classification = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_6";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Decision Tree Classification Predict
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/decision-tree-classification-ml_cn_6}
     *
     * @returns {object} StateManagement Object
     */
    decision_tree_classification_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_6_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     *  Decision Tree Classification Metrics
     *
     * This function finds the K number of training examples closest (nearest neighbors) to the input data and then classifying the input data based on the majority class of its nearest neighbors.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/decision-tree-classification-ml_cn_6}
     *
     * @returns {object} StateManagement Object
     */

    decision_tree_classification_metrics = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_6_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     * Random Forest Classification
     *
     * This function combines multiple decision trees and aggregates their results to make predictions.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/random-forest-classification-ml_cn_7}
     *
     * @returns {object} StateManagement Object
     */
    random_forest_classification = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_7";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args);
    };
    /**
     * Random Forest Classification Predict
     *
     * This function combines multiple decision trees and aggregates their results to make predictions.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/random-forest-classification-ml_cn_7}
     *
     * @returns {object} StateManagement Object
     */
    random_forest_classification_predict = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_7_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     * Random Forest Classification Metrics
     *
     * This function combines multiple decision trees and aggregates their results to make predictions.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/random-forest-classification-ml_cn_7}
     *
     * @returns {object} StateManagement Object
     */
    random_forest_classification_metrics = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_7_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };

    /// Random Forest Classification

    /**
     * Hierarchical Clustering
     *
     * Hierarchical Clustering groups similar data points into clusters by recursively merging the two closest clusters based on a distance metric.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/hierarchical-clustering-ml_cg_1}
     *
     * @returns {object} StateManagement Object
     */

    hierarchical_clustering = (projectId, parentId, blockId, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CN_7";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args);
    };

    /**
     * Hierarchical Clustering Predict
     *
     * Hierarchical Clustering groups similar data points into clusters by recursively merging the two closest clusters based on a distance metric.
     *
     * @param {int} project_id current project ID
     * @param {int} parent_id previous block ID
     * @param {int} block_id current block ID
     * @param {object} args block arguments (refer to documentation)
     *
     * {@link https://docs.autogon.ai/autogon-engine/machine-learning/hierarchical-clustering-ml_cg_1}
     *
     * @returns {object} StateManagement Object
     */

    hierarchical_clustering_predict = (
      projectId,
      parentId,
      blockId,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CN_7_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };

    /**
     * K-Means Clustering
     *
     * This function groups similar data points into K clusters by iteratively assigning each data point to the nearest center and updating the cluster centers based on the mean of the assigned data points.
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

    kmeans_clustering_find_clusters = (
      project_id,
      parent_id,
      block_id,
      args = {}
    ) => {
      // mandatory parameters
      const functionCode = "ML_CG_2_F";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     * K-Means Clustering
     *
     * This function groups similar data points into K clusters by iteratively assigning each data point to the nearest center and updating the cluster centers based on the mean of the assigned data points.
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
    kmeans_clustering = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CG_2";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args);
    };

    /**
     * K-Means Clustering Predict
     *
     * This function groups similar data points into K clusters by iteratively assigning each data point to the nearest center and updating the cluster centers based on the mean of the assigned data points.
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

    kmeans_clustering_predict = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "ML_CG_2_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args);
    };
    /**
     * XGBoost
     *
     * This function is based on gradient boosting that iteratively trains weak models while optimizing a regularized objective function to reduce overfitting.
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

    xgboost = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "MS_X";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     * XGBoost Predict
     *
     * This function is based on gradient boosting that iteratively trains weak models while optimizing a regularized objective function to reduce overfitting.
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

    xgboost_predict = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "MS_X_P";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
    /**
     * XGBoost Metrics
     *
     * This function is based on gradient boosting that iteratively trains weak models while optimizing a regularized objective function to reduce overfitting.
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

    xgboost_metrics = (project_id, parent_id, block_id, args = {}) => {
      // mandatory parameters
      const functionCode = "MS_X_M";

      // parameter validation
      validateRequiredParameters(functionCode, args);

      // send request
      return this.machineLearningAPI(project_id, parent_id, block_id,functionCode, args)
    };
  };

module.exports = MachineLearning;
