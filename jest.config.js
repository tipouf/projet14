module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    "^.+.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.app.json",
      diagnostics: true,
    }],
  },
};