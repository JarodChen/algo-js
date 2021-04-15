// import 'mocha';
import chai from 'chai';
import { lcsPrint } from './longest-common-subsequence-print.js';

let expect = chai.expect;

describe('LCS Dynamic Programming with print solution', () => {

  it('works with DP approach with print solution', () => {
    const wordX = 'acbaed';
    const wordY = 'abcadf';

    expect(lcsPrint(wordX, wordY)).to.equal('acad');
  });
});
