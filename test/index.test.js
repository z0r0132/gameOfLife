var assert = require('assert');
var life = require('../life')

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
describe('checkRow', function() {
    it('first element with all true', function() {
      var i=0, arr=[true, true, true, true, true, true, true, true], currentRow = false
      assert.equal(life.checkRow(i, arr, currentRow), 2);
    });
    it('first element with all true with current row', function() {
      var i=0, arr=[true, true, true, true, true, true, true, true], currentRow = true
      assert.equal(life.checkRow(i, arr, currentRow), 1);
    });
    it('last element with all true', function() {
      var i=7, arr=[true, true, true, true, true, true, true, true], currentRow = false
      assert.equal(life.checkRow(i, arr, currentRow), 2);
    });
    it('last element with all true with current row', function() {
      var i=7, arr=[true, true, true, true, true, true, true, true], currentRow = true
      assert.equal(life.checkRow(i, arr, currentRow), 1);
    });
    it('middle element with all true', function() {
      var i=3, arr=[true, true, true, true, true, true, true, true], currentRow = false
      assert.equal(life.checkRow(i, arr, currentRow), 3);
    });
    it('middle element with all true with current row', function() {
      var i=3, arr=[true, true, true, true, true, true, true, true], currentRow = true
      assert.equal(life.checkRow(i, arr, currentRow), 2);
    });
    it('first element', function() {
      var i=0, arr=[true, false, true, true, false, true, false, true], currentRow = false
      assert.equal(life.checkRow(i, arr, currentRow), 1);
    });
    it('first element with current row', function() {
      var i=0, arr=[true, false, true, true, false, true, false, true], currentRow = true
      assert.equal(life.checkRow(i, arr, currentRow), 0);
    });
    it('last element', function() {
      var i=7, arr=[true, false, true, true, false, true, false, true], currentRow = false
      assert.equal(life.checkRow(i, arr, currentRow), 1);
    });
    it('last element with current row', function() {
      var i=7, arr=[true, false, true, true, false, true, false, true], currentRow = true
      assert.equal(life.checkRow(i, arr, currentRow), 0);
    });
    it('middle element', function() {
      var i=3, arr=[true, false, true, true, false, true, false, true], currentRow = false
      assert.equal(life.checkRow(i, arr, currentRow), 2);
    });
    it('middle element with current row', function() {
      var i=3, arr=[true, false, true, true, false, true, false, true], currentRow = true
      assert.equal(life.checkRow(i, arr, currentRow), 1);
    });
});
