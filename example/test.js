const csv = require("csv-parser");
const fs = require("fs");
// const request = require("request");
const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();

const Client = require("../src/client");
const { log } = require("console");

const client = new Client(
  process.env.AUTOGON_API_KEY,
  (options = {
    baseURL: "https://api.autogon.ai/api/v1",
  })
);
// console.log(client);

// async function main() {
//   //   const dashboard = await client.Dashboard.get();
//   //   console.log(dashboard);

//   // get all product id
//   const prodject = await client.Project.get();
//   // console.log(prodject.data);

//   //--------------------
//   //   get single id
//   // -------------------

//   const app_id = "47f75865-cb06-45a0-84d6-5a2de290dba9";
//   const product2 = (await client.Project.get(app_id)).data;
//   console.log(product2);

//   //--------------------
//   //   create new project
//   // -------------------

//   // createProject = (
//   //   await client.Project.create(
//   //     "Demo testing",
//   //     "Checking if the api is working"
//   //   )
//   // ).data;
//   // console.log(createProject);

//   //--------------------
//   //   delete project
//   // -------------------
//   // const app_id = "99a5ed96-6e74-437a-8382-2f57b93f1c2c";
//   // const deleteProject = await client.Project.delete(app_id);
//   // console.log(deleteProject.data);

//   //--------------------
//   //  uploadDataset
//   // -------------------
//   // const object = (await client.upload("./DefaultLoan.csv")).data;
//   // console.log(object);

//   dataInput = (
//     await client.data_input(446, 0, 1, {
//       dburl:
//         "https://raw.githubusercontent.com/autogoninc/autogon-public-datasets/main/loan-prediction/loan-prediction.csv",
//       file_type: "csv",
//       x_boundaries: ":, 0",
//       y_boundaries: ":, -1",
//     })
//   ).data;
//   console.log(dataInput);
//   // missing_data = (
//   //   await client.missing_data(446, 0, 1, {
//   //     strategy_value: "mean",
//   //     boundaries: ":, 1:",
//   //   })
//   // ).data;
//   // console.log(missing_data);
//   // dataSplit = (
//   //   await client.data_split(
//   //     product2.id,
//   //     dataInput.message.block_id,
//   //     dataInput.message.block_id + 1,
//   //     {
//   //       test_size: 0.3,
//   //       random_state: 0,
//   //     }
//   //   )
//   // ).data;
//   // console.log(dataSplit);

//   dropColumns = (
//     await client.drop_columns(446, 0, 1, {
//       x_columns: [0, 1, 3, 8],
//       y_columns: "",
//     })
//   ).data;
//   console.log(dropColumns);
// }
// main();

async function main() {
  // const dashboard = await client.Dashboard.get();
  // console.log(dashboard);
  // const prodject = await client.Project.get();
  // console.log(prodject);
  const object = (await client.upload("DefaultLoan.csv")).data;
  console.log(object);
  // console.log(
  //   "Hello, User. You have ",
  //   `${dashboard.project_count} projects, `,
  //   `${dashboard.dataset_count} datasets uploaded, `,
  //   `${dashboard.deployed_model_count} deployed models and `,
  //   `${dashboard.total_prediction_calls} prediction calls.`
  // );
  // dataset = (
  //   await client.Dataset.create(
  //     "Mall Customers",
  //     "This dataset was used to test the Node.js library",
  //     "csv",
  //     object.location
  //   )
  // ).data;

  // project = (
  //   await client.Project.create(
  //     // hopefully no two project names can ever exist
  //     `Demo Tests #${Math.floor(Math.random() * 1000)}`,
  //     "This project allows efficient API tests from the Node.js"
  //   )
  // ).data;
  //   // display
  //   console.log();
  // console.log("Dataset created: ");
  // console.log(dataset);
  // dataInput = (
  //   await client.data_input(project.id, 0, 1, {
  //     dburl: dataset.dataset_url,
  //     file_type: dataset.dataset_type,
  //     x_boundaries: ":, 0",
  //     y_boundaries: ":, -1",
  //   })
  // ).data;
  // console.log(dataInput);
  dropColumn = (
    await client.drop_columns(471, 1, 2, {
      d_columns: [0, 1],
    })
  ).data;

  //   // display
  //   console.log();
  // console.log("Data Splitted: ");
  console.log(dropColumn);
  //
  // missing data
  missingData = (
    await client.missing_data(471, 1, 2, {
      strategy_value: "most_frequent",
    })
  ).data;
  console.log(missingData);

  // Encode Data
  EncodeData = (
    await client.data_encoding(
      471,
      missingData.message.parent_id,
      missingData.message.block_id,
      {
        dataset: {
          encode: true,
          encoding_type: "label",
          remainder: "passthrough",
          index: 1,
        },
        xvalue: {},
        yvalue: {},
      }
    )
  ).data;
  console.log(EncodeData);
  EncodeData2 = (
    await client.data_encoding(
      471,
      EncodeData.message.parent_id,
      EncodeData.message.block_id,
      {
        dataset: {
          encode: true,
          encoding_type: "label",
          remainder: "passthrough",
          index: 0,
        },
        xvalue: {},
        yvalue: {},
      }
    )
  ).data;
  console.log(EncodeData2);

  dropColumn2 = (
    await client.drop_columns(
      471,
      EncodeData2.message.parent_id,
      EncodeData.message.block_id,
      {
        d_columns: [0, 1],
      }
    )
  ).data;

  console.log(dropColumn2);
  // Feature Sampling
  FeatureSampling = (
    await client.feature_sampling(
      471,
      EncodeData2.message.parent_id,
      EncodeData.message.block_id + 1,
      {
        x_boundaries: [0, 1],
        y_boundaries: [2],
      }
    )
  ).data;

  console.log(FeatureSampling);
  console.log(dropColumn2);
  // Feature Sampling
  dataSplit = (
    await client.data_split(
      471,
      FeatureSampling.message.parent_id,
      FeatureSampling.message.block_id,
      {
        test_size: 0.2,
        random_state: 0,
      }
    )
  ).data;

  console.log(dataSplit);
  // # Splitting Data
}
main();
