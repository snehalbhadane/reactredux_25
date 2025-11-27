module.export = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  
  moduleNameMapper: {
  "^react-router-dom$": "react-router-dom/dist/index.js"
}
};