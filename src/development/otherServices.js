"use strict";

// imports
const axios = require("axios");
// const { constants } = require("buffer");
const constants = require("../helpers/constants");
const fs = require("fs");
const FormData = require("form-data");

const AIServices = (superclass) =>
  class extends superclass {
    // Vision Ai
    text_detection(imagePath) {
      const endpoint = "/services/vision-ai/";

      const form = new FormData();
      form.append("image", fs.createReadStream(imagePath));
      form.append("operation", "text_detection");

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

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
      });
    }

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

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
      });
    }

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

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
      });
    }

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

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
      });
    }
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

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
      });
    }
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

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
      });
    }
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
        .post(this.options.baseURL + endpoint, body, {
          headers,
        })
        .then((response) => {
          return {
            ...response.data,
          };
        });

      // // response = processImageToBuffer(response.data["image"]);
      // return response;
    }
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

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
        text,
      });
    }

    image_captioning(imagePath) {
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

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
      });
    }
    document_qa(imagePath, question) {
      const endpoint = "/services/vision-ai/";

      const form = new FormData();
      form.append("image", fs.createReadStream(imagePath));
      form.append("operation", "document_question_answer");

      const headers = {
        ...form.getHeaders(),
        ...{
          "X-AUG-KEY": this.apiKey,
          "User-Agent": `${constants.appName}/${constants.appVersion}`,
        },
      };

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
        question,
      });
    }
    visual_question_answer(filePath, text) {
      const endpoint = "/services/vision-ai/";

      const form = new FormData();
      form.append("image", fs.createReadStream(filePath));
      // form.append("operation", "document_question_answer");

      const headers = {
        ...form.getHeaders(),
        ...{
          "X-AUG-KEY": this.apiKey,
          "User-Agent": `${constants.appName}/${constants.appVersion}`,
        },
      };

      return axios.request(this.options.baseURL + endpoint, form, {
        headers,
        text,
      });
    }

    // Natural Language AI
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
    text_to_speech(text) {
      const endpoint = "/services/text-to-speech/";
      const form = new FormData();
      form.append("text", text);
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
    speech_to_text(audio) {
      const endpoint = "/services/speech-to-text/";

      const form = new FormData();
      // const audiobyte = audioToBytes(audio);
      form.append("audio", fs.createReadStream(audio));
      form.append("language_code", "en");

      const headers = {
        // ...form.getHeaders(),
        ...{
          "X-AUG-KEY": this.apiKey,
          "User-Agent": `${constants.appName}/${constants.appVersion}`,
        },
      };

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
      });
    }
    text_summary(text, max_length, min_length) {
      const endpoint = "/services/text-summary/";
      const form = new FormData();
      form.append("text", text);
      // form.append("max_length", max_length);
      // form.append("min_length", max_length);
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
    ask_your_data(data, promote) {
      const endpoint = "/services/ask-your-data/";

      const headers = {
        // ...form.getHeaders(),
        ...{
          "X-AUG-KEY": this.apiKey,
          "User-Agent": `${constants.appName}/${constants.appVersion}`,
        },
      };

      return axios.post(this.options.baseURL + endpoint, form, {
        headers,
        data,
        promote,
      });
    }
    text_classification(text) {
      const endpoint = "/services/text-classification/";

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
    // Voice Cloning
    voices(audio) {
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
      });
    }
  };

module.exports = AIServices;
