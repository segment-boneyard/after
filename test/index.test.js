'use strict';


/**
 * Module dependencies.
 */

// Alternate name to avoid Mocha global conflict
var _after = require('../');
var assert = require('assert');

/**
 * Tests.
 */

describe('after', function() {
  it('should work', function() {
    var i = 0;
    var fn = _after(3, function() { return ++i; });
    assert(fn() === undefined);
    assert(fn() === undefined);
    assert(fn() === 1);
    assert(fn() === 2);
  });
});
