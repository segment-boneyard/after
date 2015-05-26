'use strict';

/**
 * Return the `fn` wrapped in logic that will only let it be called after
 * it has been invoked a certain number of `times`.
 *
 * @param {Number} times
 * @param {Function} fn
 */

var after = function after(times, fn) {
  return function() {
    if (--times < 1) {
      return fn.apply(this, arguments);
    }
  };
};

/**
 * Expose `after`.
 */

module.exports = after;
