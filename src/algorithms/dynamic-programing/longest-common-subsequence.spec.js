// import 'mocha';
import chai from 'chai';
import { lcs } from './longest-common-subsequence.js';

let expect = chai.expect;

describe('LCS Dynamic Programming', () => {

  it('works with DP approach', () => {
    const wordX = 'acbaed';
    const wordY = 'abcadf';

    expect(lcs(wordX, wordY)).to.equal(4);
  });
});
