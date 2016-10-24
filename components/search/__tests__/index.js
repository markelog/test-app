/* global describe, it, expect */
/* eslint no-unused-expressions: "off", require-jsdoc: "off"*/

import sinon from 'sinon';
import renderer from 'react-test-renderer';

import React from 'react';
import Search from '..';

describe('<Search />', () => {
  describe('snapshots', () => {
    it('full', () => {
      const tree = renderer.create(
        <Search notify={() => {}} />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('search method', () => {
    it('should search', (done) => {
      const test = { test: 1 };
      const notifyStub = sinon.stub();
      const data = {
        artists: {
          items: test,
        },
      };
      const response = {
        json: () => {
          return new Promise(resolve => resolve(data));
        },
      };

      // window.fetch doesn't exist in this env
      window.fetch = sinon.stub().returns(new Promise(resolve => resolve(response)));

      const search = new Search({
        notify: notifyStub,
      });

      search.search('test');

      const args = window.fetch.firstCall.args[0];

      expect(args).toContain(Search.url);
      expect(args).toContain('q=test');

      // Since we are in the promise chain
      setTimeout(() => {
        expect(notifyStub.firstCall.args[0]).toEqual('search');
        expect(notifyStub.firstCall.args[1]).toEqual(test);
        done();
      });

      delete window.fetch;
    });
  });
});
