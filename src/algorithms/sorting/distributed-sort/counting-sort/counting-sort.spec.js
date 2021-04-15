import { countingSort } from './counting-sort.js';
import { testSortAlgorithm } from '../../sort-algorithm-tests.js';

testSortAlgorithm(countingSort, 'Counting Sort', { reverseCompare: false });
