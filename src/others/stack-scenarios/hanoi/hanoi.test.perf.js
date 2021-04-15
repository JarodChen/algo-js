import { perfTest } from '../../perf.js'
import { hanoi, hanoiStack } from './hanoi.js'

var palats = 22;
perfTest(hanoi, palats, 'a', 'b', 'c')
perfTest(hanoiStack, palats)