const Sequence = require('./Sequence');

class Solution {
  constructor(input) {
    console.error("input:", input);
    this.word = input[1];
    this.target = input[2];
    this.bestSequence = "";
    this.bestCorrespondence = 0;
    this.nbOfComputations = 0;
  }
  _updateBestValues(currentSequence) {
  this.nbOfComputations++;
    const currentCorrespondence = currentSequence.getCorrespondenceWith(this.target);
    if (currentCorrespondence > this.bestCorrespondence) {
      this.bestCorrespondence = currentCorrespondence;
      this.bestSequence = new Sequence(currentSequence.content); 
    }
  }
  getAnswer() {
    
    // particular case
    if(this.word == this.target) {
      return this.word;
    }
    
    const performAllCharacterShifts = () => {
      let currentSequence = new Sequence(this.word);
      for(let _=1; _<=this.word.length; _++) { // N character shifts = 0 character shift
        currentSequence.shiftLeft();
        this._updateBestValues(currentSequence); 
        const performAllAlphabetShifts = () => {
          for(let _=1; _<=26;_++) { // 26 alphabet shifts = 0 alphabet shift
            currentSequence.shiftAlphabetLeft();
            this._updateBestValues(currentSequence);
          }
        }
        performAllAlphabetShifts();
      }
    }
    performAllCharacterShifts();
    return this.bestSequence.content;

  }
}

module.exports = Solution;
