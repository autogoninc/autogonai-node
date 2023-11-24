const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();
require("dotenv").config();

const Client = require("../src/client");

const client = new Client(process.env.AUTOGON_API_KEY);

async function main() {
  // logoDetection = (
  //   await client.Qore.visionAI.logo_detection("images/download3.png")
  // ).data;
  // console.log(logoDetection);
  // //-------------------
  // //Natural Language AI
  // //--------------------

  // // text summary
  // textSummary = (
  //   await client.text_summary(
  //     "Query your data using natural language. Leverage on artificial intelligence to help you work with your data, ranging from tasks such as data cleansing, data analytics, to data visualization, and more.",
  //     130,
  //     30
  //   )
  // ).data;
  // // console.log(textSummary);

  // // text Detection
  // textDetection = (await client.text_detection("sukidcard.webp")).data;
  // // console.log(textDetection);

  // // document detection
  // documentTextDetection = (
  //   await client.document_text_detection("sukidcard.webp")
  // ).data;
  // // console.log(documentTextDetection);

  // //  Label Detection
  // labelDetection = (await client.label_detection("images/images1.jpeg")).data;
  // // console.log(labelDetection);

  // // detect pupolar logo
  // logoDetection = (await client.logo_detection("images/download3.png")).data;
  // // console.log(logoDetection.data);

  imageGeneration = await client.image_generation(
    "A dad and his son walking down the street towards a park",
    "1024x1024"
  );
  const imageData = Buffer.from(imageGeneration.image, "base64");

  fs.writeFile("generated_image.png", imageData, "base64", (err) => {
    if (err) {
      console.error("Error saving image:", err);
    } else {
      console.log("Image saved successfully as generated_image.png");
    }
  });
  // // console.log(imageGeneration);
}
main();
