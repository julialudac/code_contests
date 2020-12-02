// inheriting from String, I didn't manage to affect to this the content => I gave up on this
class Sequence {
  constructor(content) {
    this.content = content;
  }
  shiftLeft() {
    const lastCharacter = this.content[this.content.length-1];
    this.content = this.content.substring(0, this.content.length-1);
    this.content = lastCharacter + this.content;
  }
  shiftAlphabetLeft() {
    const contentArray = this.content.split('').map((character) => {
      if (character == 'z') {
        return 'a';
      }
      const characterAscii = character.charCodeAt(0) + 1;
      return String.fromCharCode(characterAscii);
    });
    this.content = contentArray.join('');
  }
  getCorrespondenceWith(otherContent) {
    let correspondence = 0;
    for(let i=0; i< this.content.length; i++) {
      if(this.content[i] == otherContent[i]) {
        correspondence++;
      }
    }
    return correspondence;
  }
} 
module.exports = Sequence;
