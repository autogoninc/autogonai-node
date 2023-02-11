"use strict";

function validateRequiredParameters(endpoint, args) {
    return null;
}

function isUUID(string) {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(string);
}


module.exports = { validateRequiredParameters, isUUID, }