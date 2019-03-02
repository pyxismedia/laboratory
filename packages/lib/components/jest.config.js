module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.(tsx?|jsx?)$": "ts-jest",
    "^.+\\.(css|less|md|svg|scss)$": "<rootDir>/.jest/.jestMock.js"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/.jest/setupTestFramework.ts",
    "<rootDir>/.jest/setupEnzyme.js"
  ]
};
