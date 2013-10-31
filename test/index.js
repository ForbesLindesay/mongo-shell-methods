'use strict';

var assert = require('assert');
var test = require('testit');

test('data exists', function () {
  var data = require('../');
  var sections = ['collection', 'cursor', 'database', 'replication', 'sharding', 'subprocess', 'connection', 'native', 'objectid'];
  sections.forEach(function (section) {
    assert(Array.isArray(data[section]));
    assert(data[section].length > 0);
    data[section].forEach(function (method) {
      assert(method.name && typeof method.name === 'string');
      assert(method.description && typeof method.description === 'string');
      assert(method.href && typeof method.href === 'string');
    })
  })
})
