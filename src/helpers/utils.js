"use strict";
const fs = require("fs");

function flowObjects(...functions) {
  return (input) => functions.reduceRight((input, fn) => fn(input), input);
}
function audioToBytes(audioFilePath) {
  // Read the audio file into a Buffer
  const audioData = fs.readFileSync(audioFilePath);

  // Now, 'audioData' contains the audio file in bytes
  return audioData;
}
module.exports = {
  flowObjects,
  audioToBytes,
};
