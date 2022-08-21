const nxPreset = require('@nrwl/jest/preset').default;
const path = require('path');

module.exports = { ...nxPreset, roots: ['<rootDir>', path.resolve(__dirname, './__mocks__')], };
