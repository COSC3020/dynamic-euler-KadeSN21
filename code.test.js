const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

function testE() {
    console.assert(
        Math.abs(e(0) - 1) < 1e-10,
        `Expected 1, but got ${e(0)}`
    );

    console.assert(
        Math.abs(e(1) - 2) < 1e-10,
        `Expected 2, but got ${e(1)}`
    );

    console.assert(
        Math.abs(e(2) - 2.5) < 1e-10,
        `Expected 2.5, but got ${e(2)}`
    );

    console.assert(
        Math.abs(e(5) - 2.7166666666666663) < 1e-10,
        `Expected 2.7166666666666663, but got ${e(5)}`
    );

    console.assert(
        Math.abs(e(10) - 2.7182818011463845) < 1e-10,
        `Expected ~2.7182818011463845, but got ${e(10)}`
    );
}

testE();
