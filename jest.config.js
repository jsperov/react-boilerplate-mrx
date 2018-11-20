module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  setupFiles: ["./__tests__/global.js"],
  modulePathIgnorePatterns: ["global.js"],
  setupTestFrameworkScriptFile: "./enzyme.config.js"
};