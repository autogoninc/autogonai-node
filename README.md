# AutogonAI Node.js library

The AutogonAI Node.js library is a tool for interacting with AutogonAI's AI automation platform. It enables you to build and manage machine learning projects using a variety of functions and APIs provided by AutogonAI. With this library, you can streamline your machine learning workflow and take advantage of AutogonAI's automation capabilities.

## Installation

```bash
npm install autogonai-node
```

```bash
npm install axios
```

## Documentation

For detailed information and API documentation, please visit the [Documentation](https://docs.autogon.ai/).

# Usage

```bash
const fs = require("fs");
require("dotenv").config();

const {Client} = require("autogonai-node");

// Initialize the client with your AutogonAI API key
const client = new Client(process.env.AUTOGON_API_KEY);

// Make a request to generate an image from input text and specify image size
async function main() {
  try {
    // Input text to describe the image
    const inputText = "A dad and his son walking down the street towards a park";

    // Specify the image size (e.g., "1024x1024")
    const imageSize = "1024x1024";

    // Call the image_generation function
    const response = await client.Qore.visionAI.imageGeneration(inputText, imageSize);

    // Decode the image data and save it as a PNG file
    const imageData = Buffer.from(response.image, "base64");
    fs.writeFile("generated_image.png", imageData, "base64", (err) => {
      if (err) {
        console.error("Error saving image:", err);
      } else {
        console.log("Image saved successfully as generated_image.png");
      }
    });
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

// Call the main function
main();
```

## License

MIT
