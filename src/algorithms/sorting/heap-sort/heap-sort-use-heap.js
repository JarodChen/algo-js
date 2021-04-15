import { defaultCompare, swap } from '../../../util.js';
import { MaxHeap } from '../../../data-structures/heap/heap.js';

export default function heapSortUseHeap(array, compareFn = defaultCompare) {
    let heap = buildMaxHeap(array, compareFn);

    for(let i = array.length -1; i >=0; i--){
        array[i] =  heap.extract();
    }

    return array;
}

function buildMaxHeap(array, compareFn){
    let heap = new MaxHeap(compareFn);

    array.forEach(a => {
        heap.insert(a);
    });

    return heap;
}
