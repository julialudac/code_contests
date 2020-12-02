
const Sequence = require('../Sequence');
const Solution = require('../Solution');
const assert = require('assert');

describe('Sequence test', () => {
  it('cyxcrclqj to petitchat is at best potitchat', () => {
    let input = [
      9,
      "cyxcrclqj",
      "petitchat"
    ];
    solution = new Solution(input);
    assert.ok('potitchat' == solution.getAnswer());
  });
  it('petitchat to petitchat is at best petitchat', () => {
    let input = [
      9,
      "petitchat",
      "petitchat"
    ];
    solution = new Solution(input);
    assert.ok('petitchat' == solution.getAnswer());
  });
  it('uiy to lzp is at best lzp', () => {
    let input = [
    3, 'uiy', 'lzp'
    ];
    solution = new Solution(input);
    assert.ok('lzp' == solution.getAnswer());
  });
});
