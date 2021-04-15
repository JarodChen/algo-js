// import 'mocha';
import chai from 'chai';
import { matrixChainOrder } from './matrix-chain-multiplication.js';

let expect = chai.expect;

describe('Matrix Chain Multiplication', () => {

  it('works with DP approach', () => {
    const p = [10, 100, 5, 50, 1];

    expect(matrixChainOrder(p)).to.equal(1750);
  });
});
