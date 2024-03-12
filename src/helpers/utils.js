"use strict";

function flowObjects(...functions) {
  return (input) => functions.reduceRight((input, fn) => fn(input), input);
}
/**
 * Handles errors that occur during a request.
 *
 * @param {Error} error - The error object.
 * @throws {Error} - The error object is re-thrown for further handling or logging.
 */
function handleRequestError(error) {
  if (error.response) {
    // The request was made, but the server responded with a status code outside the range of 2xx
    console.error("Server responded with an error:", error.response.status, error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received from the server");
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error setting up the request:", error.message);
  }
  throw error; // Re-throw the error for further handling or logging
}

module.exports = {
  flowObjects,
  handleRequestError
};
