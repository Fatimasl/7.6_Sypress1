const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //retries: 2,
    pageLoadTimeout: 50000,
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
