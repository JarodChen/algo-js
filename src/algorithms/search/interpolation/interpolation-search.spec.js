import { interpolationSearch } from './interpolation-search.js';
import { testSearchAlgorithm } from '../search-algorithms-tests.js';

testSearchAlgorithm(interpolationSearch, 'Interpolation Search', { customEquals: false });
