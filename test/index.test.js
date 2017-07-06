'use strict';

/**
 * Module dependencies.
 */

const TestModel = require('./fixtures/test-model');

/**
 * Test `TimestampPlugin`.
 */

describe('TimestampPlugin', () => {
  let model;

  beforeEach(() => {
    model = new TestModel();
  });

  describe('$beforeInsert', () => {
    it('should add `createdAt` and `updatedAt` properties to the model', () => {
      return model.$beforeInsert().then(() => {
        expect(model).toEqual({
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date)
        });
      });
    });
  });

  describe('$beforeUpdate', () => {
    it('should update `updatedAt` property of the model', () => {
      model.updatedAt = 'foobar';

      return model.$beforeUpdate().then(() => {
        expect(model).toEqual({
          updatedAt: expect.any(Date)
        });
      });
    });
  });
});
