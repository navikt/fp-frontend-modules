module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|js)x?$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    collectCoverage: false,
    modulePathIgnorePatterns: ['<rootDir>/dist'],
};
