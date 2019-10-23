/* https://eslint.org/docs/rules/ */

const _200 = require("./_200.js");
const _400 = require("./_400.js");
const _500 = require("./_500.js");

const responseAttachToRes = res => {
  _200(res);
  _400(res);
  _500(res);
};

module.exports = responseAttachToRes;
