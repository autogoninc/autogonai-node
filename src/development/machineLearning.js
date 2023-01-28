/**
 * Machine Learning endpoints
 * @module MachineLearning 
 * @param {*} superclass
 */

const MachineLearning = superclass => class extends superclass {
    simple_linear_regression = () => {
        functionCode = "ML_R_1";
        return this.sendRequest();
    }

    multiple_linear_regression = () => {
        functionCode = "ML_R_2";
        return this.sendRequest();
    }

    polynomial_linear_regression = () => {
        functionCode = "ML_R_3";
        return this.sendRequest();
    }

    support_vector_regression = () => {
        functionCode = "ML_R_4";
        return this.sendRequest();
    }

    decision_tree_regression = () => {
        functionCode = "ML_R_5";
        return this.sendRequest();
    }

    random_forest_regression = () => {
        functionCode = "ML_R_6";
        return this.sendRequest();
    }
}

module.exports = MachineLearning;