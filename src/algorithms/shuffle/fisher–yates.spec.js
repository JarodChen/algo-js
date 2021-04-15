// import 'mocha';
import chai from 'chai';
import { fisherYatesShuffle } from './fisher–yates.js';

let expect = chai.expect;

describe('Fisher-Yates Suffle', () => {
  const SIZE = 100;

  function createSortedArray() {
    const array = [];
    for (let i = 1; i <= SIZE; i++) {
      array.push(i);
    }
    return array;
  }

  it('works with empty arrays', () => {
    expect(fisherYatesShuffle([])).to.deep.equal([]);
  });

  it('works with arrays with a single value', () => {
    const array = [1];
    expect(fisherYatesShuffle(array)).to.deep.equal(array);
  });

  it('works with sorted arrays', () => {
    let array = createSortedArray();
    const sortedArray = createSortedArray();
    array = fisherYatesShuffle(array);
    expect(array).to.not.deep.equal(sortedArray);
  });
});
