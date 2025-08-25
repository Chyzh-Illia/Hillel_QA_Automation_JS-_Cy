const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl:
      process.env.ENV === "quato2"
        ? process.env.CYPRESS_BASE_URL_QAUTO2
        : process.env.CYPRESS_BASE_URL_QAUTO1,

    env: {
      email: process.env.CYPRESS_USER_EMAIL,
      password: process.env.CYPRESS_USER_PASSWORD,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
