const Joi = require("@hapi/joi");

exports.test = Joi.object({
  ids: Joi.number()
    .integer()
    .required()
});
