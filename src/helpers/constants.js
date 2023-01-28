const packageJson = require("../../package.json");

const appName = `${packageJson.name}-node`;
const appVersion = packageJson.version;

const BASE_URL = "https://autogon.ai/api/v1";
const ENGINE_ENDPOINT = "/engine/start"

module.exports = {
    BASE_URL,
    appName,
    appVersion,
    ENGINE_ENDPOINT
};
