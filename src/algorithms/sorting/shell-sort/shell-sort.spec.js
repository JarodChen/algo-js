import { testSortAlgorithm } from '../sort-algorithm-tests.js';
import { shellSort } from './shell-sort.js';
import { shellSort1 } from './shell-sort1.js';

testSortAlgorithm(shellSort, 'Shell Sort');
// testSortAlgorithm(shellSort1, 'Shell Sort');