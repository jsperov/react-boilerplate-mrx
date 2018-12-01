module.exports = {
  preset: 'ts-jest',
  browser: true,
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  setupFiles: ["./__tests__/global.js"],
  modulePathIgnorePatterns: [
    "./node_modules/",
    "./example/",
    "./__tests__/global.js",
    "./enzyme.config.js"
  ],
  setupTestFrameworkScriptFile: "./enzyme.config.js"
};