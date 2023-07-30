// Column AsType
const Client = require("./src/client");

let client = new Client(process.env.AUTOGON_API_KEY);

projectId = 41;
parentId = 9;
blockId = 10;

dataInput = (await client.columns_astype(projectId, parentId, blockId, {
    astype: "int32",
    columns: [0, 5, 7]
})).data;


// Logistic Regression Predict
const Client = require("./src/client");

const client = new Client(process.env.AUTOGON_API_KEY);

projectId = 1;
parentId = 8;
blockId = 9;


logisticRegression = (await client.logistic_regression_predict(projectId, parentId, blockId, {
    model_name: "LogisticModel",
    test_data: null
})).data
