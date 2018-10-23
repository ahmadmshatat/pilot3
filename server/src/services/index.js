const pilot = require('./pilot/pilot.service.js');
const list = require('./list/list.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pilot);
  app.configure(list);
};
