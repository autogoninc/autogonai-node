"use strict";

// imports 
const axios = require("axios");
const { constants } = require("buffer");
const fs = require("fs");

const AIServices = superclass => class extends superclass {
    text_detection(imagePath) {
        const endpoint = "/services/google/vision-ai/";

        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "text_detection")

        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }

        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    document_text_detection(imagePath) {
        const endpoint = "/services/google/vision-ai/";

        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "document_text_detection")

        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }

        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    label_detection(imagePath) {
        const endpoint = "/services/google/vision-ai/";

        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "label_detection")

        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }

        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    landmark_detection(imagePath) {
        const endpoint = "/services/google/vision-ai/";

        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "landmark_detection")

        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }

        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    logo_detection(imagePath) {
        const endpoint = "/services/google/vision-ai/";

        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "logo_detection")

        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }

        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }
    
    // object_localization(imagePath) {
    //     const endpoint = "/services/google/vision-ai/";

    //     const form = new FormData();
    //     form.append("image", fs.createReadStream(imagePath));
    //     form.append("operation", "object_localization")

    //     const headers = {
    //         ...form.getHeaders(),
    //         ...{
    //             "X-AUG-KEY": this.apiKey,
    //             "User-Agent": `${constants.appName}/${constants.appVersion}`
    //         }
    //     }

    //     return axios.post(this.options.baseURL + endpoint, form, {
    //         headers
    //     });
    // }

    face_detection(imagePath) {
        const endpoint = "/services/google/vision-ai/";
        
        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "face_detection")
        
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
        
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    web_detection(imagePath) {
        const endpoint = "/services/google/vision-ai/";

        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "web_detection")

        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }

        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    object_detection(imagePath) {
        const endpoint = "/services/google/vision-ai/";
    
        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "object_detection")
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    sentiment_analysis(text) {
        const endpoint = "/services/google/sentiment-analysis/";
    
        const form = new FormData();
        form.append("text", text);
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    text_to_speech(text) {
        const endpoint = "/services/google/text-to-speech/";
    
        const form = new FormData();
        form.append("text", text);
        form.append("language_code", "en")
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    speech_to_text(audioPath) {
        const endpoint = "/services/google/speech-to-text/";
    
        const form = new FormData();
        form.append("audio", fs.createReadStream(audioPath));
        form.append("language_code", "en")
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    autogon_detect(imagePath) {
        const endpoint = "/services/aws/rekognition/";
    
        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "detect_age_gender")
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    autogon_chat(message) {
        const endpoint = "/services/openai/chat/";
    
        const form = new FormData();
        form.append("message", message);
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    autogon_image_generator(prompt, output_size='512x512') {
        const endpoint = "/services/openai/dalle2/";
    
        const form = new FormData();
        form.append("prompt", prompt);
        form.append("output_size", output_size);
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    autogon_detect(imagePath) {
        const endpoint = "/services/aws/rekognition/";
    
        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("operation", "detect_age_gender")
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    autogon_compare_faces(imagePath, imagePath2) {
        const endpoint = "/services/aws/rekognition/";
    
        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("image2", fs.createReadStream(imagePath2));
        form.append("operation", "compare_faces")
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }

    autogon_liveliness(imagePath, imagePath2) {
        const endpoint = "/services/liveliness-detection/";
    
        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath));
        form.append("image2", fs.createReadStream(imagePath2));
    
        const headers = {
            ...form.getHeaders(),
            ...{
                "X-AUG-KEY": this.apiKey,
                "User-Agent": `${constants.appName}/${constants.appVersion}`
            }
        }
    
        return axios.post(this.options.baseURL + endpoint, form, {
            headers
        });
    }
    
}

module.exports = AIServices;