const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pom: {
    integrationFolder: "cypress/integration/pom", // Ruta de la carpeta de pruebas POM
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
