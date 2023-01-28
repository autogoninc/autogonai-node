"use strict";

function flowObjects(...functions) {
    return input => functions.reduceRight(
        (input, fn) => fn(input),
        input
    );
}

module.exports = {
    flowObjects,
};