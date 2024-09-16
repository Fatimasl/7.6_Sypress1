const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //retries: 2,
    //pageLoadTimeout: 50000,
    env: {
      viewVersion: "local",
    },
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      if (config.env.viewVersion === "notebook") {
        config.viewportWidth = 1024;
        config.viewportHeight = 768;
      } else if (config.env.viewVersion === "mobile") {
        config.viewportWidth = 320;
        config.viewportHeight = 480;
      }
      return config;
    },
  },
});
