module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/index.ts",
    "!src/**/types.ts",
    "!src/constants/*",
    "!src/navigation/*",
    "!**/node_modules/**",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  preset: "@testing-library/react-native",
  setupFiles: ["./jest_setup.js"],
  setupFilesAfterEnv: ["@testing-library/react-native/cleanup-after-each"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native-screens|react-native-gesture-handler|react-native-reanimated|react-navigation|@react-navigation/.*|react-navigation-stack|react-native-safe-area-view)/)",
  ],
};
