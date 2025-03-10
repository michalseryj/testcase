const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com/',
    defaultCommandTimeout: 10000, // Set timeout to 10 seconds (10000 ms)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
