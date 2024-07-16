// imports
const axios = require("axios");
// const { constants } = require("buffer");
const constants = require("../helpers/constants");
const { handleRequestError } = require("../helpers/utils");
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

  textDetection(imagePath) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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

  documentTextDetection(imagePath) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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

  labelDetection(imagePath) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  landmarkDetection(imagePath) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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

  logoDetection(imagePath) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  webDetection(imagePath) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  objectDetection(imagePath) {
    const endpoint = "/services/vision-ai/";

    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));
    form.append("operation", "object_dection");

    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  imageGeneration(prompt, output_size) {
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
      .post(constants.BASE_URL + endpoint, body, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);

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
  stableDiffusion(text) {
    const endpoint = "/services/vision-ai/";

    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };
    const body = {
      text: text,
    };
    return axios
      .post(constants.BASE_URL + endpoint, body, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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

  imageCaptioning(imagePath, image_url) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
        image_url,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  documentQa(imagePath, question) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
        question,
        document_url,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  visualQuestionAnswer(imagePath, text) {
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

    return axios
      .request(constants.BASE_URL + endpoint, form, {
        headers,
        text,
        image_url,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
  }
  /**
   *
   * License Plate Detector
   *
   * Detects license plate in a given image
   *
   *
   * @param {string} image_urls
   * @param {number} [confidence_thresh=0.5]
   * @param {number} [overlap_thresh=0.5]
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai}
   *
   * @returns {object}
   */
  licensePlateDetector(
    image_urls,
    confidence_thresh = 0.5,
    overlap_thresh = 0.5
  ) {
    const endpoint = "/services/license-plate-detection/";

    const headers = {
      // ...form.getHeaders(),
      "Content-Type": "application/json",
      "X-AUG-KEY": this.apiKey,
      "User-Agent": `${constants.appName}/${constants.appVersion}`,
    };

    const payload = JSON.stringify({
      image_urls: [image_urls],
      confidence_thresh: confidence_thresh,
      overlap_thresh: overlap_thresh,
    });
    const config = {
      method: "post",
      url: constants.BASE_URL + endpoint,
      headers: headers,
      data: payload,
    };

    return axios
      .request(config)
      .then((res) => res.data)
      .catch(handleRequestError);
  }
  /**
   *
   * Motion Detection
   *
   * Provides real time, accurate motion tracking for video streams
   *
   *
   * @param {string} videoUrls
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/vision-ai#motion-detection}
   *
   * @returns {object}
   */
  motionDetection(videoUrls) {
    const endpoint = "/services/motion-detection/";
    const form = new FormData();
    form.append("video", fs.createReadStream(videoUrls));
    // form.append("operation", "document_question_answer");

    const headers = {
      ...form.getHeaders(),

      "X-AUG-KEY": this.apiKey,
      "User-Agent": `${constants.appName}/${constants.appVersion}`,
    };

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  sentimentAnalysis(text) {
    const endpoint = "/services/sentiment-analysis/";

    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
        text,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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

  textSummary(text, max_length, min_length) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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

  askYourData(data, prompt) {
    const endpoint = "/services/ask-your-data/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };
    const dataInput = {
      data: data,
      prompt: prompt,
    };
    return axios
      .post(constants.BASE_URL + endpoint, dataInput, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  textClassification(text) {
    const endpoint = "/services/text-classification/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios
      .post(
        constants.BASE_URL + endpoint,
        {
          text: text,
        },
        {
          headers,
        }
      )
      .then((res) => res.data)
      .catch(handleRequestError);
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
  generateSyntheticDatasets(prompt, row) {
    const endpoint = "/services/generate-data/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    const data = {
      prompt: prompt,
      rows: row,
    };
    return axios
      .post(constants.BASE_URL + endpoint, data, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  chatbot(agentId, question) {
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
    return axios
      .post(constants.BASE_URL + endpoint, {
        headers,
        ...sessionIds,
        question: question,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
  }

  /**
   * The easy_maker method is used to generate easy markers for a given question.
   *
   * @param {string} question - The question to generate easy markers for.
   * @param {string} easy -
   * @param {string|null} answer - The answer to the question, if known. Defaults to null.
   * @param {number|null} word_length - The desired word length for the markers, if applicable. Defaults to null.
   *
   * @returns {object} - The response object from the API call.
   *
   * @link {@link https://docs.autogon.ai/autogon-qore/natural-language-ai/easy-marker}
   */
  easyMaker(easy, question, answer = null, word_length = 30) {
    const endpoint = "/services/essay-marker/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    const data = {
      easy: easy,
      question: question,
      answer: answer,
      word_length: word_length,
    };
    return axios
      .post(constants.BASE_URL + endpoint, data, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
  }

  /**
   * The job_description_analyzer method analyzes a job description and a resume URL.
   *
   * @param {string} job_description - The job description to be analyzed.
   * @param {string} resume_url - The URL of the resume to be analyzed.
   *
   * @returns {object} - The response object from the API call.
   *
   * @link {@link https://docs.autogon.ai/autogon-qore/natural-language-ai/easy-marker}
   */
  resumeRanker(job_description, resume_url) {
    const endpoint = "/services/rank-resume/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    const data = {
      job_description: job_description,
      resume_url: resume_url,
    };
    return axios
      .post(constants.BASE_URL + endpoint, data, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
  }
  /**
   * Analyzes employee survey data.
   * @param {Array} survey - An array of objects representing survey questions and answers.
   * Example:
   * [
   *    {
   *      "question": "What is your role?",
   *      "answer": "Software Engineer"
   *    },
   *    {
   *      "question": "How satisfied are you with your work environment?",
   *      "answer": "Very satisfied"
   *    }
   * ]
   * @returns {Promise} - A promise representing the result of the analysis.
   */
  employeeAnalyzer(survey) {
    const endpoint = "/services/employee-analysis/";

    const headers = {
      "X-AUG-KEY": this.apiKey,
      "User-Agent": `${constants.appName}/${constants.appVersion}`,
    };
    const data = {
      question_answers: survey,
    };
    console.log(data);

    return axios
      .post(constants.BASE_URL + endpoint, data, {
        headers: headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
  }

  /**
   * The generate_dataset method generates a dataset based on the provided prompt and number of rows.
   *
   * @param {string} prompt - The prompt specifying the structure and characteristics of the dataset.
   * @param {number} [row=100] - The number of rows needed in the generated dataset. Defaults to 100.
   *
   * @returns {object} - The response object from the API call.
   *
   * @link {@link https://docs.autogon.ai/autogon-qore/natural-language-ai}
   */
  generateDataset(prompt, row = 100) {
    const endpoint = "/services/generate-data/";
    console.log(this.apiKey);

    const form = new FormData();
    const headers = {
      ...form.getHeaders(),
      ...{
        "X-AUG-Key": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    const data = {
      prompt: prompt,
      rows: row,
    };
    return axios
      .post(constants.BASE_URL + endpoint, data, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
  }
  /**
   * The translate_text method translates the given text to the target language.
   *
   * @param {string} text - The text to be translated.
   * @param {string} target_language - The target language to translate the text into.
   * @param {string} [source_language=null] - The source language of the text. Defaults to null.
   *
   * @returns {object} - The response object from the API call.
   *
   * @link {@link https://docs.autogon.ai/autogon-qore/natural-language-ai/text-translation}
   */
  translateText(text, target_language, source_language = null) {
    const endpoint = "/services/text-translation/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };
    let data;
    if (!source_language) {
      data = {
        text: text,
        target_language: target_language,
      };
    } else {
      data = {
        text: text,
        target_language: target_language,
      };
    }

    return axios
      .post(constants.BASE_URL + endpoint, data, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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
  createAVoice(audio, voiceName, voiceDscription) {
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
        voice_name: voiceName,
        voice_dscription: voiceDscription,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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

  getVoice() {
    const endpoint = "/services/voice-cloning/voices/list/";

    const form = new FormData();
    const headers = {
      // ...form.getHeaders(),
      ...{
        "X-AUG-KEY": this.apiKey,
        "User-Agent": `${constants.appName}/${constants.appVersion}`,
      },
    };

    return axios
      .get(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
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

    return axios
      .post(constants.BASE_URL + endpoint, form, {
        headers,
      })
      .then((res) => res.data)
      .catch(handleRequestError);
  }
  /**
   *
   * Phone call
   *
   *Converts text into call using a phone call .
   *
   *
   * @param {string} prompt
   * @param {string} phone_number
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/voice-cloning/text-to-speech}
   *
   * @returns {object}
   */
  phoneCall(prompt = ["how are you"], phone) {
    const endpoint =
      "http://api.autogon.ai/customer-service/api/v1/phone/make-call";
    const headers = {
      "Content-Type": "application/json",
      "X-AUG-KEY": this.apiKey,
      "User-Agent": `${constants.appName}/${constants.appVersion}`,
    };
    const body = JSON.stringify({
      prompt: prompt,
      phone_number: phone,
      response_required: true,
    });
    const config = {
      method: "post",
      url: endpoint,
      headers: headers,
      data: body,
    };

    return axios.request(config).then((response) => response.data);
  }
  /**
   *
   * generateVideo
   *
   *
   *
   *
   * @param {string} audioUrl
   * @param {string} imaageUrl
   *
   *
   * {@link https://docs.autogon.ai/autogon-qore/voice-cloning/text-to-speech}
   *
   * @returns {object}
   */
  generateVideo(audioUrl, imageUrl) {
    const endpoint = "/services/generate-video/";
    const headers = {
      "Content-Type": "application/json",
      "X-AUG-KEY": this.apiKey,
      "User-Agent": `${constants.appName}/${constants.appVersion}`,
    };
    const body = JSON.stringify({
      audio: audioUrl,
      image: imageUrl,
    });
    const config = {
      method: "post",
      url: constants.BASE_URL + endpoint,
      headers: headers,
      data: body,
    };

    return axios
      .request(config)
      .then((response) => response.data)
      .catch(this.handleRequestError.bind(this));
  }
}

class Agriculture {
  constructor(client) {
    this.apiKey = client.apiKey;
    this.client = client;
  }
  /**
   * Generic error handler for API requests.
   *
   * @param {Error} error - The error object.
   * @throws {Error} - Re-throws the error for further handling or logging.
   * @private
   */
  handleRequestError(error) {
    if (error.response) {
      // The request was made, but the server responded with a status code outside the range of 2xx
      console.error(
        "Server responded with an error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from the server");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }
    throw error; // Re-throw the error for further handling or logging
  }

  /**
   * Make a generic agro studies API call.
   *
   * @param {string} studyType - The type of agrostudy.
   * @param {string} image_urls - The URLs of the images to be analyzed.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for the confidence score.
   * @returns {Promise} - A promise that resolves to the response of the API call.
   */
  agroStudiesAPI(
    studyType,
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    const endpoint = "/services/agro-studies/";
    const headers = {
      "Content-Type": "application/json",
      "X-AUG-KEY": this.apiKey,
      "User-Agent": `${constants.appName}/${constants.appVersion}`,
    };
    const body = JSON.stringify({
      study_type: studyType,
      image_urls: [image_urls],
      overlap_threshold: overlap_threshold,
      confidence_threshold: confidence_threshold,
    });
    const config = {
      method: "post",
      url: constants.BASE_URL + endpoint,
      headers: headers,
      data: body,
    };

    return axios
      .request(config)
      .then((response) => response.data)
      .catch(this.handleRequestError.bind(this));
  }

  /**
   * Performs ripe strawberry detection on the given image URLs.
   *
   * @param {Array} image_urls - An array of image URLs to perform detection on.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for confidence score of detected strawberries.
   * @returns {Promise} - A promise that resolves to the detection results.
   */
  ripeStrawberryDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.agroStudiesAPI(
      "ripe_strawberry_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Performs crop weed detection on the given image URLs.
   *
   * @param {Array} image_urls - An array of image URLs to perform detection on.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for confidence score of detected weeds.
   * @returns {Promise} - A promise that resolves to the detection results.
   */

  cropWeedDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.agroStudiesAPI(
      "crop_weed_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Performs crop weed detection on the given image URLs.
   *
   * @param {Array} image_urls - An array of image URLs to perform detection on.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for confidence score of detected palm tree health.
   * @returns {Promise} - A promise that resolves to the detection results.
   */
  palmTreeHealthHetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.agroStudiesAPI(
      "palm_tree_health_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Performs cashew disease detection on the given image URLs.
   *
   * @param {Array} image_urls - An array of image URLs to perform detection on.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for confidence score of detected cashew diseases.
   * @returns {Promise} - A promise that resolves to the detection results.
   */
  cashewDiseaseDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.agroStudiesAPI(
      "cashew_disease_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Performs apple disease detection on the given image URLs.
   *
   * @param {Array} image_urls - An array of image URLs to perform detection on.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for confidence score of detected apple diseases.
   * @returns {Promise} - A promise that resolves to the detection results.
   */
  appleDiseaseDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.agroStudiesAPI(
      "apple_disease_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Performs grape detection on the given image URLs.
   *
   * @param {Array} image_urls - An array of image URLs to perform detection on.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for confidence score of detected grapes.
   * @returns {Promise} - A promise that resolves to the detection results.
   */
  grapeDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.agroStudiesAPI(
      "grape_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }
}
class Medical {
  constructor(client) {
    this.apiKey = client.apiKey;
    this.client = client;
  }

  /**
   * Generic error handler for API requests.
   *
   * @param {Error} error - The error object.
   * @throws {Error} - Re-throws the error for further handling or logging.
   * @private
   */
  handleRequestError(error) {
    if (error.response) {
      // The request was made, but the server responded with a status code outside the range of 2xx
      console.error(
        "Server responded with an error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from the server");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }
    throw error; // Re-throw the error for further handling or logging
  }

  /**
   * Make a generic health studies API call.
   *
   * @param {string} studyType - The type of health study.
   * @param {Array} image_urls - The URLs of the images to be analyzed.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for the confidence score.
   * @returns {Promise} - A promise that resolves to the response of the API call.
   */
  healthStudiesAPI(
    studyType,
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    const endpoint = "/services/health-studies/";
    const headers = {
      "Content-Type": "application/json",
      "X-AUG-KEY": this.apiKey,
      "User-Agent": `${constants.appName}/${constants.appVersion}`,
    };
    const body = JSON.stringify({
      study_type: studyType,
      image_urls: image_urls,
      overlap_threshold: overlap_threshold,
      confidence_threshold: confidence_threshold,
    });
    const config = {
      method: "post",
      url: constants.BASE_URL + endpoint,
      headers: headers,
      data: body,
    };

    return axios
      .request(config)
      .then((response) => response.data)
      .catch(this.handleRequestError.bind(this));
  }

  /**
   * Perform surgical tools detection on a set of images.
   *
   * @param {Array} image_urls - The URLs of the images to be analyzed.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for the confidence score of detected tools.
   * @returns {Promise} - A promise that resolves to the response of the API call.
   */
  surgicalToolsDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.healthStudiesAPI(
      "surgical_tools_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Perform tuberculosis detection on a set of images.
   *
   * @param {Array} image_urls - The URLs of the images to be analyzed.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for the confidence score of detected tuberculosis.
   * @returns {Promise} - A promise that resolves to the response of the API call.
   */
  tuberculosisDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.healthStudiesAPI(
      "tuberculosis_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Perform cervical fracture detection on a set of images.
   *
   * @param {Array} image_urls - The URLs of the images to be analyzed.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for the confidence score of detected fractures.
   * @returns {Promise} - A promise that resolves to the response of the API call.
   */

  cervicalFractureDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.healthStudiesAPI(
      "cervical_fracture_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Perform chest x-ray detection on a set of images.
   *
   * @param {Array} image_urls - The URLs of the images to be analyzed.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for the confidence score of detected abnormalities.
   * @returns {Promise} - A promise that resolves to the response of the API call.
   */
  chestXrayDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.healthStudiesAPI(
      "chest_xray_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Perform head CT scan analysis on a set of images.
   *
   * @param {Array} image_urls - The URLs of the images to be analyzed.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for the confidence score of detected abnormalities.
   * @returns {Promise} - A promise that resolves to the response of the API call.
   */
  kidneyStoneDetection(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.healthStudiesAPI(
      "kidney_stone_detection",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }

  /**
   * Perform head CT scan analysis on a set of images.
   *
   * @param {Array} image_urls - The URLs of the images to be analyzed.
   * @param {number} [overlap_threshold=0.5] - The threshold for overlapping bounding boxes.
   * @param {number} [confidence_threshold=0.3] - The threshold for the confidence score of detected abnormalities.
   * @returns {Promise} - A promise that resolves to the response of the API call.
   */
  headCtScanAnalyzer(
    image_urls,
    overlap_threshold = 0.5,
    confidence_threshold = 0.3
  ) {
    return this.healthStudiesAPI(
      "head_ct_scan_analyzer",
      image_urls,
      overlap_threshold,
      confidence_threshold
    );
  }
}

module.exports = {
  VisionAI,
  NaturalLanguageAI,
  VoiceCloning,
  Medical,
  Agriculture,
};
