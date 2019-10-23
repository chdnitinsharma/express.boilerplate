// JOI model

const testModel = require("../JoiModel/Request/test");

const setup = (app, allController, validator) => {
  const { testController, homeController } = allController;

  /* GET home page. */
  app.get("/", homeController.index);
  app.get("/test", validator.query(testModel.test), testController.printHelloWorld);
};

module.exports = setup;
