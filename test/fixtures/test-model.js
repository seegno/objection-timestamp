'use strict';

/**
 * Module dependencies.
 */

const Model = require('objection').Model;
const timestamp = require('../../index');

/**
 * Export `TestModel`.
 */

module.exports = class TestModel extends timestamp(Model) {};
