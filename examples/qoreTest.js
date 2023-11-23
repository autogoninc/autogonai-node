const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();

const Client = require("../src/client");

console.log(process.env.AUTOGON_API_KEY);
const client = new Client(process.env.AUTOGON_API_KEY);
async function main() {
  // const textDetection = (await client.text_detection("qore2.PNG")).data;
  // console.log(textDetection);

  //-------------------
  //Natural Language AI
  //--------------------

  const textToSpeech = (
    await client.text_to_speech(
      "A dad and his son walking down the street towards a park"
    )
  ).data;
  console.log(textToSpeech);

  // // speech to text accept the sound voice recognition
  // speechToText = (await client.speech_to_text("speechTest.wav")).data;
  // // console.log(speechToText.data.results[0].alternatives[0].transcript);

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
  // labelDetection = (await client.label_detection("images1.jpeg")).data;
  // // console.log(labelDetection);

  // // detect pupolar logo
  // logoDetection = (await client.logo_detection("download3.png")).data;
  // // console.log(logoDetection.data);

  // imageGeneration = await client.image_generation("tree that have leave");
  // const test = [
  //   "https://cloud-autogonai.s3.us-east-2.amazonaws.com/2023_GPT4All_Technical_Report.pdf",
  //   "https://cloud-autogonai.s3.us-east-2.amazonaws.com/yolov7paper.pdf",
  // ];
  // chatbot = await client.create_chatbot("chatbot", "testing", test);
  // console.log(chatbot);

  // console.log(imageGeneration);
}
main();
