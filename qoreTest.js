const csv = require("csv-parser");
const fs = require("fs");
// const request = require("request");
const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();

const Client = require("./src/client");

const client = new Client(
  process.env.AUTOGON_API_KEY,
  (options = {
    baseURL: "https://api.autogon.ai/api/v1",
  })
);
async function main() {
  // textDetection = (await client.text_detection("qore2.PNG")).data;
  // console.log(textDetection);

  //-------------------
  //Natural Language AI
  //--------------------

  textToSpeech = (
    await client.text_to_speech(
      "A dad and his son walking down the street towards a park"
    )
  ).data;
  // console.log(textToSpeech);

  // speech to text accept the sound voice recognition
  speechToText = (await client.speech_to_text("speechTest.wav")).data;
  // console.log(speechToText.data.results[0].alternatives[0].transcript);
  textSummary = (
    await client.text_summary(
      "Query your data using natural language. Leverage on artificial intelligence to help you work with your data, ranging from tasks such as data cleansing, data analytics, to data visualization, and more.",
      130,
      30
    )
  ).data;
  // console.log(textSummary);
  // text Detection
  textDetection = (await client.text_detection("sukidcard.webp")).data;
  // console.log(textDetection);

  // document detection
  documentTextDetection = (
    await client.document_text_detection("sukidcard.webp")
  ).data;
  // console.log(documentTextDetection);
  labelDetection = (await client.label_detection("images1.jpeg")).data;

  // console.log(labelDetection.data.labelAnnotations);

  logoDetection = (await client.logo_detection("download3.png")).data;
  // console.log(logoDetection.data);

  imageGeneration = await client.image_generation("tree that have leave");
  // console.log(imageGeneration);
  const imageStream = imageGeneration;
  console.log(imageStream);
  // Assuming `result` contains the API response

  // let imageData = "";
  // imageStream.on("data", (chunk) => {
  //   imageData += chunk.toString("base64");
  // });

  // imageStream.on("end", () => {
  //   // Now, you have the image data as a base64-encoded string
  //   // You can use it for displaying or other purposes
  //   console.log("Image data as base64:", imageData);
  // });
}
main();
