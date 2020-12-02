
const Sequence = require('../Sequence');
const assert = require('assert');

describe('Sequence test', () => {
  it('Shift cyxcrclqj left gives jcyxcrclq', () => {
    let sequence = new Sequence('cyxcrclqj');
    sequence.shiftLeft();
    assert.ok('jcyxcrclq' == sequence.content);
  });
  it('Shift alphabetical letters to left from yxcrclqjc gives zydsdmrkd', () => {
    let sequence = new Sequence('yxcrclqjc');
    sequence.shiftAlphabetLeft();
    assert.ok('zydsdmrkd' == sequence.content);
  });
  it('potitchat has a correspondence of 8 with petitchat', () => {
    let sequence = new Sequence('potitchat');
    assert.ok(8 == sequence.getCorrespondenceWith('petitchat'));
  });
  it('buqpujudi has a correspondence of 0 with petitchat', () => {
    let sequence = new Sequence('buqpujudi');
    assert.ok(0 == sequence.getCorrespondenceWith('petitchat'));
  });
})
