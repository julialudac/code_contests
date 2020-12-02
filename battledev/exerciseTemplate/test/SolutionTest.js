
const Solution = require('../Solution');
const assert = require('assert');

describe('Solution test', () => {
  it('it', () => {
    const input = [ ]; // copy paste input line
    const expected = "";

    const solution = new Solution(input);
    const resp = solution.getAnswer();

    console.log(`sol:`, resp);
    assert.ok(expected == resp);
  });
});

