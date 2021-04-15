import { perfTest } from '../../perf.js'
import { sequentialSearch } from './sequential/sequential-search.js';
import { binarySearch } from './binary/binary-search.js';
import * as binarySearchRecursive from './binary/binary-search-recursive.js';
import { interpolationSearch } from './interpolation/interpolation-search.js';



let times = 2000;
let testArray = [];
for (let i = 0; i < times; i++) {
    testArray.push(times - i);
}
testArray = [20, 19, 19, 10, 1, 3, 4, 9, 55, 56, 57, 88, 89, 230, 155, 166, 2058, 1024];
let findValue = 88;

Array.prototype.clone = function () {
    return [].concat(this);
    //或者 return this.concat();
}

perfTest(sequentialSearch, testArray.clone(), findValue)
console.log(sequentialSearch(testArray.clone(), findValue));

perfTest(binarySearch, testArray.clone(), findValue)
console.log(binarySearch(testArray.clone(), findValue));

perfTest(binarySearchRecursive.binarySearch, testArray.clone(), findValue)
console.log(binarySearchRecursive.binarySearch(testArray.clone(), findValue));

perfTest(interpolationSearch, testArray.clone(), findValue)
console.log(interpolationSearch(testArray.clone(), findValue));
