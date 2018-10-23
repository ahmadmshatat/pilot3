// Initializes the `pilot` service on path `/pilot`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pilot.model');
const hooks = require('./pilot.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pilot', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('pilot');

  service.hooks(hooks);
};
