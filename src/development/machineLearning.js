const simple_linear_regression = () => {
    functionCode = "ML_R_1";
    return this.sendRequest();
}

const multiple_linear_regression = () => {
    functionCode = "ML_R_2";
    return this.sendRequest();
}

const polynomial_linear_regression = () => {
    functionCode = "ML_R_3";
    return this.sendRequest();
}

const support_vector_regression = () => {
    functionCode = "ML_R_4";
    return this.sendRequest();
}

const decision_tree_regression = () => {
    functionCode = "ML_R_5";
    return this.sendRequest();
}

const random_forest_regression = () => {
    functionCode = "ML_R_6";
    return this.sendRequest();
}

module.exports = {
    simple_linear_regression,
    multiple_linear_regression,
    polynomial_linear_regression,
    support_vector_regression,
    decision_tree_regression,
    random_forest_regression,
}