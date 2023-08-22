"use strict";

// imports
const axios = require("axios");
const { constants } = require("buffer");
const fs = require("fs");

const AIServices = (superclass) =>
  class extends superclass {
    text_detection(imagePath) {
      const endpoint = "/services/google/vision-ai/";

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
      const endpoint = "/services/google/vision-ai/";

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
      const endpoint = "/services/google/vision-ai/";

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
      const endpoint = "/services/google/vision-ai/";

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
      const endpoint = "/services/google/vision-ai/";

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
      const endpoint = "/services/google/vision-ai/";

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
      const endpoint = "/services/google/vision-ai/";

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
    stable_diffusion(text) {
      const endpoint = "/services/google/vision-ai/";

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
      const endpoint = "/services/google/vision-ai/";

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
    document_question_answer(imagePath, question) {
      const endpoint = "/services/google/vision-ai/";

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
      const endpoint = "/services/google/vision-ai/";

      const form = new FormData();
      form.append("image", fs.createReadStream(filePath));
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
        text,
      });
    }
  };

module.exports = AIServices;
