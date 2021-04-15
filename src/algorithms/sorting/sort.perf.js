import { perfTest } from '../../perf.js'
import heapSort from '../sorting/heap-sort/heap-sort.js'
import heapSortUseHeap from '../sorting/heap-sort/heap-sort-use-heap.js'
import bubbleSort from '../sorting/bubble/bubble-sort.js'
import modifiedBubbleSort from '../sorting/bubble/bubble-sort-improved.js'

import { selectionSort } from '../sorting/selection-sort/selection-sort.js';
import { insertionSort } from '../sorting/insertion-sort/insertion-sort.js';
import { mergeSort } from '../sorting/merge-sort/merge-sort.js';
import { quickSort } from '../sorting/quick-sort/quick-sort.js';
import { countingSort } from '../sorting/distributed-sort/counting-sort/counting-sort.js';
import { bucketSort } from '../sorting/distributed-sort/bucket-sort/bucket-sort.js';
import { radixSort } from '../sorting/distributed-sort/radix-sort/radix-sort.js';
// import { radixSort1 } from './distributed-sort/radix-sort/radix-sort1.js';
import { shellSort } from '../sorting/shell-sort/shell-sort.js';

import { getRandomNumArray } from '../../mockData.js';


Array.prototype.clone = function () {
    return [].concat(this);
    //或者 return this.concat();
}

let testArray = [];
let times = 2000;
for (let i = 0; i < times; i++) {
    testArray.push(times - i);
}
testArray = [20, 19, 19, 10, 1, 3, 4, 9, 55, 56, 57, 88, 89, 230, 155, 166, 2058, 1024];

testArray = getRandomNumArray(10, 0, 20000)
console.log('begin test')
// Object.assign(testArray,templateArray);
// testArray = [...templateArray];
// testArray = templateArray.clone();
// console.log(testArray)
perfTest(heapSort, testArray.clone())

// Object.assign(testArray,templateArray);
// testArray = templateArray.clone();
// console.log(testArray.clone())
perfTest(heapSortUseHeap, testArray.clone())

// testArray = templateArray.clone();
// console.log(testArray)
perfTest(bubbleSort, testArray.clone())
perfTest(modifiedBubbleSort, testArray.clone())
perfTest(selectionSort, testArray.clone())
perfTest(insertionSort, testArray.clone())
perfTest(mergeSort, testArray.clone())
perfTest(quickSort, testArray.clone())
perfTest(countingSort, testArray.clone())
perfTest(bucketSort, testArray.clone())
perfTest(radixSort, testArray.clone())
// perfTest(radixSortLSD, testArray.clone())
perfTest(shellSort, testArray.clone())


// perfTest(Array.prototype.sort, testArray)