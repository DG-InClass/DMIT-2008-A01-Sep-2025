// jest.config.mjs
import nextJest from 'next/jest.js';

// We start by setting up nextJest with the options
// that are important for our test environment
const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load the
    // next.config.js and .env files in your test environment
    dir: './', // dir is short for "directory path"
});

// Add custom config to be passed to Jest
/** @type { import('jest').Config } */
const config = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    // below is for the newer msw version 2
    setup: ['./jest.polyfills.js'],
    testEnvironmentOptions: {
        customExportConditions: ['']
    }
}

// export our project-specific configuration to be picked up by the
// testing framework.
export default createJestConfig(config);
