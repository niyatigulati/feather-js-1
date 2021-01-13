const assert = require('assert');
const app = require('../../src/app');

describe('\'enquiry\' service', () => {
  it('registered the service', () => {
    const service = app.service('enquiry');

    assert.ok(service, 'Registered the service');
  });
});
