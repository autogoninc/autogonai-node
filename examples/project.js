const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();

const Client = require("../src/client");

const client = new Client(process.env.AUTOGON_API_KEY);

async function main() {
  // creating the project

  //   const project = (
  //     await client.Project.create("Loan_Prediction_Test", "Testing the sdk")
  //   ).data;

  // deleting the project
  //   const projectDelete = await client.Project.delete(
  //     "4471d70f-ae40-405b-a72c-fae789e6c8f6"
  //   );

  // displaying All the Project
  const getAllProject = await client.Project.get();
  console.log(getAllProject.data.results[0]);
  const projectData = getAllProject.data.results[0];

  const dataInput = await client.data_input(projectData.id, 0, 1, {
    dburl:
      "https://raw.githubusercontent.com/autogoninc/autogon-public-datasets/main/loan-prediction/loan-prediction.csv",
    file_type: "csv",
  });
  // console.log(dataInput);

  const dropColumns = await client.drop_columns(projectData.id, 1, 1, {
    d_columns: [0],
  });
  const missingData = await client.missing_data(projectData.id, 2, 3, {
    strategy_value: "most_frequent",
  });
  // // console.log(missingData);
  const dataDecode = await client.data_encoding(projectData.id, 3, 4, {
    model_name: "dataEncoding",
    dataset: {
      encode: true,
      encoding_type: "label",
      remainder: "passthrough",
      index: 0,
    },
    xvalue: {},
    yvalue: {},
    // load_name: "testing",
  });
  // console.log(dataDecode);
  const dataDecode2 = await client.data_encoding(projectData.id, 4, 5, {
    model_name: "dataEncoding",
    dataset: {
      encode: true,
      encoding_type: "label",
      remainder: "passthrough",
      index: 1,
    },
    xvalue: {},
    yvalue: {},
    // load_name: "testing",
  });
  // console.log(dataDecode2);
  const dataDecode3 = await client.data_encoding(projectData.id, 5, 6, {
    model_name: "dataEncoding",
    dataset: {
      encode: true,
      encoding_type: "label",
      remainder: "passthrough",
      index: 2,
    },
    xvalue: {},
    yvalue: {},
    // load_name: "testing",
  });

  // console.log(dataDecode3);

  const dataDecode4 = (
    await client.data_encoding(projectData.id, 6, 7, {
      model_name: "dataEncoding",
      dataset: {
        encode: true,
        encoding_type: "label",
        remainder: "passthrough",
        index: 3,
      },
      xvalue: {},
      yvalue: {},
      // load_name: "testing",
    })
  ).data;
  const dataDecode5 = (
    await client.data_encoding(
      projectData.id,
      dataDecode4.message.block_id,
      dataDecode4.message.block_id + 1,
      {
        model_name: "dataEncoding",
        dataset: {
          encode: true,
          encoding_type: "label",
          remainder: "passthrough",
          index: 4,
        },
        xvalue: {},
        yvalue: {},
        // load_name: "testing",
      }
    )
  ).data;
  const dataDecode6 = (
    await client.data_encoding(
      projectData.id,
      dataDecode5.message.block_id,
      dataDecode5.message.block_id + 1,
      {
        model_name: "dataEncoding",
        dataset: {
          encode: true,
          encoding_type: "label",
          remainder: "passthrough",
          index: 10,
        },
        xvalue: {},
        yvalue: {},
        // load_name: "testing",
      }
    )
  ).data;
  const dataDecode7 = (
    await client.data_encoding(
      projectData.id,
      dataDecode6.message.block_id,
      dataDecode6.message.block_id + 1,
      {
        model_name: "dataEncoding",
        dataset: {
          encode: true,
          encoding_type: "label",
          remainder: "passthrough",
          index: 11,
        },
        xvalue: {},
        yvalue: {},
        // load_name: "testing",
      }
    )
  ).data;
  const featureSampling = (
    await client.feature_sampling(
      projectData.id,
      dataDecode7.message.block_id,
      dataDecode7.message.block_id + 1,
      {
        x_boundaries: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y_boundaries: [11],
      }
    )
  ).data;

  const dataSplit = (
    await client.data_split(
      projectData.id,
      featureSampling.message.block_id,
      featureSampling.message.block_id + 1,
      {
        test_size: 0.3,
      }
    )
  ).data;

  const autoStructDataClasInit = (
    await client.auto_structured_data_classifier_init(
      projectData.id,
      dataSplit.message.block_id,
      dataSplit.message.block_id + 1,
      {
        hyp_params: {
          max_trials: 10,
        },
      }
    )
  ).data;

  const autoStructuredDataClassifierTrain = (
    await client.auto_structured_data_classifier_train(
      projectData.id,
      autoStructDataClasInit.message.block_id,
      autoStructDataClasInit.message.block_id + 1,
      {
        model_name: "loan",
        hyp_params: {
          epochs: 10,
        },
      }
    )
  ).data;
  const autDLEvaluate = (
    await client.automated_deep_learning_evaluate(
      projectData.id,
      autoStructuredDataClassifierTrain.message.block_id,
      autoStructuredDataClassifierTrain.message.block_id + 1,
      {
        hyp_params: {
          batch_size: "",
        },
      }
    )
  ).data;
  console.log(autDLEvaluate);
  // console.log(autoStructuredDataClassifierTrain);
}
main();
