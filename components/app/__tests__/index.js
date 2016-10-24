/* global describe, it, expect */
/* eslint no-unused-expressions: "off", require-jsdoc: "off"*/

import sinon from 'sinon';

import App from '..';

describe('<App />', () => {
  describe('Notifcations', () => {
    it('should update state after notifcation', () => {
      const stub = sinon.stub(App.prototype, 'setState');
      const obj = { test: 1 };
      const app = new App();

      app.notify('search', obj);

      expect(stub.calledWith({
        search: obj
      })).toBe(true);

      stub.restore();
    });
  });
});
