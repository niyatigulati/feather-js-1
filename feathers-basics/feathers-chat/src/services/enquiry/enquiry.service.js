// Initializes the `enquiry` service on path `/enquiry`
const { Enquiry } = require('./enquiry.class');
const createModel = require('../../models/enquiry.model');
const hooks = require('./enquiry.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/enquiry', new Enquiry(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('enquiry');

  service.hooks(hooks);
};
