const i18n = require("i18n");

const setUp = (app, pathToLocales) => {
  const localesDirectory = pathToLocales || __dirname;

  i18n.configure({
    locales: ["en", "ar"],
    directory: `${localesDirectory}/locales`,
    // setting of log level DEBUG - default to require('debug')('i18n:debug')
    logDebugFn: msg => {
      console.log("debug", msg);
    },

    // setting of log level WARN - default to require('debug')('i18n:warn')
    logWarnFn: msg => {
      console.log("warn", msg);
    },

    // setting of log level ERROR - default to require('debug')('i18n:error')
    logErrorFn: msg => {
      console.log("error", msg);
    }
  });

  app.use(i18n.init);

  app.get("/getCatalog", (req, res) => {
    res.json(i18n.getCatalog());
  });
};

module.exports = setUp;
