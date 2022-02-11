const commonJestConfig = require('./../../../config/jest.config');

const path = require('path');

module.exports = {
  ...commonJestConfig,
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/../../../config/fileMock.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/../../../config/setup-test.js',
  ],
  transform: {
    '^.+\\.(ts|tsx|js)?$': ['babel-jest', { configFile: path.resolve(__dirname, '../../../babel.config.js') }],
    '^.+.(css|less)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*nav.*).*$'],
};

