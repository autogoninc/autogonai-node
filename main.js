const csv = require('csv-parser');
const fs = require('fs');
const request = require('request');

require("dotenv").config();

const Client = require("./src/client");

const client = new Client(process.env.AUTOGON_API_KEY);

async function main() {

    dashboard = (await client.Dashboard.get()).data;

    console.log("Hello, User. You have ",
        `${dashboard.project_count} projects, `,
        `${dashboard.dataset_count} datasets uploaded, `,
        `${dashboard.deployed_model_count} deployed models and `,
        `${dashboard.total_prediction_calls} prediction calls.`
    )

    console.log();
    console.log("Uploading dataset...");

    // upload dataset for use
    object = (await client.upload("./Salary_Data.csv")).data

    // display
    console.log();
    console.log("Dataset uploaded. Details: ");
    console.log(object);

    console.log();
    console.log("Creating dataset...");

    // create dataset with uploaded url
    dataset = (await client.Dataset.create("Mall Customers",
        "This dataset was used to test the Node.js library",
        "csv", object.location)).data;


    // display 
    console.log();
    console.log("Dataset created: ");
    console.log(dataset);

    console.log();
    console.log("Creating project...");

    // create project
    project = (await client.Project.create(
        // hopefully no two project names can ever exist
        `Demo Tests #${Math.floor(Math.random() * 1000)}`,
        "This project allows efficient API tests from the Node.js"
    )).data;

    // display
    console.log();
    console.log("Project created: ");
    console.log(project);

    console.log();
    console.log("Inputing data...");

    // input data
    dataInput = (await client.data_input(project.id, 0, 1, {
        dburl: dataset.dataset_url,
        file_type: dataset.dataset_type,
        x_boundaries: ":, 0",
        y_boundaries: ":, -1"
    })).data;

    // display
    console.log();
    console.log("Data Inputted: ");
    console.log(dataInput);

    console.log();
    console.log("Splitting data...")

    // split data limiting test data to 30% of the entire dataset
    dataSplit = (await client.data_split(project.id, dataInput.message.block_id, dataInput.message.block_id + 1, {
        test_size: 0.3,
        random_state: 0
    })).data;

    // display
    console.log();
    console.log("Data Splitted: ");
    console.log(dataInput.message);

    console.log();
    console.log("Building Simple Linear Regression Model...");

    // build a simple linear regression model named "SimpleModel"
    simpleModel = (await client.simple_linear_regression(project.id, dataSplit.message.block_id, dataSplit.message.block_id + 1, {
        model_name: "SimpleModel"
    })).data;

    // display
    console.log();
    console.log("SimpleModel built: ");
    console.log(simpleModel)

    console.log();
    console.log("Displaying Test Data For Making Predictions")

    request(dataSplit.message.x_test_url)
        .pipe(csv())
        .on('data', (row) => {
            console.log(row["0"]);
        })
        .on('end', () => {
            console.log();
            console.log("Making Predictions: ");
        });

    // make predictions with pre-built model using splitted data
    predictData = (await client.simple_linear_regression_predict(project.id, simpleModel.message.block_id, simpleModel.message.block_id + 1, {
        // grab model name from previous output
        model_name: Object.keys(JSON.parse(simpleModel.message.output))[0],
        test_data: dataSplit.message.x_test_url
    })).data;

    await client.array_reshpaing(1)


    console.log(predictData);
    console.log();
    console.log("Prediction Complete. Displaying predicted data: ");
    console.log();

    // display csv data
    request(JSON.parse(predictData.message.output).y_pred_url)
        .pipe(csv())
        .on('data', (row) => {
            console.log(row["0"]);
        })
        .on('end', () => {
            console.log();
            // console.log("Prediction Complete.");
        });



};

// driver
main()
// .catch(error => console.log(error.response.data));




projectId = 1
parentId = 6
blockId = 7

client.array_reshaping(projectId, parentId, blockId, {})
