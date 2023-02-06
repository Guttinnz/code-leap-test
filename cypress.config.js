const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "8zt84v",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
