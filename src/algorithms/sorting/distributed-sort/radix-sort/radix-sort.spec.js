import { testSortAlgorithm } from '../../sort-algorithm-tests.js';
import { radixSort } from './radix-sort.js';
import { radixSortLSD } from './radix-sort-lsd.js';


testSortAlgorithm(radixSort, 'Radix Sort', { reverseCompare: false });
// testSortAlgorithm(radixSortLSD, 'Radix Sort LSD', { reverseCompare: false });