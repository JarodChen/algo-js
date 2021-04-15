import { bucketSort } from './bucket-sort.js';
import { testSortAlgorithm } from '../../sort-algorithm-tests.js';

testSortAlgorithm(bucketSort, 'Bucket Sort', { reverseCompare: false });
