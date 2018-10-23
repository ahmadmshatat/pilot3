const assert = require('assert');
const app = require('../../src/app');

describe('\'pilot\' service', () => {
  it('registered the service', () => {
    const service = app.service('pilot');

    assert.ok(service, 'Registered the service');
  });
});
