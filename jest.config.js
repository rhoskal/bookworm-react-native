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
      branches: 70,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  preset: "@testing-library/react-native",
  setupFiles: ["@testing-library/jest-native"],
  setupFilesAfterEnv: ["@testing-library/react-native/cleanup-after-each"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native-screens|react-native-gesture-handler|react-native-reanimated|react-navigation|@react-navigation/.*|react-navigation-stack|react-native-safe-area-view)/)",
  ],
};
