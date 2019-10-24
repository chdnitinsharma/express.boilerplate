/* https://eslint.org/docs/rules/ */

const _2xx = require("./_2xx.js");
const _4xx = require("./_4xx.js");
const _5xx = require("./_5xx.js");

const responseAttachToRes = res => {
  _2xx(res);
  _4xx(res);
  _5xx(res);
};

module.exports = responseAttachToRes;
