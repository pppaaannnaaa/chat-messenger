module.exports = {
    clearMocks: true,
    collectCoverageFrom: [
      'src/**/*.{js,ts}',
    ],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
      "/node_modules/", "/.vscode/","/.idea/","/config/","/scripts/"
    ],
    testEnvironment: "node",
  };
  