var assert = require('assert');
var life = require('../index')

describe('getNewValue', function() {
    it('when current is false return false for numberOfAliveNeighbors different than 3', function() {
      assert.equal(life.getNewValue(false, ), false);
      assert.equal(life.getNewValue(false, null), false);
      assert.equal(life.getNewValue(false, 0), false);
      assert.equal(life.getNewValue(false, 1), false);
      assert.equal(life.getNewValue(false, 2), false);
      assert.equal(life.getNewValue(false, 4), false);
      assert.equal(life.getNewValue(false, 5), false);
      assert.equal(life.getNewValue(false, 6), false);
      assert.equal(life.getNewValue(false, 7), false);
      assert.equal(life.getNewValue(false, 8), false);
      assert.equal(life.getNewValue(false, "other"), false);
    });
    it('when current is false return true for numberOfAliveNeighbors is 3', function() {
      assert.equal(life.getNewValue(false, 3), true);
    });
    it('when current is true return false for numberOfAliveNeighbors different than 2 or 3', function() {
      assert.equal(life.getNewValue(true, ), false);
      assert.equal(life.getNewValue(true, null), false);
      assert.equal(life.getNewValue(true, 0), false);
      assert.equal(life.getNewValue(true, 1), false);
      assert.equal(life.getNewValue(true, 4), false);
      assert.equal(life.getNewValue(true, 5), false);
      assert.equal(life.getNewValue(true, 6), false);
      assert.equal(life.getNewValue(true, 7), false);
      assert.equal(life.getNewValue(true, 8), false);
      assert.equal(life.getNewValue(true, "other"), false);
    });
    it('when current is true return true for numberOfAliveNeighbors  is 2 or 3', function() {
      assert.equal(life.getNewValue(true, 2), true);
      assert.equal(life.getNewValue(true, 3), true);
    });
});
// getNewValue(true, 0)
// false
// getNewValue(true, 1)
// false
// getNewValue(true, 2)
// true
// getNewValue(true, 3)
// true
// getNewValue(true, 4)
// false
// getNewValue(true, 5)
// false
// getNewValue(true, 6)
// false
// getNewValue(true, 7)
// false
// getNewValue(true, 8)
// false
// getNewValue(false, 3)
// true
// getNewValue(false, 0)
// false
// getNewValue(false, 1)
// false
// getNewValue(false, 2)
// false
// getNewValue(false, 4)
// false
// getNewValue(false, 5)
// false
// getNewValue(false, 6)
// false
// getNewValue(false, 7)
// false
// getNewValue(false, 8)
// false
