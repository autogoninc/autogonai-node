// imports
const axios = require("axios");
// const { constants } = require("buffer");
const constants = require("../helpers/constants");
const fs = require("fs");
const FormData = require("form-data");

class VisionAI {
  constructor(client) {
    this.apiKey = client.apiKey;
    this.client = client;
  }
  /**
   *
   * Detect Text In Images
   *
   * TEXT_DETECTION detects and extracts text from any image. For example, a photograph might contain a street sign or traffic sign.
   *
   *
   * @param {file} image image file to be processed
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */

  text_detection(imagePath) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "text_detection");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.client.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
    });
  }
  /**
   *
   *TEXT DETECTION(DOCUMENTS)
   *
   * DOCUMENT_TEXT_DETECTION also extracts text from an image, but the response is optimized for dense text and documents.
   *
   *
   * @param {file} image image file to be processed
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */

  document_text_detection(imagePath) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "document_text_detection");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
    });
  }

  /**
   *
   *LABEL DETECTION
   *
   * LABEL_DETECTION can identify general objects, locations, activities, animal species, products, and more.
   *
   *
   * @param {file} image image file to be processed
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */

  label_detection(imagePath) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "label_detection");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
    });
  }

  /**
   *
   *LANDMARK DETECTION
   *
   * LANDMARK_DETECTION detects popular natural and human-made structures within an image.
   *
   *
   * @param {file} image image file to be processed
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */
  landmark_detection(imagePath) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "landmark_detection");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
    });
  }

  /**
   *
   * LOGO_DETECTION
   *
   * Detects popular product logos within an image.
   *
   *
   * @param {file} image image file to be processed
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */

  logo_detection(imagePath) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "logo_detection");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
    });
  }
  /**
   *
   * WEB_DETECTION
   *
   *  Detects the most likely owners of faces in an image and also Web references to an image.
   *
   *
   * @param {file} image image file to be processed
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */
  web_detection(imagePath) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "web_detection");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
    });
  }

  /**
   *
   *Object Detection
   *
   *
   *
   * @param {file} image image file to be processed
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */
  object_detection(imagePath) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "object_localization");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
    });
  }

  /**
   *
   * Image Generation
   *
   * Given a prompt and/or an input image, this endpoint will generate a new image.
   *
   *
   * @param {string} prompt A text description of the desired image(s). The maximum length is 1000 characters.
   * @param     output_size The size of the generated images. Must be one of 256x256, 512x512, or 1024x1024, defaults to 512x512.
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */
  image_generation(prompt, output_size) {
    const endpoint = "/services/image-generation/";
    const body = {
      prompt: prompt,
      output_size: output_size,
    };

    const form = new FormData();

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };
    // // let response;
    return axios
      .post(constants.BASE_URL + endpoint, {
        headers,
        body,
      })
      .then((response) => {
        return {
          ...response.data,
        };
      });

    // // response = processImageToBuffer(response.data["image"]);
    // return response;
  }

  /**
   *
   * Stable Diffusion
   *
   * Generate Images from Text.
   *
   *
   * @param {string} text Short description of image to be generated.
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */
  stable_diffusion(text) {
    const endpoint = "/services/vision-ai/";

    //   const form = new FormData();
    //   form.append("image", fs.createReadStream(imagePath));
    //   form.append("operation", "object_localization");

    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
      text,
    });
  }

  /**
   *
   * Image Captioning
   *
   * Analyzes an image and generates captions for images.
   *
   *
   * @param {file} image image to be captioned
   * @param {file} image_url url of the image to be captioned (should be downloadable)
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */

  image_captioning(imagePath, image_url) {
    const endpoint = "/services/image-captioning";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "face_detection");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
      image_url,
    });
  }
  /**
    //  *
    //  * Document Question and Answering
    //  *
    //  * Leverage AI models capable of answering questions based on the content of a given document.
    //  *
    //  *
    //  * @param {string} question
    //  * @param {file} document
    //  * @param {file} document_url
    //  *
    //  *
    //  * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
    //  *
    //  * @returns {object}
    //  */
  document_qa(imagePath, question) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(constants.BASE_URL + endpoint, form, {
      headers,
      question,
      document_url,
    });
  }
  /**
   *
   * Visual Question and Answering
   *
   * Generate accurate answers about an image based on the visual content of the image.
   *
   *
   * @param {string} text
   * @param {file} image
   * @param {file} image_url
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */
  visual_question_answer(imagePath, text) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    // form.append("operation", "document_question_answer");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.request(constants.BASE_URL + endpoint, form, {
      headers,
      text,
      image_url,
    });
  }
}
class NaturalLanguageAI {
  constructor(client) {
    this.apiKey = client.apiKey;
    this.client = client;
  }
  /**
   *
   * Sentiment Analyzer
   *
   * Sentiment Analysis inspects the given text and identifies the prevailing emotional opinion within the text, especially to determine a writer's attitude as positive, negative, or neutral.
   *
   *
   * @param {string} text text to be analyzed
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/natural-language-ai/sentiment-analyzer}
   *
   * @returns {object}
   */
  sentiment_analysis(text) {
    const endpoint = "/services/sentiment-analysis/";

    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(this.options.baseURL + endpoint, form, {
      headers,
      text,
    });
  }

  /**
   *
   * Text Summary
   *
   * The API allows developers to specify the minimum and maximum length of the generated summaries.
   *
   *
   * @param {string} text The text to be summarized.
   * @param {int} max_length, Specifies the maximum length of the summary. Defaults to 130.
   * @param {int} min_length, Specifies the minimum length of the summary. Defaults to 30.
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/natural-language-ai/text-summary}
   *
   * @returns {object}
   */

  text_summary(text, max_length, min_length) {
    const endpoint = "/services/text-summary/";
    const form = new FormData();
    form.append("text", text);
    form.append("max_length", max_length);
    form.append("min_length", min_length);
    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(this.options.baseURL + endpoint, form, {
      headers,
    });
  }

  /**
   *
   * Ask Your Data
   *
   *Leverage on artificial intelligence to help you work with your data, ranging from tasks such as data cleansing, data analytics, to data visualization, and more.
   *
   *
   * @param {string} data url to dataset to be queried
   * @param {string} prompt Query text (Ex: Give me a chart of the first two columns)
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/natural-language-ai/ask-your-data}
   *
   * @returns {object}
   */

  ask_your_data(data, prompt) {
    const endpoint = "/services/generate-data/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(this.options.baseURL + endpoint, form, {
      headers,
      data: data,
      prompt: prompt,
    });
  }

  /**
   *
   *The Text Classification API is a robust tool designed to analyze and classify textual data based on positivity and negativity. This API assigns scores to each class, indicating the degree of positivity or negativity present in the provided text.
   *
   *
   * @param {string} text Text to be classified
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/natural-language-ai/text-classification}
   *
   * @returns {object}
   */
  text_classification(text) {
    const endpoint = "/services/generate-data/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(this.options.baseURL + endpoint, form, {
      headers,
      text: text,
    });
  }

  /**
   *
   *This API allows developers to generate artificial datasets that mimic real-world data while meeting specific criteria provided by the user.
   *
   *
   * @param {int} row Number of rows needed in the generated dataset
   * @param  prompt User-defined prompts specifying the structure and characteristics of the dataset. (Ex. "insurance dataset with the columns (name, amount)")
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/natural-language-ai}
   *
   * @returns {object}
   */
  generate_synthetic_datasets(prompt, row) {
    const endpoint = "/services/generate-data/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(this.options.baseURL + endpoint, form, {
      headers,
      prompt: prompt,
      row: row,
    });
  }

  /**
   *
   *This API allows seamless communication between a client application and a custom chatbot service agent, facilitating natural language processing and response generation.
   *
   *
   * @param {int} agentId Agent ID(A Chatbot Agent ID is gotten from the  {@link https://console.autogon.ai/}Autogon console after a successful creation of a chatbot agent)
   * @param {string}question
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/natural-language-ai}
   *
   * @returns {object}
   */
  create_chatbot(agentId, question) {
    const endpoint = `/services/chatbot/${agentId}/chat/`;
    function uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    }
    const sessionId = uuid();

    const headers = {
      "User-Agent": `${constants.appName}/${constants.appVersion}`,
      "Content-Type": "application/json",
    };
    const sessionIds = {
      session_id: sessionId,
    };
    console.log(sessionId);
    return axios.post(this.options.baseURL + endpoint, {
      headers,
      ...sessionIds,
      question: question,
    });
  }
}
class VoiceCloning {
  constructor(client) {
    this.apiKey = client.apiKey;
    this.client = client;
  }
  /**
   *
   * Create a Voice
   *
   *This allows users to create voices, adds a new voice to your collection of voices.
   *
   *
   * @param {string} voice_name name of the voice to be create
   * @param {string} voice_description  description of the voice
   * @param {file} audio  audio file to be played
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/voice-cloning/text-to-speech}
   *
   * @returns {object}
   */
  create_a_voice(audio, voiceName, voiceDscription) {
    const endpoint = "/services/voice-cloning/voices/";

    const form = new FormData();
    form.append("audio", fs.createReadStream(audio));
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(this.options.baseURL + endpoint, form, {
      headers,
      voice_name: voiceName,
      voice_dscription: voiceDscription,
    });
  }

  /**
   *
   * Get Voices
   *
   *Retrieves a list of created voices for a user.
   *
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/voice-cloning/get-voices}
   *
   * @returns {object}
   */

  get_voice() {
    const endpoint = "/services/voice-cloning/voices/list/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.get(this.options.baseURL + endpoint, form, {
      headers,
    });
  }
  /**
   *
   * Text-To-Speech
   *
   *Converts text into speech using a voice of your choice and returns audio.
   *
   *
   * @param {int} voice_id Unique voice ID to be used, can be gotten from Get voices endpoint.
   * @param {string} text  message
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/voice-cloning/text-to-speech}
   *
   * @returns {object}
   */
  text_to_speech(voice_id, text) {
    const endpoint = "/services/voice-cloning/tts/";
    const form = new FormData();
    form.append("text", text);
    form.append("voice_id", voice_id);
    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios.post(this.options.baseURL + endpoint, form, {
      headers,
    });
  }
}

module.exports = {
  VisionAI,
  NaturalLanguageAI,
  VoiceCloning,
};
